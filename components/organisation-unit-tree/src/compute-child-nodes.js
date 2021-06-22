/**
 * @param {string[]} includedPaths
 * @param {string} path
 * @returns {bool}
 */
const isPathIncluded = (includedPaths, path) => {
    const isIncluded = includedPaths.some(includedPath => {
        if (path === includedPath) return true
        return includedPath.indexOf(`${path}/`) === 0
    })

    return isIncluded
}

/**
 * Returns all the childrenIds that should be rendered.
 * An id will be included if it's parent's path + the id is inside
 * the "filter" or the parent's path + id is a substring
 * of the paths in "filter" (then it's a parent path of
 * the units that should be included itself)
 *
 * @param {Object} node
 * @param {Object[]} node.children
 * @param {string[]} includedPaths
 * @returns {string[]}
 */
export const computeChildNodes = (node, filter) => {
    if (!filter.length) {
        return node.children
    }

    return node.children.filter(child => {
        return isPathIncluded(filter, `${node.path}/${child.id}`)
    })
}
