const isTesting = 'STORYBOOK_TESTING' in process.env

module.exports = {
    webpackFinal: config => {
        for (const rule of config.module.rules) {
            if (rule.oneOf) {
                // would be cool if this could be more explicit.
                const src = rule.oneOf[1]

                // add our src folders for webpack loaders
                src.include.push(/packages\/core\/src/)
                src.include.push(/packages\/forms\/src/)
                src.include.push(/packages\/widgets\/src/)
            }
        }

        return config
    },

    stories: isTesting
        ? [
            '../../packages/core/src/**/*.stories.e2e.js',
            '../../packages/forms/src/**/*.stories.e2e.js',
            '../../packages/widgets/src/**/*.stories.e2e.js',
        ]
        : [
            '../../packages/core/src/**/*.stories.js',
            '../../packages/forms/src/**/*.stories.js',
            '../../packages/widgets/src/**/*.stories.js',
        ],

    addons: [
        '@storybook/preset-create-react-app',
        'storybook-addon-jsx'
    ],
}
