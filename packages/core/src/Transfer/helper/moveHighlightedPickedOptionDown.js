import { findOptionIndex } from '../common'

/**
 * @param {Object} args
 * @param {Option[]} args.selectedPlainOptions
 * @param {Option[]} args.highlightedPickedPlainOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const moveHighlightedPickedOptionDown = ({
    selectedPlainOptions,
    highlightedPickedPlainOptions,
    onChange,
}) => {
    const optionIndex = findOptionIndex(
        selectedPlainOptions,
        highlightedPickedPlainOptions[0]
    )

    // Can't move down last or non-existing option
    if (optionIndex === -1 || optionIndex > selectedPlainOptions.length - 2)
        return

    // swap with next item
    const reordered = [
        ...selectedPlainOptions.slice(0, optionIndex),
        selectedPlainOptions[optionIndex + 1],
        selectedPlainOptions[optionIndex],
        ...selectedPlainOptions.slice(optionIndex + 2),
    ]

    onChange({ selected: reordered })
}
