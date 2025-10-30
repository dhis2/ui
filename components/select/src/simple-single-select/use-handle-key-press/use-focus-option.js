import { useCallback } from 'react'

export function useFocusOption(
    findIndexCallback,
    { options, focussedOptionIndex, setFocussedOptionIndex }
) {
    return useCallback(() => {
        const nextFocussedIndex = findIndexCallback({
            options,
            activeIndex: focussedOptionIndex,
        })

        if (nextFocussedIndex === -1) {
            return
        }

        setFocussedOptionIndex(nextFocussedIndex)
    }, [
        findIndexCallback,
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
    ])
}
