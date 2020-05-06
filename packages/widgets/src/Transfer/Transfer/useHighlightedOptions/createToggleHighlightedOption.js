import { ADD_MODE, RANGE_MODE } from '../../common/index.js'
import { toggleAdd } from './toggleAdd.js'
import { toggleRange } from './toggleRange.js'
import { toggleReplace } from './toggleReplace.js'

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
        setLastClicked(option)

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
    setLastClicked(option)

    return toggleReplace({
        option,
        highlightedOptions,
        setHighlightedOptions,
    })
}
