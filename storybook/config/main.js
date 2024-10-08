import { dirname, join } from 'path'
const { babelConfig } = require('../src/babel-config.js')
const { loadStories } = require('../src/load-stories.js')
const { webpackConfig } = require('../src/webpack-config.js')

module.exports = {
    addons: [
        {
            name: '@storybook/addon-essentials',
            options: { docs: false },
        },
        '@mihkeleidast/storybook-addon-source',
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/preset-create-react-app'),
    ],

    stories: async (list) => [...(list || []), ...loadStories()],
    babel: babelConfig,
    webpackFinal: webpackConfig,

    framework: {
        name: getAbsolutePath('@storybook/react-webpack5'),
        options: {},
    },

    staticDirs: [join(__dirname, '../static')],

    core: {
        enableCrashReports: false,
    },
}

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')))
}
