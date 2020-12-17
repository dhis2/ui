module.exports = {
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
