// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VonVibingMachine: The Book',
  tagline: 'A multi-agent machine architecture for LLMs to self-manage',
  favicon: 'img/favicon_48x48.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.vonvibingmachine.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pdg744', // Usually your GitHub org/user name.
  projectName: 'VonVibingMachine-TheBook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/pdg744/VonVibingMachine-TheBook/tree/main/',
        },
        blog: false, // Disable blog functionality
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'VonVibingMachine',
        logo: {
          alt: 'VonVibingMachine Logo',
          src: 'img/logo-no-text.png',
          href: '/table-of-contents',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'The Book',
          },
          {
            to: '/about',
            label: 'About',
            position: 'left',
          },
          {
            href: 'https://github.com/pdg744/VonVibingMachine-TheBook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'The Book',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Dialogues',
                to: '/first-month/dialogue-001',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pdg744/VonVibingMachine-TheBook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VonVibingMachine Project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'A multi-agent machine architecture for LLMs to self-manage' },
        { property: 'og:image', content: 'https://www.vonvibingmachine.com/img/social-card.png' },
        { property: 'og:title', content: 'VonVibingMachine: The Book' },
        { property: 'og:url', content: 'https://www.vonvibingmachine.com/' },
      ],
    }),
};

export default config;
