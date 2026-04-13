import { ADD_MODE, RANGE_MODE, TransferOptionObject } from '../../common/index.ts'
import { toggleAdd } from './toggle-add.ts'
import { toggleRange } from './toggle-range.ts'
import { toggleReplace } from './toggle-replace.ts'

interface CreateToggleHighlightedOptionArgs {
    disabled?: boolean
    highlightedOptions: string[]
    setHighlightedOptions: (options: string[]) => void
    maxSelections: number
    setLastClicked: (value: string | null) => void
    options: TransferOptionObject[]
    lastClicked: string | null
}

export const createToggleHighlightedOption =
    ({
        disabled,
        highlightedOptions,
        setHighlightedOptions,
        maxSelections,
        setLastClicked,
        options,
        lastClicked,
    }: CreateToggleHighlightedOptionArgs) =>
    ({ option, mode }: { option: TransferOptionObject; mode: string }): void => {
        if (disabled) {
            return
        }

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
