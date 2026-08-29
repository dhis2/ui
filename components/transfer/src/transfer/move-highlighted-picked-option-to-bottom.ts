import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.ts'

interface MoveHighlightedPickedOptionToBottomArgs {
    selected: string[]
    highlightedPickedOptions: string[]
    onChange: (payload: { selected: string[] }) => void
}

export const moveHighlightedPickedOptionToBottom = ({
    selected,
    highlightedPickedOptions,
    onChange,
}: MoveHighlightedPickedOptionToBottomArgs): void => {
    const indices = getHighlightedPickedIndices({
        selected,
        highlightedPickedOptions,
    })
    if (indices.length === 0) {
        return
    }

    const lastIndex = selected.length - 1
    if (
        indices.every(
            (index, i) => index === lastIndex - (indices.length - 1 - i)
        )
    ) {
        return
    }

    const indexSet = new Set(indices)
    const highlightedBlock = indices.map((index) => selected[index])
    const remaining = selected.filter((_, index) => !indexSet.has(index))
    onChange({ selected: [...remaining, ...highlightedBlock] })
}
