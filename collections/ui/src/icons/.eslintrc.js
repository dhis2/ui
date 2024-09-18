module.exports = {
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    '@dhis2/ui-constants',
                    '@dhis2/ui-core',
                    '@dhis2/ui-forms',
                    '@dhis2/ui-icons',
                    '@dhis2/ui',
                    '@dhis2/ui-widgets',
                ],
                patterns: [
                    '@dhis2/ui-constants/*',
                    '@dhis2/ui-core/*',
                    '@dhis2/ui-forms/*',
                    '@dhis2/ui-icons/*',
                    '@dhis2/ui/*',
                    '@dhis2/ui-widgets/*',
                ],
            },
        ],
    },
}
