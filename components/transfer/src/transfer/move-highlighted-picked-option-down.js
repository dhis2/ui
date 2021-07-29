/**
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
    const optionIndex = selected.findIndex(
        selectedOption => selectedOption === highlightedPickedOptions[0]
    )

    // Can't move down last or non-existing option
    if (optionIndex === -1 || optionIndex > selected.length - 2) return

    // swap with next item
    const reordered = [
        ...selected.slice(0, optionIndex),
        selected[optionIndex + 1],
        selected[optionIndex],
        ...selected.slice(optionIndex + 2),
    ]

    onChange({ selected: reordered })
}
