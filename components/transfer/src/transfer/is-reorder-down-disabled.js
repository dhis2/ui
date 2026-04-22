import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.js'

/**
 * @param {Object} args
 * @param {string[]} args.highlightedPickedOptions
 * @param {string[]} args.selected
 * @param {boolean} [args.filterActivePicked] reorder is disabled while a filter is applied to the picked side
 * @returns {bool}
 */
export const isReorderDownDisabled = ({
    highlightedPickedOptions,
    selected,
    filterActivePicked = false,
}) => {
    if (filterActivePicked) {
        return true
    }

    const indices = getHighlightedPickedIndices({
        selected,
        highlightedPickedOptions,
    })

    if (indices.length === 0) {
        return true
    }

    const lastIndex = selected.length - 1

    // Flush to the bottom: indices are [len-n, ..., len-1]
    return indices.every(
        (index, i) => index === lastIndex - (indices.length - 1 - i)
    )
}
