import '../../types.js'
import { toggleOption } from '../../common'

/**
 * @param {Object} args
 * @param {Option[]} args.highlightedOptions
 * @param {number} args.maxSelections
 * @param {Option} args.option
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
