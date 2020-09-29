const fs = require('fs')
const camelCase = require('lodash.camelcase')
const startCase = require('lodash.startcase')

const { SOURCE_DIR, SVG_SIZES } = require('../config')
const createComponentFileSync = require('./createComponentFileSync')
const {
    createProgressReporter,
    createFileListProgressReporter,
} = require('../utils/progressReporter')
const readSvgSync = require('./readSvgSync')

const processComponentVariant = (dir, name, size) => {
    const { svgStr, svgPath } = readSvgSync(dir, size)

    return {
        name: `${name}${size}`,
        size,
        svgStr,
        svgPath,
    }
}

const processComponentDir = (dir, componentIndex, reportFileListProgress) => {
    const name = `Icon${startCase(camelCase(dir)).replace(/ /g, '')}`
    const variants = SVG_SIZES.map((size, variantIndex) => {
        const variant = processComponentVariant(dir, name, size)
        reportFileListProgress(variant.svgPath, componentIndex, variantIndex)
        return variant
    })
    const { created, lintIssues } = createComponentFileSync(
        name,
        variants,
        reportFileListProgress
    )

    return { name, variants, created, lintIssues }
}

const progressReporter = createProgressReporter(
    'Processing SVG files in',
    SOURCE_DIR
)
module.exports = function() {
    progressReporter.start()

    const dirs = fs.readdirSync(SOURCE_DIR)
    const reportFileListProgress = createFileListProgressReporter(
        dirs.length * SVG_SIZES.length
    )
    const results = dirs.map((dir, index) =>
        processComponentDir(dir, index, reportFileListProgress)
    )

    progressReporter.done()
    return results
}
