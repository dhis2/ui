import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.js'

/**
 * Moves the highlighted picked options down by one slot as a group.
 * If the selection is non-contiguous, the group collapses into a contiguous
 * block (preserving relative order) with its bottom edge landing at
 * `min(selected.length - 1, bottommostHighlightedIndex + 1)`.
 *
 * @param {Object} args
 * @param {string[]} args.selected
 * @param {string[]} args.highlightedPickedOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const moveHighlightedPickedOptionDown = ({
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

    // Already flush to the bottom — nothing to do
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
    const bottommost = indices.at(-1)
    const targetBottom = Math.min(lastIndex, bottommost + 1)
    const insertPos = targetBottom - (indices.length - 1)

    const reordered = [
        ...remaining.slice(0, insertPos),
        ...highlightedBlock,
        ...remaining.slice(insertPos),
    ]

    onChange({ selected: reordered })
}
