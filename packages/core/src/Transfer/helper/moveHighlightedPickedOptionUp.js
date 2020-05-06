import { findOptionIndex } from '../common'

/**
 * @param {Object} args
 * @param {Object[]} args.selectedOptions
 * @param {Object[]} args.highlightedPickedOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const moveHighlightedPickedOptionUp = ({
    selectedOptions,
    highlightedPickedOptions,
    onChange,
}) => {
    const optionIndex = findOptionIndex(
        selectedOptions,
        highlightedPickedOptions[0]
    )

    // Can't move up option at index 0 or non-existing option
    if (optionIndex < 1) return

    // swap with previous item
    const reordered = [
        ...selectedOptions.slice(0, optionIndex - 1),
        selectedOptions[optionIndex],
        selectedOptions[optionIndex - 1],
        ...selectedOptions.slice(optionIndex + 1),
    ]

    onChange({ selected: reordered })
}
