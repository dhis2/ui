/**
 * Checks wether there are descendants of a path in the
 * array of selected paths
 *
 * @param {string} path
 * @param {string[]} selected
 * @returns {bool}
 */
export const hasDescendantSelectedPaths = (path, selected) => {
    return selected.some(
        (selectedPath) => {
            const isNotPath = !selectedPath.match(new RegExp(`${path}$`))
            const isSubPath = selectedPath.match(new RegExp(path))
            return isNotPath && isSubPath
        }
    )
}
