const indexTemplate = require('./templates/index-template.js')
const template = require('./templates/template.js')

module.exports = {
    indexTemplate,
    template,
    svgo: true,
    svgoConfig: {
        plugins: [{ removeViewBox: false }],
    },
}
