import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', 'ec3'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'b14'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '5c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4f6'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '096'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '394'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '731'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '4fa'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'dfe'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'be9'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'e26'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'f37'),
            routes: [
              {
                path: '/billing-cancellation-refund',
                component: ComponentCreator('/billing-cancellation-refund', 'c43'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/faqs',
                component: ComponentCreator('/getting-started/faqs', '627'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/freetrial',
                component: ComponentCreator('/getting-started/freetrial', 'c6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/introduction',
                component: ComponentCreator('/getting-started/introduction', 'e37'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/getting-started/quickstart',
                component: ComponentCreator('/getting-started/quickstart', 'ace'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/legal/integrated-data-processing',
                component: ComponentCreator('/legal/integrated-data-processing', 'ae2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/legal/security-privacy',
                component: ComponentCreator('/legal/security-privacy', 'afa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/legal/terms-and-services',
                component: ComponentCreator('/legal/terms-and-services', '2d4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/pricing-plans/billing-and-quotas',
                component: ComponentCreator('/pricing-plans/billing-and-quotas', 'ee0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/pricing-plans/connectors',
                component: ComponentCreator('/pricing-plans/connectors', 'f32'),
                exact: true
              },
              {
                path: '/pricing-plans/limits-and-features',
                component: ComponentCreator('/pricing-plans/limits-and-features', 'f05'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/pricing-plans/monitor-usage',
                component: ComponentCreator('/pricing-plans/monitor-usage', 'b13'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/pricing-plans/plans',
                component: ComponentCreator('/pricing-plans/plans', '54a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/pricing-plans/troubleshooting',
                component: ComponentCreator('/pricing-plans/troubleshooting', 'a75'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tutorial-basics/congratulations',
                component: ComponentCreator('/tutorial-basics/congratulations', '975'),
                exact: true
              },
              {
                path: '/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/tutorial-basics/create-a-blog-post', '3db'),
                exact: true
              },
              {
                path: '/tutorial-basics/create-a-document',
                component: ComponentCreator('/tutorial-basics/create-a-document', '575'),
                exact: true
              },
              {
                path: '/tutorial-basics/create-a-page',
                component: ComponentCreator('/tutorial-basics/create-a-page', '321'),
                exact: true
              },
              {
                path: '/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/tutorial-basics/deploy-your-site', 'fbe'),
                exact: true
              },
              {
                path: '/tutorial-basics/markdown-features',
                component: ComponentCreator('/tutorial-basics/markdown-features', '89e'),
                exact: true
              },
              {
                path: '/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/tutorial-extras/manage-docs-versions', 'dec'),
                exact: true
              },
              {
                path: '/tutorial-extras/translate-your-site',
                component: ComponentCreator('/tutorial-extras/translate-your-site', '403'),
                exact: true
              },
              {
                path: '/using-unite/alerts',
                component: ComponentCreator('/using-unite/alerts', '3d3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/dashboard',
                component: ComponentCreator('/using-unite/dashboard', '383'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/data-sources/google-ads/prebuilt-reports',
                component: ComponentCreator('/using-unite/data-sources/google-ads/prebuilt-reports', 'e2e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/data-sources/google-ads/setup-gads',
                component: ComponentCreator('/using-unite/data-sources/google-ads/setup-gads', '72c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/data-sources/google-analytics-4/prebuilt-reports',
                component: ComponentCreator('/using-unite/data-sources/google-analytics-4/prebuilt-reports', '649'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/data-sources/google-analytics-4/setup-ga4',
                component: ComponentCreator('/using-unite/data-sources/google-analytics-4/setup-ga4', '6d4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/data-sources/google-search-console/prebuilt-reports',
                component: ComponentCreator('/using-unite/data-sources/google-search-console/prebuilt-reports', 'c04'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/data-sources/google-search-console/setup-gsc',
                component: ComponentCreator('/using-unite/data-sources/google-search-console/setup-gsc', '9a9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/data-sources/hubspot/setup-hubspot',
                component: ComponentCreator('/using-unite/data-sources/hubspot/setup-hubspot', '15c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/data-sources/meta-ads/setup-meta',
                component: ComponentCreator('/using-unite/data-sources/meta-ads/setup-meta', 'b14'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/data-sources/overview',
                component: ComponentCreator('/using-unite/data-sources/overview', 'e76'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/destinations',
                component: ComponentCreator('/using-unite/destinations', '73d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/managing-user',
                component: ComponentCreator('/using-unite/managing-user', 'da9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/pipelines',
                component: ComponentCreator('/using-unite/pipelines', '62a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/profile-settings',
                component: ComponentCreator('/using-unite/profile-settings', '68a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/roles-permissions',
                component: ComponentCreator('/using-unite/roles-permissions', '172'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/using-unite/support-tickets',
                component: ComponentCreator('/using-unite/support-tickets', '266'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
