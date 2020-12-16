const { config } = require('@dhis2/cli-style')

module.exports = {
    extends: [config.eslintReact],
    globals: {
        cy: 'readonly',
        Cypress: 'readonly',
    },
    rules: {
        'import/no-cycle': 'error',
        'import/no-self-import': 'error',
        'no-restricted-imports': [
            'error',
            {
                paths: ['@dhis2/ui'],
                patterns: ['@dhis2/ui/*'],
            },
        ],
    },
}
