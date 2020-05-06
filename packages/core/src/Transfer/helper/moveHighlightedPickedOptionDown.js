import { findOptionIndex } from '../common.js'

/**
 * @param {Object} args
 * @param {Object[]} args.selectedOptions
 * @param {Object[]} args.highlightedPickedOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const moveHighlightedPickedOptionDown = ({
    selectedOptions,
    highlightedPickedOptions,
    onChange,
}) => {
    const optionIndex = findOptionIndex(
        selectedOptions,
        highlightedPickedOptions[0]
    )

    // Can't move down last or non-existing option
    if (optionIndex === -1 || optionIndex > selectedOptions.length - 2) return

    // swap with next item
    const reordered = [
        ...selectedOptions.slice(0, optionIndex),
        selectedOptions[optionIndex + 1],
        selectedOptions[optionIndex],
        ...selectedOptions.slice(optionIndex + 2),
    ]

    onChange({ selected: reordered })
}
