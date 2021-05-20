const { babelConfig } = require('../src/babel-config.js')
const { loadStories } = require('../src/load-stories.js')
const { webpackConfig } = require('../src/webpack-config.js')

module.exports = {
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                babelOptions: {
                    plugins: [
                        [
                            '@babel/plugin-proposal-private-property-in-object',
                            {
                                loose: true,
                            },
                        ],
                    ],
                },
            },
        },
        '@storybook/preset-create-react-app',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-storysource',
            options: { loaderOptions: { injectDecorator: false } },
        },
        'storybook-addon-jsx',
        '@storybook/addon-a11y',
    ],
    stories: async list => [...list, ...loadStories()],
    babel: babelConfig,
    webpackFinal: webpackConfig,
}
