import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.ts'

interface MoveHighlightedPickedOptionUpArgs {
    selected: string[]
    highlightedPickedOptions: string[]
    onChange: (payload: { selected: string[] }) => void
}

/**
 * Moves the highlighted picked options up by one slot as a group.
 * If the selection is non-contiguous, the group collapses into a contiguous
 * block (preserving relative order) with its top edge landing at
 * `max(0, topmostHighlightedIndex - 1)`.
 *
 */
export const moveHighlightedPickedOptionUp = ({
    selected,
    highlightedPickedOptions,
    onChange,
}: MoveHighlightedPickedOptionUpArgs): void => {
    const indices = getHighlightedPickedIndices({
        selected,
        highlightedPickedOptions,
    })

    if (indices.length === 0) {
        return
    }

    // Already flush to the top — nothing to do
    if (indices.every((index, i) => index === i)) {
        return
    }

    const indexSet = new Set(indices)
    const highlightedBlock = indices.map((index) => selected[index])
    const remaining = selected.filter((_, index) => !indexSet.has(index))
    const topmost = indices[0]
    const insertPos = Math.max(0, topmost - 1)
    const reordered = [
        ...remaining.slice(0, insertPos),
        ...highlightedBlock,
        ...remaining.slice(insertPos),
    ]

    onChange({ selected: reordered })
}
