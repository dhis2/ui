/**
 * @param {Object} args
 * @param {string[]} args.selected
 * @param {string[]} args.highlightedPickedOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const moveHighlightedPickedOptionUp = ({
    selected,
    highlightedPickedOptions,
    onChange,
}) => {
    const optionIndex = selected.findIndex(
        (selectedOption) => selectedOption === highlightedPickedOptions[0]
    )

    // Can't move up option at index 0 or non-existing option
    if (optionIndex < 1) {
        return
    }

    // swap with previous item
    const reordered = [
        ...selected.slice(0, optionIndex - 1),
        selected[optionIndex],
        selected[optionIndex - 1],
        ...selected.slice(optionIndex + 1),
    ]

    onChange({ selected: reordered })
}
