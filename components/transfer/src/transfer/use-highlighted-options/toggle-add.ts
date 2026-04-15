import { toggleValue } from '../../common/index.ts'

interface ToggleAddArgs {
    maxSelections: number
    highlightedOptions: string[]
    option: { value: string }
    setHighlightedOptions: (options: string[]) => void
}

export const toggleAdd = ({
    highlightedOptions,
    maxSelections,
    option,
    setHighlightedOptions,
}: ToggleAddArgs): void => {
    const afterToggled = toggleValue(highlightedOptions, option.value)
    const capped = afterToggled.slice(-1 * maxSelections)
    setHighlightedOptions(capped)
}
