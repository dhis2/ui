const { dirname, join } = require('path')
const { babelConfig } = require('../src/babel-config.js')
const { loadStories } = require('../src/load-stories.js')
const { webpackConfig } = require('../src/webpack-config.js')

module.exports = {
    framework: getAbsolutePath('@storybook/react'),

    addons: [
        getAbsolutePath('@storybook/preset-create-react-app'),
        {
            name: '@storybook/addon-essentials',
            options: {
                docs: false,
            },
        },
        {
            name: '@storybook/addon-storysource',
            options: { loaderOptions: { injectDecorator: false } },
        },
        getAbsolutePath('storybook-addon-jsx'),
        getAbsolutePath('@storybook/addon-a11y'),
    ],

    features: {
        storyStoreV7: false,
    },

    stories: async (list) => [...list, ...loadStories()],
    babel: babelConfig,
    webpackFinal: webpackConfig,

    core: {
        builder: getAbsolutePath('@storybook/builder-webpack5'),
    },

    docs: {
        autodocs: true,
    },
}

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')))
}
