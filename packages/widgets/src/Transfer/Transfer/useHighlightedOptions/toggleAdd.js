import { toggleValue } from '../../common'

/**
 * @param {Object} args
 * @param {number} args.maxSelections
 * @param {string[]} args.highlightedOptions
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
    const afterToggled = toggleValue(highlightedOptions, option.value)
    const capped = afterToggled.slice(-1 * maxSelections)
    setHighlightedOptions(capped)
}
