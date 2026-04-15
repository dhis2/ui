interface RemoveAllPickedOptionsArgs {
    setHighlightedPickedOptions: (options: string[]) => void
    onChange: (payload: { selected: string[] }) => void
}

export const removeAllPickedOptions = ({
    setHighlightedPickedOptions,
    onChange,
}: RemoveAllPickedOptionsArgs): void => {
    setHighlightedPickedOptions([])
    onChange({ selected: [] })
}
