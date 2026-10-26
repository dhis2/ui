import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.js'

/**
 * Reinserts the dragged picked options as a contiguous block at the
 * drop position, collapsing a non-contiguous selection while
 * preserving relative order (same semantics as the reorder buttons).
 * `dropIndex` counts before the dragged items are removed, so it's
 * adjusted for dragged items sitting above the drop position; `onChange`
 * is skipped when the drop results in no change.
 *
 * @param {Object} args
 * @param {string[]} args.selected
 * @param {string[]} args.draggedValues
 * @param {number} args.dropIndex
 * @param {Function} args.onChange
 * @returns {boolean} whether the order was changed (`onChange` called)
 */
export const reorderPickedOptionsOnDrop = ({
    selected,
    draggedValues,
    dropIndex,
    onChange,
}) => {
    const indices = getHighlightedPickedIndices({
        selected,
        highlightedPickedOptions: draggedValues,
    })

    if (indices.length === 0) {
        return false
    }

    const indexSet = new Set(indices)
    const draggedBlock = indices.map((index) => selected[index])
    const remaining = selected.filter((_, index) => !indexSet.has(index))
    const removedBefore = indices.filter((index) => index < dropIndex).length
    const insertPos = Math.max(
        0,
        Math.min(dropIndex - removedBefore, remaining.length)
    )

    const reordered = [
        ...remaining.slice(0, insertPos),
        ...draggedBlock,
        ...remaining.slice(insertPos),
    ]

    if (reordered.every((value, index) => value === selected[index])) {
        return false
    }

    onChange({ selected: reordered })
    return true
}
