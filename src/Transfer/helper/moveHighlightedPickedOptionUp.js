import { findOptionIndex } from '../common'

/**
 * @param {Object} args
 * @param {Option[]} args.selectedPlainOptions
 * @param {Option[]} args.highlightedPickedPlainOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const moveHighlightedPickedOptionUp = ({
    selectedPlainOptions,
    highlightedPickedPlainOptions,
    onChange,
}) => {
    const optionIndex = findOptionIndex(
        selectedPlainOptions,
        highlightedPickedPlainOptions[0]
    )

    // Can't move up option at index 0 or non-existing option
    if (optionIndex < 1) return

    // swap with previous item
    const reordered = [
        ...selectedPlainOptions.slice(0, optionIndex - 1),
        selectedPlainOptions[optionIndex],
        selectedPlainOptions[optionIndex - 1],
        ...selectedPlainOptions.slice(optionIndex + 1),
    ]

    onChange({ selected: reordered })
}
