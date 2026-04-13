interface MoveHighlightedPickedOptionUpArgs {
    selected: string[]
    highlightedPickedOptions: string[]
    onChange: (payload: { selected: string[] }) => void
}

export const moveHighlightedPickedOptionUp = ({
    selected,
    highlightedPickedOptions,
    onChange,
}: MoveHighlightedPickedOptionUpArgs): void => {
    const optionIndex = selected.findIndex(
        (selectedOption) => selectedOption === highlightedPickedOptions[0]
    )

    if (optionIndex < 1) {
        return
    }

    const reordered = [
        ...selected.slice(0, optionIndex - 1),
        selected[optionIndex],
        selected[optionIndex - 1],
        ...selected.slice(optionIndex + 1),
    ]

    onChange({ selected: reordered })
}
