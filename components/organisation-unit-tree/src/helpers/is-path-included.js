/**
 * @param {string[]} includedPaths
 * @param {string} path
 * @returns {bool}
 */
export const isPathIncluded = (includedPaths, path) => {
    const isIncluded = includedPaths.some(includedPath => {
        if (path === includedPath) return true
        return includedPath.indexOf(`${path}/`) === 0
    })

    return isIncluded
}
