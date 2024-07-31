// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '구름이 문서',
  tagline: 'TTS봇, 구름이의 문서 사이트에요.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cloudydocs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organiz이',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '설명서',
          },
          {
            href: 'https://discord.gg/WRAHBWm9',
            label: '디스코드',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '설명서',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '링크',
            items: [
              {
                label: '디스코드',
                href: 'https://discord.gg/WRAHBWm9',
              },
            ],
          },
        ],
        copyright: `구름이의 문서 사이트에요!`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
