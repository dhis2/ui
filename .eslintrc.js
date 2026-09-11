const cliStyle = require('@dhis2/cli-style')

const config = {
    extends: [cliStyle.config.eslintReact],
    globals: {
        cy: 'readonly',
        Cypress: 'readonly',
    },
    rules: {
        'import/no-webpack-loader-syntax': 'error',
        'import/no-useless-path-segments': 'error',
        'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
    },
    overrides: [
        {
            files: [
                '*.stories.{js,jsx,ts,tsx}',
                '*.stories.e2e.{js,jsx,ts,tsx}',
                '**/__stories__/*.{js,jsx,ts,tsx}',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'off',
                'react/display-name': 'off',
                'react/prop-types': 'off',
            },
        },
        {
            files: [
                'components/*/src/**/*.{js,jsx,ts,tsx}',
                'collections/*/src/**/*.{js,jsx,ts,tsx}',
                'utilities/*/src/**/*.{js,jsx,ts,tsx}',
            ],
            excludedFiles: [
                '**/features/**/*.{js,jsx,ts,tsx}',
                '**/__tests__/**/*.{js,jsx,ts,tsx}',
                '*.test.{js,jsx,ts,tsx}',
                '*.stories*.{js,jsx,ts,tsx}',
                '**/__stories__/*.{js,jsx,ts,tsx}',
                '**/__stories__/**/*.{js,jsx,ts,tsx}',
                '*.d.ts',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'error',
            },
        },
        {
            files: ['**/*.{ts,tsx}'],
            parser: require.resolve('@typescript-eslint/parser'),
            // TypeScript ambient namespaces, which `no-undef` does not know.
            globals: { JSX: 'readonly', NodeJS: 'readonly' },
            settings: {
                // Lets `import/no-unresolved` follow an extensionless relative
                // import to a `.ts`/`.tsx` file.
                'import/resolver': {
                    node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
                },
            },
            rules: {
                /*
                 * TypeScript sources import siblings without an extension
                 * (`./ou-tree` resolves to `ou-tree.tsx`), the inverse of the
                 * `ignorePackages` rule the JavaScript packages follow.
                 */
                'import/extensions': [
                    'error',
                    'never',
                    { ts: 'never', tsx: 'never' },
                ],
            },
        },
    ],
}

// Run cpu intensive checks only on CI
const isCI = !!process.env.CI

if (isCI) {
    if (!config.rules) {
        config.rules = {}
    }

    config.rules['import/no-cycle'] = 'error'
    config.rules['import/no-self-import'] = 'error'

    // for newer versions of import plugin
    //config.rules['import/no-internal-modules'] = 'error'
    //config.rules['import/no-relative-parent-imports'] = 'error'
    //config.rules['import/no-relative-packages'] = 'error'
}

module.exports = config
