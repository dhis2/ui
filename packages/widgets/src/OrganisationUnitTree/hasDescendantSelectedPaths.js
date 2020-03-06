/**
 * Checks wether there are descendants of a path in the
 * array of selected paths
 *
 * @param {string} path
 * @param {string[]} selected
 * @returns {bool}
 */
export const hasDescendantSelectedPaths = (path, selected) =>
    selected.some(
        selectedPath =>
            selectedPath !== path && selectedPath.indexOf(path) === 0
    )
