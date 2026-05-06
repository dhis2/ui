import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.js'

/**
 * Moves the highlighted picked options to the very bottom of the list as a
 * single contiguous block, preserving their relative order. Non-contiguous
 * selections are collapsed.
 *
 * @param {Object} args
 * @param {string[]} args.selected
 * @param {string[]} args.highlightedPickedOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const moveHighlightedPickedOptionToBottom = ({
    selected,
    highlightedPickedOptions,
    onChange,
}) => {
    const indices = getHighlightedPickedIndices({
        selected,
        highlightedPickedOptions,
    })

    if (indices.length === 0) {
        return
    }

    const lastIndex = selected.length - 1

    // Already a contiguous block flush to the bottom — nothing to do
    if (
        indices.every(
            (index, i) => index === lastIndex - (indices.length - 1 - i)
        )
    ) {
        return
    }

    const indexSet = new Set(indices)
    const highlightedBlock = indices.map((index) => selected[index])
    const remaining = selected.filter((_, index) => !indexSet.has(index))

    onChange({ selected: [...remaining, ...highlightedBlock] })
}
