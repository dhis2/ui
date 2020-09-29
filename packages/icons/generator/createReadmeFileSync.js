const path = require('path')
const fs = require('fs')

const { TARGET_DIR, SVG_SIZES } = require('./config')
const { createProgressReporter } = require('./utils/progressReporter')

const findLongest = arr =>
    arr.reduce((max, str) => (str.length > max ? str.length : max), 0)

const createColumnPadder = columnArrays => {
    const colWidths = columnArrays.map(findLongest)

    return (str, colIndex, padChar = ' ') => {
        return str.padEnd(colWidths[colIndex], padChar)
    }
}

const markdowTableRow = (cells, pad) =>
    `| ${cells.map((str, i) => pad(str, i)).join(' | ')} |`

const markdownTableHeader = (cells, pad) =>
    [
        markdowTableRow(cells, pad),
        markdowTableRow(
            cells.map((_, i) => pad('', i, '-')),
            pad
        ),
    ].join('\n')

const toAvailabilityStr = variant => (variant.svgStr ? '✔️' : ' ')

const targetPath = path.join(TARGET_DIR, 'README.md')

const progressReporter = createProgressReporter(
    'Generating size availability README file',
    targetPath
)

module.exports = function(results) {
    progressReporter.start()

    const createdComponents = results.filter(({ created }) => created)
    const nameHeader = 'Name'
    const sizeHeaders = SVG_SIZES.map(size => `size: ${size}`)
    const pad = createColumnPadder([
        [nameHeader, ...createdComponents.map(c => c.name)],
        ...sizeHeaders.map(h => [h]),
    ])

    const headerStr = markdownTableHeader([nameHeader, ...sizeHeaders], pad)

    const rowStr = createdComponents
        .map(({ name, variants }) =>
            markdowTableRow([name, ...variants.map(toAvailabilityStr)], pad)
        )
        .join('\n')

    const fileContent = [
        '# Icon component size availability table',
        '',
        headerStr,
        rowStr,
        '',
    ].join('\n')

    fs.writeFileSync(targetPath, fileContent)

    progressReporter.done()
}
