import '../../types.js'
import { toggleOption } from '../../common'

/**
 * @param {Object} args
 * @param {Option[]} args.highlightedOptions
 * @param {Option} args.option
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
