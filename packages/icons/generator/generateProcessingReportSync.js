const { reporter } = require('@dhis2/cli-helpers-engine')
const chalk = require('chalk')

const reportLintIssues = components => {
    if (components.length === 0) {
        return
    }

    reporter.warn('Some components could not be created due to ESLint issues:')

    for (const component of components) {
        process.stderr.write(
            chalk.bold.yellow(`Component: ${component.name}\n`)
        )

        for (const issue of component.lintIssues) {
            process.stderr.write(
                [
                    chalk.yellow('---------------'),
                    `ruleId: ${issue.ruleId}`,
                    `fatal: ${issue.fatal}`,
                    `severity: ${issue.severity}`,
                    issue.message,
                    chalk.yellow('---------------\n'),
                ].join('\n')
            )
        }
    }
}

const reportMissingFiles = files => {
    reporter.warn('The following SVG files were expected but not found:')
    reporter.print(` - ${files.join('\n - ')}`)
}

module.exports = function(results) {
    const { missingSvgFiles, componentsWithEsLintErrors } = results.reduce(
        (acc, { created, name, variants, lintIssues }) => {
            if (!created) {
                acc.componentsWithEsLintErrors.push({ name, lintIssues })
            }

            for (const variant of variants) {
                if (!variant.svgStr) {
                    acc.missingSvgFiles.push(variant.svgPath)
                }
            }

            return acc
        },
        {
            missingSvgFiles: [],
            componentsWithEsLintErrors: [],
        }
    )

    if (
        componentsWithEsLintErrors.length === 0 &&
        missingSvgFiles.length === 0
    ) {
        reporter.info('All files were successfully created')
    } else {
        reporter.info('Files were created with some errors')
        reportLintIssues(componentsWithEsLintErrors)
        reportMissingFiles(missingSvgFiles)
    }
}
