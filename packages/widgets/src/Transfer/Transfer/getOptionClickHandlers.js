import { getModeByModifierKey } from '../common/index.js'

/**
 * @param {Object} option
 * @param {Function} selectionHandler
 * @param {Function} toggleHighlightedOption
 * @returns {Object}
 */
export const getOptionClickHandlers = (
    option,
    selectionHandler,
    toggleHighlightedOption
) => ({
    onClick: (_, event) => {
        const mode = getModeByModifierKey(event)
        toggleHighlightedOption({ option, mode })
    },
    onDoubleClick: selectionHandler,
})
