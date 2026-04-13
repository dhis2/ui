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
            files: ['*.stories.js', '*.stories.e2e.js', '**/__stories__/*.js'],
            rules: {
                'import/no-extraneous-dependencies': 'off',
                'react/display-name': 'off',
                'react/prop-types': 'off',
            },
        },
        {
            files: [
                'components/*/src/**/*.js',
                'collections/*/src/**/*.js',
                'utilities/*/src/**/*.js',
            ],
            excludedFiles: [
                '**/features/**/*.js',
                '**/__tests__/**/*.js',
                '*.test.js',
                '*.stories*.js',
                '**/__stories__/*.js',
                '**/__stories__/**/*.js',
                '*.d.ts',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'error',
            },
        },
        // TypeScript overrides for migrated components
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/recommended',
            ],
            settings: {
                'import/resolver': {
                    typescript: {
                        project: './tsconfig.json',
                    },
                },
            },
            rules: {
                // Disable JS-only rules that conflict with TS
                'react/prop-types': 'off',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
                // Keep consistent with existing code style
                'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
                // Allow .js extension imports in TS files (Babel resolves .tsx -> .js)
                'import/extensions': 'off',
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
