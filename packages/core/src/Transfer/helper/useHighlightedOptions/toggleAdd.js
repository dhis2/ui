import { toggleOption } from '../../common'

/**
 * @param {Object} args
 * @param {number} args.maxSelections
 * @param {Object[]} args.highlightedOptions
 * @param {Object} args.option
 * @param {Function} args.setHighlightedOption
 * @returns {void}
 */
export const toggleAdd = ({
    highlightedOptions,
    maxSelections,
    option,
    setHighlightedOptions,
}) => {
    setHighlightedOptions(
        toggleOption(highlightedOptions, option).slice(-1 * maxSelections)
    )
}
