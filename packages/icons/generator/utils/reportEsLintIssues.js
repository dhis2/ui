const chalk = require('chalk')

module.exports = function(lintIssues) {
    for (const issue of lintIssues) {
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
