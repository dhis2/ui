const indexTemplate = require('./templates/index-template.js')
const template = require('./templates/icon-template.js')

module.exports = {
    // This controls how the index.js file is generated
    indexTemplate,
    // This controls how the svgs are transformed to jsx
    template,

    // Compress svgs
    svgo: true,
    svgoConfig: {
        plugins: [
            {
                removeViewBox: false,
                mergePaths: true,
            },
        ],
    },

    /**
     * Replace hardcoded fills on paths, so that it can be overridden
     * by setting the `color` prop
     */
    replaceAttrValues: {
        '#010101': 'currentColor',
    },
}
