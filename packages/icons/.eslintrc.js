module.exports = {
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: ['@dhis2/ui-icons'],
                patterns: ['@dhis2/ui-icons/*'],
            },
        ],
    },
}
