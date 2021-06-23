const { babelConfig } = require('../src/babel-config.js')
const { webpackConfig } = require('../src/webpack-config.js')

module.exports = {
    addons: [
        '@storybook/addon-docs',
        '@storybook/preset-create-react-app',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-storysource',
            options: { loaderOptions: { injectDecorator: false } },
        },
        'storybook-addon-jsx',
        '@storybook/addon-a11y',
    ],
    // Static for now to make sure we don't make snapshots of all components
    stories: ['../../components/help/src/help.stories.js'],
    babel: babelConfig,
    webpackFinal: webpackConfig,
}
