const { reporter } = require('@dhis2/cli-helpers-engine')
const path = require('path')
const fs = require('fs')

const reportEsLintIssues = require('./utils/reportEsLintIssues')
const formatJsString = require('./utils/formatJsString')
const { createProgressReporter } = require('./utils/progressReporter')
const { TARGET_DIR } = require('./config')

const targetPath = path.join(TARGET_DIR, 'index.js')
const progressReporter = createProgressReporter(
    'Generating index file',
    targetPath
)

module.exports = function(results) {
    progressReporter.start()

    const fileContentStr = results
        .filter(({ created }) => created)
        .map(({ name }) => `export { ${name} } from './${name}.js'`)
        .join('\n')

    const { formattedStr, lintIssues } = formatJsString(fileContentStr)

    if (lintIssues.length > 0) {
        reporter.error(
            `Encountered lint errors while producing index file ${targetPath}:`
        )
        reportEsLintIssues(lintIssues)
        process.exit(1)
    }

    fs.writeFileSync(targetPath, formattedStr)

    progressReporter.done()
}
