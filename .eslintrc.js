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
    },
    overrides: [
        {
            files: ['*.stories.js', '*.stories.e2e.js'],
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
                '**/__stories__/**/*.js',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'error',
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
