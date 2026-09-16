/**
 * Resolves where a drag would drop, or `null` if dropping is not
 * allowed at the current position:
 * - `{ side: 'picked', pos: 'before'|'after', value, index }` — insert
 *   at a position (`index` already includes the +1 for 'after').
 * - `{ side: 'picked', pos: 'end' }` — append to the picked list.
 * - `{ side: 'source', pos: 'container' }` — remove from the picked list.
 *
 * Positional inserts require `enableOrderChange` and no active picked
 * filter (a filtered visual index doesn't map to a `selected` index) —
 * otherwise a drop only appends, matching the "add individual" button
 * and the disabled reorder buttons.
 *
 * @param {Object} args
 * @param {string} args.activeSide - 'source' | 'picked'
 * @param {string} args.overSide - 'source' | 'picked'
 * @param {string} args.overType - 'option' | 'container'
 * @param {string} [args.overValue] - value of the hovered option
 * @param {number} [args.overIndex] - index of the hovered option
 * @param {Object} [args.overRect] - hovered option rect ({ top, height })
 * @param {number} [args.dragY] - the y coordinate representing the
 * drag position (the dragged rect's vertical center)
 * @param {string[]} args.draggedValues
 * @param {boolean} args.enableOrderChange
 * @param {boolean} args.filterActivePicked
 * @returns {?Object}
 */
export const resolveDropTarget = ({
    activeSide,
    overSide,
    overType,
    overValue,
    overIndex,
    overRect,
    dragY,
    draggedValues,
    enableOrderChange,
    filterActivePicked,
}) => {
    if (!overSide) {
        return null
    }

    if (overSide === 'source') {
        // Dropping a picked option on the source side removes it.
        // Source options can't be dropped on their own list.
        return activeSide === 'picked'
            ? { side: 'source', pos: 'container' }
            : null
    }

    // overSide === 'picked'
    const positionalInsertAllowed = enableOrderChange && !filterActivePicked

    if (!positionalInsertAllowed) {
        // Adding is still possible (append), reordering is not
        return activeSide === 'source' ? { side: 'picked', pos: 'end' } : null
    }

    if (overType === 'container') {
        return { side: 'picked', pos: 'end' }
    }

    if (activeSide === 'picked' && draggedValues.includes(overValue)) {
        // Hovering the dragged block itself is a no-op
        return null
    }

    const overMiddle = overRect.top + overRect.height / 2
    const pos = dragY < overMiddle ? 'before' : 'after'
    const index = pos === 'before' ? overIndex : overIndex + 1

    return { side: 'picked', pos, value: overValue, index }
}
