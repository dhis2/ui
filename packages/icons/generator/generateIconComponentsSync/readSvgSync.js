const path = require('path')
const fs = require('fs')
const { SOURCE_DIR } = require('../config')

module.exports = function(dir, size) {
    const svgPath = path.join(SOURCE_DIR, dir, `${size}.svg`)
    const svgStr = fs.existsSync(svgPath)
        ? fs.readFileSync(svgPath, 'utf-8')
        : null

    return { svgStr, svgPath }
}
