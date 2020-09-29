const path = require('path')
const fs = require('fs')
const { TARGET_DIR } = require('../config')
const createComponentStrSync = require('./createComponentStrSync')

module.exports = function(name, variants) {
    const { formattedStr, lintIssues } = createComponentStrSync(name, variants)
    const targetPath = path.join(TARGET_DIR, `${name}.js`)

    if (lintIssues.length > 0) {
        return { created: false, lintIssues }
    } else {
        fs.writeFileSync(targetPath, formattedStr)
        return { created: true, lintIssues }
    }
}
