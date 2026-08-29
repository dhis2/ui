interface GetHighlightedPickedIndicesArgs {
    selected: string[]
    highlightedPickedOptions: string[]
}

export const getHighlightedPickedIndices = ({
    selected,
    highlightedPickedOptions,
}: GetHighlightedPickedIndicesArgs): number[] => {
    const highlightedSet = new Set(highlightedPickedOptions)
    const indices: number[] = []
    selected.forEach((value, index) => {
        if (highlightedSet.has(value)) {
            indices.push(index)
        }
    })
    return indices
}
