const fs = require('fs')
const path = require('path')
const { COLLECTIONS_DIR } = require('./paths.js')

const prepend = (c, p) => path.join(p, c)
const dirs = (file) => file.isDirectory()
const filepaths = (file) => file.name

exports.uiPackages = ({ absolute = false } = {}) => {
    const collections = fs
        .readdirSync(COLLECTIONS_DIR, {
            encoding: 'utf8',
            withFileTypes: true,
        })
        .filter(dirs)
        .map(filepaths)

    if (absolute) {
        return [collections.map((c) => prepend(c, COLLECTIONS_DIR))]
    } else {
        return [collections]
    }
}
