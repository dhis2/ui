import { useCallback } from 'react'
import { OptionType } from '../shared-prop-types.ts'

export function useHighlightFirstVisibleOption({
    options,
    focussedOptionIndex,
    setFocussedOptionIndex,
}: {
    options: OptionType[]
    focussedOptionIndex: number
    setFocussedOptionIndex: (index: number) => void
}) {
    return useCallback(
        (lowestVisibleIndex: number) => {
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
