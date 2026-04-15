interface CreateDoubleClickHandlersArgs {
    maxSelections: number
    selected: string[]
    onChange: (payload: { selected: string[] }) => void
    setHighlightedSourceOptions: (options: string[]) => void
    setHighlightedPickedOptions: (options: string[]) => void
}

interface DoubleClickHandlers {
    selectSingleOption: (payload: { value: string }) => void
    deselectSingleOption: (payload: { value: string }) => void
}

export const createDoubleClickHandlers = ({
    maxSelections,
    onChange,
    selected,
    setHighlightedPickedOptions,
    setHighlightedSourceOptions,
}: CreateDoubleClickHandlersArgs): DoubleClickHandlers => {
    const selectSingleOption = ({ value }: { value: string }) => {
        const newSelected = selected.includes(value)
            ? selected
            : [...selected, value]

        setHighlightedSourceOptions([])
        onChange({ selected: newSelected.slice(-1 * maxSelections) })
    }

    const deselectSingleOption = ({ value }: { value: string }) => {
        const newSelected = selected.filter(
            (curSelected) => curSelected !== value
        )

        setHighlightedPickedOptions([])
        onChange({ selected: newSelected })
    }

    return { selectSingleOption, deselectSingleOption }
}
