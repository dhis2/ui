module.exports = {
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: ['@dhis2/ui-forms'],
                patterns: ['@dhis2/ui-forms/*'],
            },
        ],
    },
}
