import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.ts'

interface MoveHighlightedPickedOptionToTopArgs {
    selected: string[]
    highlightedPickedOptions: string[]
    onChange: (payload: { selected: string[] }) => void
}

export const moveHighlightedPickedOptionToTop = ({
    selected,
    highlightedPickedOptions,
    onChange,
}: MoveHighlightedPickedOptionToTopArgs): void => {
    const indices = getHighlightedPickedIndices({
        selected,
        highlightedPickedOptions,
    })
    if (indices.every((index, i) => index === i)) {
        return
    }

    const indexSet = new Set(indices)
    const highlightedBlock = indices.map((index) => selected[index])
    const remaining = selected.filter((_, index) => !indexSet.has(index))
    onChange({ selected: [...highlightedBlock, ...remaining] })
}
