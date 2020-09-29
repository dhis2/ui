const path = require('path')
const fs = require('fs')

const { createProgressReporter } = require('./utils/progressReporter')
const { TARGET_DIR } = require('./config')

const progressReporter = createProgressReporter(
    'Preparing component directory',
    TARGET_DIR
)

module.exports = function() {
    progressReporter.start()

    if (!fs.existsSync(TARGET_DIR)) {
        fs.mkdirSync(TARGET_DIR)
    } else {
        const files = fs.readdirSync(TARGET_DIR)
        for (const file of files) {
            fs.unlinkSync(path.join(TARGET_DIR, file))
        }
    }

    progressReporter.done()
}
