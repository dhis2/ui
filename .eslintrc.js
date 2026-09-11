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
                '*.stories.js',
                '*.stories.tsx',
                '*.stories.e2e.js',
                '**/__stories__/*.js',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'off',
                'react/display-name': 'off',
                'react/prop-types': 'off',
            },
        },
        {
            files: [
                'components/*/src/**/*.js',
                'components/*/src/**/*.{ts,tsx}',
                'collections/*/src/**/*.js',
                'utilities/*/src/**/*.js',
            ],
            excludedFiles: [
                '**/features/**/*.js',
                '**/__tests__/**/*.js',
                '*.test.js',
                '*.test.ts',
                '*.test.tsx',
                '*.stories*.js',
                '*.stories*.ts',
                '*.stories*.tsx',
                '**/__stories__/*.js',
                '**/__stories__/**/*.js',
                '*.d.ts',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'error',
            },
        },
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: require.resolve('@typescript-eslint/parser'),
            settings: {
                /*
                 * Teach eslint-plugin-import's resolver about TypeScript
                 * sources, so `import/no-unresolved` keeps working for
                 * extensionless relative imports (`./ou-tree` -> `ou-tree.tsx`).
                 */
                'import/resolver': {
                    node: {
                        extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    },
                },
            },
            rules: {
                /*
                 * TypeScript reports an undefined identifier as TS2304, and
                 * unused code as TS6133/TS6196 because each `.ts`/`.tsx`
                 * package's tsconfig enables `noUnusedLocals` and
                 * `noUnusedParameters`. The base rules only misfire on
                 * type-only syntax, so they are off here and nowhere else.
                 */
                'no-unused-vars': 'off',
                'no-undef': 'off',
                /*
                 * TypeScript sources import siblings WITHOUT an extension
                 * (`./ou-tree` resolves to `ou-tree.tsx`), the inverse of the
                 * `ignorePackages` rule the JavaScript packages follow. This
                 * enforces that rather than merely permitting it.
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
