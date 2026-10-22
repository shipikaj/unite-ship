import fs from "node:fs";
import path from "node:path";

/**
 * Helper to unwrap Strapi v4 vs v5 data structures
 */
function unwrap(item) {
  if (!item) return null;
  if (item.data) item = item.data;
  if (Array.isArray(item)) return item.map(unwrap);
  const fields = item.attributes ? { id: item.id, ...item.attributes } : item;
  return fields;
}

function cleanContent(text, strapiUrl = "") {
  if (!text) return "";
  let content = text.trim();

  // Convert relative Strapi uploads (/uploads/...) to absolute URLs
  if (strapiUrl) {
    const cleanBaseUrl = strapiUrl.replace(/\/$/, "");
    content = content.replace(/!\[(.*?)\]\(\/uploads\/(.*?)\)/g, `![$1](${cleanBaseUrl}/uploads/$2)`);
    content = content.replace(/src="\/uploads\/(.*?)"/g, `src="${cleanBaseUrl}/uploads/$1"`);
  }

  // Escape unhandled JSX placeholders like <password>, <host> to prevent MDX JSX parsing errors
  content = content.replace(/(?<!`)(<[a-zA-Z0-9_-]+>)(?!`)/g, "`$1`");

  return content;
}

function resolveStrapiUrl(context, options) {
  if (process.env.STRAPI_URL || options?.strapiUrl) {
    return (process.env.STRAPI_URL || options.strapiUrl).replace(/\/$/, "");
  }
  return "https://uniteyourdata.com/api/cms";
}

async function fetchStrapiGuides(primaryUrl, headers) {
  const candidateUrls = [];
  if (primaryUrl) candidateUrls.push(primaryUrl);
  candidateUrls.push("https://uniteyourdata.com/api/cms");
  candidateUrls.push("https://development.uniteyourdata.com/api/cms");
  candidateUrls.push("http://localhost:1337");

  const uniqueUrls = [...new Set(candidateUrls.map((u) => u.replace(/\/$/, "")))];

  for (const baseUrl of uniqueUrls) {
    const endpoints = [
      `${baseUrl}/api/setup-guides?populate=*`,
      `${baseUrl}/setup-guides?populate=*`,
    ];

    for (const endpoint of endpoints) {
      try {
        // redirect: "manual" prevents following AWS ALB OAuth 302 redirects
        const res = await fetch(endpoint, { headers, redirect: "manual" });
        if (res.status === 200) {
          const json = await res.json();
          if (json && Array.isArray(json.data) && json.data.length > 0) {
            return { guidesData: json.data, activeUrl: baseUrl };
          }
        }
      } catch (err) {
        // Continue trying fallback endpoints
      }
    }
  }

  return { guidesData: [], activeUrl: primaryUrl };
}

/**
 * Official Docusaurus Plugin for Strapi CMS Documentation Sync
 * Implements the official Docusaurus Lifecycle API: `loadContent`
 */
export default function docusaurusPluginStrapiDocs(context, options) {
  const siteDir = context.siteDir;
  const initialUrl = resolveStrapiUrl(context, options);
  const STRAPI_TOKEN = process.env.STRAPI_TOKEN || options.strapiToken || "";

  return {
    name: "docusaurus-plugin-strapi-docs",

    /**
     * Official Docusaurus Lifecycle Method: loadContent
     * Runs at startup/build time to fetch content from external source (Strapi CMS)
     */
    async loadContent() {
      console.log(`\n[docusaurus-plugin-strapi-docs] (Lifecycle: loadContent) Synchronizing setup guides from Strapi CMS...`);

      const headers = {
        "Content-Type": "application/json",
        "X-Internal-Call": "true",
      };
      if (STRAPI_TOKEN) {
        headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
      }

      const { guidesData, activeUrl } = await fetchStrapiGuides(initialUrl, headers);
      const STRAPI_URL = activeUrl || initialUrl;

      if (!guidesData || !guidesData.length) {
        console.warn(`[docusaurus-plugin-strapi-docs] Warning: Could not reach active Strapi CMS endpoint or no setup guides found.`);
        console.warn(`[docusaurus-plugin-strapi-docs] Preserving existing local docs.\n`);
        return null;
      }

      console.log(`[docusaurus-plugin-strapi-docs] Connected to Strapi CMS at: ${STRAPI_URL}`);
      console.log(`[docusaurus-plugin-strapi-docs] Found ${guidesData.length} setup guide(s). Syncing to MDX...`);

      let syncedCount = 0;

      for (const guideItem of guidesData) {
        const guide = unwrap(guideItem);
        if (!guide) continue;

        const resource = unwrap(guide.resource);
        if (!resource || !resource.slug) {
          console.warn(`[docusaurus-plugin-strapi-docs] Skipping guide ID ${guide.id}: missing linked resource or slug.`);
          continue;
        }

        const name = resource.name || "Data Source";
        const slug = resource.slug;
        const resourceType = (resource.resourceType || "source").toLowerCase(); // 'source' or 'destination'
        const prerequisites = cleanContent(guide.prerequisites, STRAPI_URL);
        const steps = Array.isArray(guide.steps) ? guide.steps : [];

        const isDestination = resourceType === "destination";
        const subDir = isDestination ? "destinations" : "data-sources";

        const targetDir = path.join(siteDir, "docs", "using-unite", subDir, slug);

        // Find existing setup file (e.g. setup-meta.mdx, setup-gads.mdx, setup-ga4.mdx) or default to setup-${slug}.mdx
        let targetFileName = `setup-${slug}.mdx`;
        if (fs.existsSync(targetDir)) {
          const existingSetupFiles = fs.readdirSync(targetDir).filter((f) => f.startsWith("setup-") && f.endsWith(".mdx"));
          if (existingSetupFiles.length > 0) {
            targetFileName = existingSetupFiles[0];
          }
        }
        const targetFile = path.join(targetDir, targetFileName);

        let mdxContent = `---
title: Setup
description: Connect ${name} as a data ${resourceType} in Unite.
sidebar_position: 2
---

# Connect ${name}

This guide explains how to connect your ${name} account as a data ${resourceType} in Unite.

Once connected, you can use your ${name} data to build pipelines and sync data to your destination.

---
`;

        if (prerequisites) {
          mdxContent += `
## Before you begin

${prerequisites}

---
`;
        }

        if (steps.length > 0) {
          mdxContent += `
## Connect your account

`;
          steps.forEach((stepObj, index) => {
            const stepText = cleanContent(stepObj.step || stepObj.content || "", STRAPI_URL);
            mdxContent += `### Step ${index + 1}\n\n${stepText}\n\n---\n\n`;
          });
        }

        mdxContent += `
## Next step

After connecting your ${name} account, create a pipeline to begin syncing data.
`;

        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(targetFile, mdxContent.trim() + "\n", "utf-8");

        console.log(`  ✓ Synced [${resourceType}] ${name} -> ${path.relative(siteDir, targetFile)}`);
        syncedCount++;
      }

      console.log(`[docusaurus-plugin-strapi-docs] Successfully synced ${syncedCount} setup guide(s).\n`);
      return { syncedCount };
    },

    /**
     * Official Docusaurus Lifecycle Method: contentLoaded
     */
    async contentLoaded({ content, actions }) {
      if (content) {
        console.log(`[docusaurus-plugin-strapi-docs] (Lifecycle: contentLoaded) Content process complete.`);
      }
    },
  };
}
