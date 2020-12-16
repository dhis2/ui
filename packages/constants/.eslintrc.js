module.exports = {
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: ['@dhis2/ui-constants'],
                patterns: ['@dhis2/ui-constants/*'],
            },
        ],
    },
}
