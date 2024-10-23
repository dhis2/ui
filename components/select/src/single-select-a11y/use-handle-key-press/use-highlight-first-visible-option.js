import { useCallback } from 'react'

export function useHighlightFirstVisibleOption({
    options,
    focussedOptionIndex,
    setFocussedOptionIndex,
}) {
    return useCallback(
        (lowestVisibleIndex) => {
            if (!options[lowestVisibleIndex].disabled) {
                setFocussedOptionIndex(lowestVisibleIndex)
                return
            }

            const previousEnabledOptionIndex = options
                .slice(0, lowestVisibleIndex)
                .findLastIndex((option) => !option.disabled)

            if (previousEnabledOptionIndex !== -1) {
                setFocussedOptionIndex(previousEnabledOptionIndex)
                return
            }

            const nextEnabledOptionIndex =
                lowestVisibleIndex +
                options
                    .slice(lowestVisibleIndex, focussedOptionIndex)
                    .findIndex((option) => !option.disabled)

            if (nextEnabledOptionIndex !== -1) {
                return
            }

            setFocussedOptionIndex(nextEnabledOptionIndex)
        },
        [options, focussedOptionIndex, setFocussedOptionIndex]
    )
}
