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
            rules: {
                /*
                 * The base rules misfire on type-only syntax: imported
                 * types read as unused variables, and global types read as
                 * undefined identifiers. `no-undef` and `no-unused-vars`
                 * are disabled here because TypeScript covers them instead
                 * (TS2304, and TS6133/TS6192 via `noUnusedLocals` /
                 * `noUnusedParameters`, which every `.ts`/`.tsx` package's
                 * own tsconfig must enable — TS's `strict` does not turn
                 * these on).
                 *
                 * import/no-unresolved additionally cannot follow the
                 * `.js` -> `.ts` specifier mapping this repo uses
                 * (`./ou-tree.js` resolves to `ou-tree.tsx`). TypeScript
                 * reports a genuine missing module as TS2307, so the
                 * check is not lost, only moved.
                 */
                'no-unused-vars': 'off',
                'no-undef': 'off',
                'import/no-unresolved': 'off',
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
