import { useCallback } from 'react'

export function useHighlightLastVisibleOption({
    options,
    focussedOptionIndex,
    setFocussedOptionIndex,
}) {
    return useCallback(
        (highestVisibleIndex) => {
            if (!options[highestVisibleIndex].disabled) {
                setFocussedOptionIndex(highestVisibleIndex)
                return
            }

            // Last option on page is disabled, find next option that's not disabled
            const followingEnabledOptionIndex = options
                .slice(highestVisibleIndex)
                .findIndex((option) => !option.disabled)

            if (followingEnabledOptionIndex >= 0) {
                // We need to add the highest visible index because the index is lower due to slicing the array
                setFocussedOptionIndex(
                    followingEnabledOptionIndex + highestVisibleIndex
                )
                return
            }

            // No following enabled option, trying to find the closest previous sibling of the last option on the current page
            const closestToEndOfPageEnabledOptionIndex = options
                .slice(
                    // We don't include the currently highlighted option
                    focussedOptionIndex + 1,
                    highestVisibleIndex
                )
                .findLastIndex((option) => !option.disabled)

            if (closestToEndOfPageEnabledOptionIndex >= 0) {
                setFocussedOptionIndex(
                    closestToEndOfPageEnabledOptionIndex +
                        // We need to add the focused index and 1 because the index is lower due to slicing the array
                        focussedOptionIndex +
                        1
                )
                return
            }

            // The currently highlighted option is the last enabled option
            return
        },
        [options, focussedOptionIndex, setFocussedOptionIndex]
    )
}
