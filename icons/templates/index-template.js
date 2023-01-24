const path = require('path')

/**
 * https://react-svgr.com/docs/custom-templates/#custom-index-template
 */

function defaultIndexTemplate(filePaths) {
    const exportEntries = filePaths.map((filePath) => {
        const { name, base } = path.parse(filePath)

        return `export { default as Icon${name} } from './${base}'`
    })

    return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate
