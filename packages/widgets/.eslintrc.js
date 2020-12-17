module.exports = {
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: ['@dhis2/ui-forms', '@dhis2/ui', '@dhis2/ui-widgets'],
                patterns: [
                    '@dhis2/ui-forms/*',
                    '@dhis2/ui/*',
                    '@dhis2/ui-widgets/*',
                ],
            },
        ],
    },
}
