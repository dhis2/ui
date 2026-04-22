/**
 * Returns the indices, in ascending order, of `highlightedPickedOptions`
 * within `selected`. Values in `highlightedPickedOptions` that don't appear
 * in `selected` are ignored, so callers can pass a potentially stale
 * highlight list without filtering first.
 *
 * Runs in O(n) over `selected` via a Set lookup.
 *
 * @param {Object} args
 * @param {string[]} args.selected
 * @param {string[]} args.highlightedPickedOptions
 * @returns {number[]}
 */
export const getHighlightedPickedIndices = ({
    selected,
    highlightedPickedOptions,
}) => {
    const highlightedSet = new Set(highlightedPickedOptions)
    const indices = []
    selected.forEach((value, index) => {
        if (highlightedSet.has(value)) {
            indices.push(index)
        }
    })
    return indices
}
