const { reporter } = require('@dhis2/cli-helpers-engine')

// const erasePreviousLine = () => {
//     process.stdout.clearLine()
//     process.stdout.cursorTo(0)
// }
const erasePreviousLine = () => {
    process.stdout.moveCursor(0, -1)
    process.stdout.cursorTo(0)
    process.stdout.clearScreenDown()
}

module.exports.createFileListProgressReporter = totalFileCount => (
    path,
    componentIndex,
    variantIndex
) => {
    const count = componentIndex * 2 + (variantIndex + 1)
    const percent = Math.round((count / totalFileCount) * 100)
    const isFirstFile = componentIndex === 0 && variantIndex === 0

    if (!isFirstFile) {
        erasePreviousLine()
    }

    reporter.print(
        `Working on file ${count}/${totalFileCount} (${percent}%) \t${path}`
    )

    // Clear last two lines when done
    if (count === totalFileCount) {
        erasePreviousLine()
        // process.stdout.clearScreenDown()
    }
}

module.exports.createProgressReporter = (message, path) => {
    // Fully assuming all words are "ing" / "ed"
    const firstWord = message.substr(0, message.indexOf(' '))
    const rest = message.substr(message.indexOf(' ') + 1)
    const firstWordPastTense = firstWord.slice(0, -3) + 'ed'

    const startMessage = `${message} "${path}"...`
    const endMessage = `${firstWordPastTense} ${rest} "${path}"`

    const start = () => {
        reporter.print(startMessage)
    }

    const done = () => {
        erasePreviousLine()
        reporter.info(endMessage)
    }

    return { start, done }
}
