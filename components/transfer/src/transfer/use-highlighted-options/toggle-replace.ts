interface ToggleReplaceArgs {
    option: { value: string }
    highlightedOptions: string[]
    setHighlightedOptions: (options: string[]) => void
}

export const toggleReplace = ({
    option,
    highlightedOptions,
    setHighlightedOptions,
}: ToggleReplaceArgs): void => {
    if (highlightedOptions.length > 1) {
        setHighlightedOptions([option.value])
    } else {
        const optionIndex = highlightedOptions.indexOf(option.value)

        if (optionIndex === -1) {
            setHighlightedOptions([option.value])
        } else {
            setHighlightedOptions([])
        }
    }
}
