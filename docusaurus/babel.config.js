const { babelConfig } = require('../storybook/src/babel-config.js')

module.exports = babelConfig({
    presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
})
