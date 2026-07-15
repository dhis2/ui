/**
 * Adds dragged source options to `selected`, at `dropIndex` or
 * appended when omitted. When the result exceeds `maxSelections`, the
 * oldest non-dragged values are evicted from the start, so the
 * just-dropped options are never evicted (`maxSelections: 1` replaces
 * the current selection on a positional drop).
 *
 * @param {Object} args
 * @param {string[]} args.selected
 * @param {string[]} args.draggedValues
 * @param {number} [args.dropIndex] - insertion index within `selected`,
 * appends when not provided
 * @param {number} args.maxSelections
 * @param {Function} args.onChange
 * @param {Function} args.setHighlightedSourceOptions
 * @returns {boolean} whether the selection was changed (`onChange` called)
 */
export const addSourceOptionsOnDrop = ({
    selected,
    draggedValues,
    dropIndex,
    maxSelections,
    onChange,
    setHighlightedSourceOptions,
}) => {
    if (draggedValues.length === 0) {
        return false
    }

    const insertPos =
        dropIndex === undefined
            ? selected.length
            : Math.max(0, Math.min(dropIndex, selected.length))

    let newSelected = [
        ...selected.slice(0, insertPos),
        ...draggedValues,
        ...selected.slice(insertPos),
    ]

    if (newSelected.length > maxSelections) {
        const draggedSet = new Set(draggedValues)
        let overflow = newSelected.length - maxSelections
        newSelected = newSelected.filter((value) => {
            if (overflow > 0 && !draggedSet.has(value)) {
                overflow--
                return false
            }
            return true
        })
    }

    setHighlightedSourceOptions([])
    onChange({ selected: newSelected })
    return true
}
