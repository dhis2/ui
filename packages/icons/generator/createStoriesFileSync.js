const { reporter } = require('@dhis2/cli-helpers-engine')
const path = require('path')
const fs = require('fs')

const reportEsLintIssues = require('./utils/reportEsLintIssues')
const formatJsString = require('./utils/formatJsString')
const { TARGET_DIR, SVG_SIZES } = require('./config')
const { createProgressReporter } = require('./utils/progressReporter')

const jsxTd = (str, isHead) => {
    const tag = isHead ? 'TableCellHead' : 'TableCell'

    return `<${tag}>${str}</${tag}>`
}

const jsxTr = (cells, isHead) => {
    const tag = isHead ? 'TableRowHead' : 'TableRow'

    return `<${tag}>${cells.map(cell => jsxTd(cell, isHead)).join('')}</${tag}>`
}

const iconJsx = (name, variant, color) => {
    if ((variant && !variant.svgStr) || (!variant && !color)) {
        return 'N/A'
    }

    const sizeProp = variant ? `size={${variant.size}} ` : ''
    const colorProp = color ? `color="${color}" ` : ''

    return `<Icons.${name} ${sizeProp} ${colorProp}/>`
}

const componentAsJsxRow = ({ name, variants }) =>
    jsxTr([
        `<pre>${name}</pre>`,
        ...variants.map(variant => iconJsx(name, variant)),
        iconJsx(name, null, 'red'),
    ])

const wrapInTemplate = (headerStr, rowsStr) => `
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'

import * as Icons from './index.js'

export default {
    title: 'Generated Icons',
}

export const All = () => (
    <Table>
        <TableHead>${headerStr}</TableHead>
        <TableBody>${rowsStr}</TableBody>
    </Table>
)
`

const targetPath = path.join(TARGET_DIR, 'all.stories.js')
const progressReporter = createProgressReporter(
    'Generating demo stories file',
    targetPath
)

module.exports = function(results) {
    progressReporter.start()

    const headerStr = jsxTr(
        ['Name', ...SVG_SIZES.map(size => `Size: ${size}`), 'Color: red'],
        true
    )
    const rowsStr = results
        .filter(({ created }) => created)
        .map(componentAsJsxRow)
        .join('\n')
    const fileContentStr = wrapInTemplate(headerStr, rowsStr)
    const { formattedStr, lintIssues } = formatJsString(fileContentStr)

    if (lintIssues.length > 0) {
        reporter.error(
            `Encountered lint errors while producing demo stories file ${targetPath}:`
        )
        reportEsLintIssues(lintIssues)
        process.exit(1)
    }

    fs.writeFileSync(targetPath, formattedStr)
    progressReporter.done()
}
