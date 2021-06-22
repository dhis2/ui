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

    if (absolute) {
        const icons = [ICONS_DIR]
        const constants = [CONSTANTS_DIR]

        return [
            components.map(c => prepend(c, COMPONENTS_DIR)),
            collections.map(c => prepend(c, COLLECTIONS_DIR)),
            icons,
            constants,
        ]
    } else {
        const icons = ['icons']
        const constants = ['constants']

        return [components, collections, icons, constants]
    }
}
