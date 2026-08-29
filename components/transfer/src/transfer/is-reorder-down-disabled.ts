import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.ts'

interface IsReorderDownDisabledArgs {
    highlightedPickedOptions: string[]
    selected: string[]
    filterActivePicked?: boolean
}

export const isReorderDownDisabled = ({
    highlightedPickedOptions,
    selected,
    filterActivePicked = false,
}: IsReorderDownDisabledArgs): boolean => {
    if (filterActivePicked) {
        return true
    }

    const indices = getHighlightedPickedIndices({
        selected,
        highlightedPickedOptions,
    })
    if (indices.length === 0) {
        return true
    }

    const lastIndex = selected.length - 1
    return indices.every(
        (index, i) => index === lastIndex - (indices.length - 1 - i)
    )
}
