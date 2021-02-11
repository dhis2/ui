const isTesting = 'STORYBOOK_TESTING' in process.env

module.exports = {
    /**
     * By default the loaders only include ./src and ./.storybook. But we're using ./packages so we
     * need to include that as well, otherwise the jsx in those folders won't be transpiled.
     */
    webpackFinal: async config => {
        // Find the rules that configure the webpack loaders
        const loaderRules = config.module.rules.find(rule => 'oneOf' in rule)
            .oneOf

        // Filter only the rules that have a regex under the test property
        const regexLoaders = loaderRules.filter(
            loader => 'test' in loader && typeof loader.test.test === 'function'
        )

        // Find the rules that deal with .js
        const jsLoaders = regexLoaders.filter(loader => loader.test.test('.js'))

        jsLoaders.forEach(loader => {
            loader.include.push(/packages\/core\/src/)
            loader.include.push(/packages\/forms\/src/)
            loader.include.push(/packages\/widgets\/src/)
            loader.include.push(/packages\/icons\/src/)
        })

        return config
    },
    // https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    stories: isTesting
        ? ['../packages/*/src/**/*.stories.e2e.@(js|jsx)']
        : ['../packages/*/src/**/*.stories.@(js|jsx)'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-storysource',
            options: { loaderOptions: { injectDecorator: false } },
        },
        'storybook-addon-jsx',
        '@storybook/addon-a11y',
    ],
}
