import { getModeByModifierKey } from '../common'

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
