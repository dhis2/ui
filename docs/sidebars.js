/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    Sidebar: [
        {
            'Getting started': [
                'getting-started/readme',
                'getting-started/installation',
            ],
        },
        {
            Principles: [
                'principles/color',
                'principles/content-communication',
                'principles/design-for-use',
                'principles/forms',
                'principles/icons',
                'principles/layout',
                'principles/typography',
            ],
        },
        {
            Patterns: [
                'patterns/glossary',
                'patterns/designing-with-time',
                'patterns/writing',
                'patterns/large-data',
            ],
        },
        {
            Components: [
                'components/alertbar',
                'components/avatar',
                'components/button',
                'components/card',
                'components/checkbox',
                'components/chip',
                'components/data-table',
                'components/elevation',
                'components/fileinput',
                'components/inputfield',
                'components/loading',
                'components/menu',
                'components/modal',
                'components/notice-box',
                'components/org-unit-tree',
                'components/pagination',
                'components/popover',
                'components/radio',
                'components/segmented-control',
                'components/select',
                'components/switch',
                'components/tab',
                'components/tag',
                'components/tooltip',
                'components/transfer',
            ],
        },
        {
            Utilities: [
                'utilities/constants',
                {
                    Forms: [
                        'utilities/forms/react-final-form',
                        'utilities/forms/transformers',
                        'utilities/forms/validators',
                    ],
                }
            ],
        },
        {
            Recipes: [
                'recipes/recipes',
                'recipes/transfer-infinite-loading-all-options-selected',
            ],
        },
        {
            Help: [
                'help/migrating',
                'help/troubleshooting',
                'help/advanced-usage',
            ],
        },
        'package/changelog'
    ],
}

module.exports = sidebars
