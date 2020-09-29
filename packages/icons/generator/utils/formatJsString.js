const EsLintCLIEngine = require('eslint').CLIEngine
const prettier = require('prettier')
const { config } = require('@dhis2/cli-style')

const eslintCli = new EsLintCLIEngine({ fix: true })
const prettierConfig = {
    ...require(config.prettier),
    parser: 'babel',
}

module.exports = function(jsStr) {
    const esLintReport = eslintCli.executeOnText(jsStr)
    // Because we are linting a string, the results array has a fixed length of 1
    const esLintResult = esLintReport.results[0]
    const formattedStr =
        esLintResult.errorCount > esLintResult.fixableErrorCount
            ? null
            : // ESLint puts the fixed string in the result output, we format that
              prettier.format(esLintResult.output, prettierConfig)

    return { formattedStr, lintIssues: esLintResult.messages }
}
