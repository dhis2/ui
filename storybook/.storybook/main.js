const isTesting = 'STORYBOOK_TESTING' in process.env

module.exports = {
    webpackFinal: config => {
        for (const rule of config.module.rules) {
            if (rule.oneOf) {
                // would be cool if this could be more explicit.
                const src = rule.oneOf[1]

                // add our src folders for webpack loaders
                src.include.push(/packages\/core\/src/)
                src.include.push(/packages\/widgets\/src/)
            }
        }

        return config
    },

    stories: isTesting
        ? [
            '@dhis2/ui-core/src/**/*.stories.e2e.js',
            '@dhis2/ui-widgets/src/**/*.stories.e2e.js',
        ]
        : [
            '@dhis2/ui-core/src/**/*.stories.js',
            '@dhis2/ui-widgets/src/**/*.stories.js',
        ],

    addons: [
        '@storybook/preset-create-react-app'
    ],
}
