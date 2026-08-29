import { getHighlightedPickedIndices } from './get-highlighted-picked-indices.ts'

interface IsReorderUpDisabledArgs {
    highlightedPickedOptions: string[]
    selected: string[]
    filterActivePicked?: boolean
}

export const isReorderUpDisabled = ({
    highlightedPickedOptions,
    selected,
    filterActivePicked = false,
}: IsReorderUpDisabledArgs): boolean => {
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

    return indices.every((index, i) => index === i)
}
