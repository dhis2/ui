interface MoveHighlightedPickedOptionDownArgs {
    selected: string[]
    highlightedPickedOptions: string[]
    onChange: (payload: { selected: string[] }) => void
}

export const moveHighlightedPickedOptionDown = ({
    selected,
    highlightedPickedOptions,
    onChange,
}: MoveHighlightedPickedOptionDownArgs): void => {
    const optionIndex = selected.findIndex(
        (selectedOption) => selectedOption === highlightedPickedOptions[0]
    )

    if (optionIndex === -1 || optionIndex > selected.length - 2) {
        return
    }

    const reordered = [
        ...selected.slice(0, optionIndex),
        selected[optionIndex + 1],
        selected[optionIndex],
        ...selected.slice(optionIndex + 2),
    ]

    onChange({ selected: reordered })
}
