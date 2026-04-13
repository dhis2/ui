import { useCallback } from 'react'
import { OptionType } from '../shared-prop-types.ts'

type FindIndexCallback = (args: {
    options: OptionType[]
    activeIndex: number
}) => number

export function useFocusOption(
    findIndexCallback: FindIndexCallback,
    {
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
    }: {
        options: OptionType[]
        focussedOptionIndex: number
        setFocussedOptionIndex: (index: number) => void
    }
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
