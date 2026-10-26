/**
 * When the grabbed option is highlighted, the whole highlighted set is
 * dragged as a block, in list order and restricted to currently
 * visible options (same subset rule as `addIndividualSourceOptions` /
 * `removeIndividualPickedOptions`). Otherwise only the grabbed option
 * is dragged.
 *
 * @param {Object} args
 * @param {string} args.draggedValue
 * @param {string[]} args.highlightedOptions
 * @param {Object[]} args.visibleOptions - the (filtered) options of the
 * list the drag originates from, in list order
 * @returns {string[]}
 */
export const getDraggedValues = ({
    draggedValue,
    highlightedOptions,
    visibleOptions,
}) => {
    if (!highlightedOptions.includes(draggedValue)) {
        return [draggedValue]
    }

    const highlightedSet = new Set(highlightedOptions)

    return visibleOptions
        .map(({ value }) => value)
        .filter((value) => highlightedSet.has(value))
}
