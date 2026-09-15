import config from '@dhis2/config-eslint/react'
import { defineConfig, globalIgnores } from 'eslint/config'

// Run cpu intensive checks only on CI
const isCI = !!process.env.CI

export default defineConfig([
    config,

    /*
     * Must follow the shared config: a negation only undoes an earlier
     * pattern. On eslint 10 `includeIgnoreFile` could read most of this from
     * .gitignore (eslint-plugin-import#3230, eslint-plugin-react#3979).
     */
    globalIgnores([
        '!*.js',
        '!eslint.config.mjs',
        '**/locales/**',
        'icons/src/react/**',
        'dist/**',
        '**/build/**',
        '**/.docusaurus/**',
        'cypress/assets/**',
        '.d2/**',
        // `react` rules misread type declarations as components, which
        // costs ~350 false positives across these files.
        '**/*.d.ts',
    ]),

    {
        languageOptions: {
            globals: { cy: 'readonly', Cypress: 'readonly' },
        },
        // ESLint only warns about these by default.
        linterOptions: { reportUnusedDisableDirectives: 'error' },
        rules: {
            'import/no-webpack-loader-syntax': 'error',
            'import/no-useless-path-segments': 'error',
            'react/no-unknown-property': [
                'error',
                { ignore: ['jsx', 'global'] },
            ],
            /*
             * The shared config leaves these four off. They are on here
             * because the JavaScript packages import siblings *with* an
             * extension (the TypeScript override below is the inverse), the
             * resolver issue behind `import/no-unresolved` does not affect
             * this repo, and `@dhis2/cli-app-scripts` compiles JSX with
             * `@babel/preset-react` in classic mode, so the React import is
             * load-bearing.
             */
            'import/extensions': ['error', 'ignorePackages'],
            'import/no-unresolved': 'error',
            'react/react-in-jsx-scope': 'error',
            'react/jsx-uses-react': 'error',
        },
    },

    {
        // These entry points are declared through an `exports` map, which
        // the resolver cannot read.
        files: ['eslint.config.mjs', '.prettierrc.mjs'],
        rules: { 'import/no-unresolved': 'off' },
    },

    {
        files: [
            '**/*.stories.{js,jsx,ts,tsx}',
            '**/*.stories.e2e.{js,jsx,ts,tsx}',
            '**/__stories__/*.{js,jsx,ts,tsx}',
        ],
        rules: {
            'import/no-extraneous-dependencies': 'off',
            'react/display-name': 'off',
            'react/prop-types': 'off',
            /*
             * Both rules guard against re-render churn in shipped
             * components. Stories are fixtures: defining a component inline
             * and passing a literal default is how you write one.
             */
            'react/no-object-type-as-default-prop': 'off',
            'react-hooks/static-components': 'off',
        },
    },

    {
        files: [
            'components/*/src/**/*.{js,jsx,ts,tsx}',
            'collections/*/src/**/*.{js,jsx,ts,tsx}',
            'utilities/*/src/**/*.{js,jsx,ts,tsx}',
        ],
        ignores: [
            '**/features/**',
            '**/__tests__/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/*.stories*.{js,jsx,ts,tsx}',
            '**/__stories__/**',
        ],
        rules: {
            'import/no-extraneous-dependencies': 'error',
        },
    },

    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            // TypeScript sources import siblings without an extension
            // (`./ou-tree` resolves to `ou-tree.tsx`), the inverse of the
            // `ignorePackages` rule the JavaScript packages follow.
            'import/extensions': [
                'error',
                'never',
                { ts: 'never', tsx: 'never' },
            ],
        },
    },

    ...(isCI
        ? [
              {
                  rules: {
                      'import/no-cycle': 'error',
                      'import/no-self-import': 'error',
                  },
              },
          ]
        : []),
])
