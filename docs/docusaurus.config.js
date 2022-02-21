const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const lightCodeTheme = require('prism-react-renderer/themes/github')
const { webpackConfig } = require('../storybook/src/webpack-config.js')

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'DHIS2 UI',
    tagline: 'React Components for DHIS2 Web Applications',
    url: 'https://ui.dhis2.nu',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'dhis2', // Usually your GitHub org/user name.
    projectName: 'ui', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/dhis2/ui',
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        // eslint-disable-next-line no-unused-vars
        function customWebpack(context, options) {
            return {
                name: 'custom-webpack',
                // eslint-disable-next-line no-unused-vars
                configureWebpack(config, isServer, utils) {
                    return webpackConfig(config)
                },
            }
        },
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
                switchConfig: {
                    darkIcon: '🌙',
                    darkIconStyle: {
                        marginLeft: '2px',
                    },
                    lightIcon: '☀️',
                    lightIconStyle: {
                        marginLeft: '1px',
                    },
                },
            },
            navbar: {
                title: 'DHIS2 UI',
                style: 'dark',
                logo: {
                    alt: 'DHIS2 UI Logotype',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'search',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/dhis2/ui',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Getting started',
                        items: [
                            {
                                label: 'About DHIS2 UI',
                                to: '/',
                            },
                            {
                                label: 'Installation',
                                to: '/getting-started/installation',
                            },
                        ],
                    },
                    {
                        title: 'DHIS2 UI Resources',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/dhis2/ui',
                            },
                            {
                                label: 'Storybook',
                                href: 'https://ui.dhis2.nu/demo',
                            },
                            {
                                label: 'Figma',
                                href: 'https://www.figma.com/community/file/999207206720939258/DHIS2-Design-System',
                            },
                        ],
                    },
                    {
                        title: 'More DHIS2 sites',
                        items: [
                            {
                                label: 'DHIS2.org',
                                href: 'https://dhis2.org',
                            },
                            {
                                label: 'Developer Portal',
                                href: 'https://developers.dhis2.org',
                            },
                            {
                                label: 'Community of Practice',
                                href: 'https://community.dhis2.org/tag/ui',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} DHIS2. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
