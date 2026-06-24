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
    component: ComponentCreator('/', '07a'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'abc'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '4df'),
            routes: [
              {
                path: '/alerts',
                component: ComponentCreator('/alerts', 'f1b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/billing-and-quotas',
                component: ComponentCreator('/billing-and-quotas', 'fd6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/billing-cancellation-refund',
                component: ComponentCreator('/billing-cancellation-refund', 'c43'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/connectors',
                component: ComponentCreator('/connectors', '882'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/dashboard-overview',
                component: ComponentCreator('/dashboard-overview', '50e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/data-sources',
                component: ComponentCreator('/data-sources', 'ee5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/destinations',
                component: ComponentCreator('/destinations', 'f10'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/faqs',
                component: ComponentCreator('/faqs', '96c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/freetrial',
                component: ComponentCreator('/freetrial', '3c9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/integrated-data-processing',
                component: ComponentCreator('/integrated-data-processing', '069'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/introduction',
                component: ComponentCreator('/introduction', '6f2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/limits-and-features',
                component: ComponentCreator('/limits-and-features', 'edb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/managing-user',
                component: ComponentCreator('/managing-user', '4ee'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/monitor-usage',
                component: ComponentCreator('/monitor-usage', 'a9a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/pipelines',
                component: ComponentCreator('/pipelines', '1ce'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/plans',
                component: ComponentCreator('/plans', '40a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/profile-settings',
                component: ComponentCreator('/profile-settings', '7ef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/quickstart',
                component: ComponentCreator('/quickstart', 'e4f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/roles-permissions',
                component: ComponentCreator('/roles-permissions', '86b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/security-privacy',
                component: ComponentCreator('/security-privacy', 'f04'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/support-tickets',
                component: ComponentCreator('/support-tickets', 'fbd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/terms-and-services',
                component: ComponentCreator('/terms-and-services', '430'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/troubleshooting',
                component: ComponentCreator('/troubleshooting', '9bb'),
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
