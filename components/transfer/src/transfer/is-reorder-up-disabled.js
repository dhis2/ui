import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.js'

/**
 * @param {Object} args
 * @param {string[]} args.highlightedPickedOptions
 * @param {string[]} args.selected
 * @param {boolean} [args.filterActivePicked] reorder is disabled while a filter is applied to the picked side
 * @returns {bool}
 */
export const isReorderUpDisabled = ({
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

    // Flush to the top: indices are [0, 1, ..., n-1]
    return indices.every((index, i) => index === i)
}
