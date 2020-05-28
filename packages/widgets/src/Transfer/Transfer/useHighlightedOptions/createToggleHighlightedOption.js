import { ADD_MODE, RANGE_MODE } from '../../common/index.js'
import { toggleAdd } from './toggleAdd.js'
import { toggleRange } from './toggleRange.js'
import { toggleReplace } from './toggleReplace.js'

/**
 * @param {Object} args
 * @param {bool} args.disabled
 * @param {string[]} args.highlightedOptions
 * @param {Function} args.setHighlightedOptions
 * @param {number} args.maxSelections
 * @param {Function} args.setLastClicked
 * @param {Object[]} args.options
 * @param {string} args.lastClicked
 * @returns {void}
 */
export const createToggleHighlightedOption = ({
    disabled,
    highlightedOptions,
    setHighlightedOptions,
    maxSelections,
    setLastClicked,
    options,
    lastClicked,
}) => ({ option, mode }) => {
    if (disabled) return

    setHighlightedOptions([])

    if (mode === ADD_MODE) {
        setLastClicked(option.value)

        return toggleAdd({
            highlightedOptions,
            maxSelections,
            option,
            setHighlightedOptions,
        })
    }

    if (mode === RANGE_MODE) {
        return toggleRange({
            highlightedOptions,
            options,
            option,
            setHighlightedOptions,
            lastClicked,
            maxSelections,
        })
    }

    // REPLACE_MODE
    setLastClicked(option.value)

    return toggleReplace({
        option,
        highlightedOptions,
        setHighlightedOptions,
    })
}
