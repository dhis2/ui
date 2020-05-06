import { toggleOption } from '../../common/index.js'

/**
 * @param {Object} args
 * @param {Object[]} args.highlightedOptions
 * @param {Object} args.option
 * @param {Function} args.setHighlightedOption
 * @returns {void}
 */
export const toggleReplace = ({
    option,
    highlightedOptions,
    setHighlightedOptions,
}) => {
    if (highlightedOptions.length > 1) {
        setHighlightedOptions([option])
    } else {
        setHighlightedOptions(
            toggleOption(highlightedOptions, option).slice(-1)
        )
    }
}
