const cliStyle = require('@dhis2/cli-style')

const config = {
    extends: [cliStyle.config.eslintReact],
    globals: {
        cy: 'readonly',
        Cypress: 'readonly',
    },
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: ['@dhis2/ui'],
                patterns: ['@dhis2/ui/*'],
            },
        ],
    },
}

// Run cpu intensive checks only on CI
const isCI = !!process.env.CI

if (isCI) {
    config.rules['import/no-cycle'] = 'error'
    config.rules['import/no-self-import'] = 'error'
}

module.exports = config
