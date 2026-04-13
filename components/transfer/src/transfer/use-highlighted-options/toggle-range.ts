import { findOptionIndex, TransferOptionObject } from '../../common/index.ts'

interface ToggleRangeArgs {
    maxSelections: number
    highlightedOptions: string[]
    options: TransferOptionObject[]
    option: TransferOptionObject
    lastClicked: string | null
    setHighlightedOptions: (options: string[]) => void
}

export const toggleRange = ({
    highlightedOptions,
    options,
    option,
    setHighlightedOptions,
    lastClicked,
    maxSelections,
}: ToggleRangeArgs): void => {
    if (highlightedOptions.length === 0) {
        setHighlightedOptions([option.value])
    } else {
        let from: number, to: number

        const clickedOptionIndex = findOptionIndex(options, option)
        const lastClickedSourceOptionWithoutRangeModeIndex = lastClicked
            ? options.findIndex((curOption) => curOption.value === lastClicked)
            : -1

        if (lastClickedSourceOptionWithoutRangeModeIndex !== -1) {
            from = lastClickedSourceOptionWithoutRangeModeIndex
            to = clickedOptionIndex
        } else {
            const firstHighlightedInList = options.findIndex((option) =>
                highlightedOptions.find(
                    (highlightedOption) => highlightedOption === option.value
                )
            )

            from = firstHighlightedInList
            to = clickedOptionIndex
        }

        const lower = Math.min(from, to)
        const higher = Math.max(from, to)
        const newHighlightedSourceOptions = options
            .slice(lower, higher + 1)
            .filter((option) => !option.disabled)
            .slice(maxSelections * -1)
            .map(({ value }) => value)

        setHighlightedOptions(newHighlightedSourceOptions)
    }
}
