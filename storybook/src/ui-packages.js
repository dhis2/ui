const fs = require('fs')
const { COMPONENTS_DIR, PACKAGES_DIR } = require('./paths.js')

exports.uiPackages = () => {
    const components = fs.readdirSync(COMPONENTS_DIR, {
        encoding: 'utf8',
    })

    const packages = fs.readdirSync(PACKAGES_DIR, {
        encoding: 'utf8',
    })

    return [components, packages]
}
