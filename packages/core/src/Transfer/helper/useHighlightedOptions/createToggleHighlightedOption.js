import { ADD_MODE, RANGE_MODE } from '../../common'
import { toggleAdd } from './toggleAdd'
import { toggleRange } from './toggleRange'
import { toggleReplace } from './toggleReplace'

export const createToggleHighlightedOption = ({
    disabled,
    highlightedOptions,
    setHighlightedOptions,
    maxSelections,
    setLastClicked,
    reactOptions,
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
            reactOptions,
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
