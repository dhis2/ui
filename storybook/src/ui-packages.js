const fs = require('fs')
const path = require('path')
const {
    COMPONENTS_DIR,
    COLLECTIONS_DIR,
    ICONS_DIR,
    CONSTANTS_DIR,
} = require('./paths.js')

const prepend = (c, p) => path.join(p, c)

const dirs = file => file.isDirectory()
const filepaths = file => file.name

exports.uiPackages = ({ absolute = false } = {}) => {
    const components = fs
        .readdirSync(COMPONENTS_DIR, {
            encoding: 'utf8',
            withFileTypes: true,
        })
        .filter(dirs)
        .map(filepaths)

    const collections = fs
        .readdirSync(COLLECTIONS_DIR, {
            encoding: 'utf8',
            withFileTypes: true,
        })
        .filter(dirs)
        .map(filepaths)

    // these are flat packages, so we don't need to find all subpackages
    const icons = ['icons']
    const constants = ['constants']

    if (absolute) {
        return [
            components.map(c => prepend(c, COMPONENTS_DIR)),
            collections.map(c => prepend(c, COLLECTIONS_DIR)),
            icons.map(c => prepend(c, ICONS_DIR)),
            constants.map(c => prepend(c, CONSTANTS_DIR)),
        ]
    } else {
        return [components, collections, icons, constants]
    }
}
