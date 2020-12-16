module.exports = {
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: ['@dhis2/ui-core'],
                patterns: ['@dhis2/ui-core/*'],
            },
        ],
    },
}
