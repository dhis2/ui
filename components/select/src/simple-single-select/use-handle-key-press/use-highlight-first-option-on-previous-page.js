import { useCallback } from 'react'

export function useHighlightFirstOptionOnPreviousPage({
    options,
    focussedOptionIndex,
    setFocussedOptionIndex,
    listBoxRef,
}) {
    return useCallback(() => {
        const listBoxParent = listBoxRef.current.parentNode
        const optionElements = Array.from(listBoxRef.current.childNodes)
        const visibleOptionsAmount = Math.floor(
            listBoxParent.offsetHeight / optionElements[0].offsetHeight
        )

        const nextTopOptionIndex = Math.max(
            0,
            focussedOptionIndex - visibleOptionsAmount
        )

        // If there's no next option and we already have the last option in the list highlighted
        if (!options[nextTopOptionIndex]) {
            return
        }

        if (!options[nextTopOptionIndex].disabled) {
            const nextTopOption = optionElements[nextTopOptionIndex]
            const scrollPosition = nextTopOption.offsetTop
            listBoxParent.scrollTop = scrollPosition
            setFocussedOptionIndex(nextTopOptionIndex)
            return
        }

        const lowerEnabledOptionIndex = options
            .slice(0, nextTopOptionIndex)
            .findLastIndex((option) => !option.disabled)

        if (lowerEnabledOptionIndex !== -1) {
            const lowerEnabledOption = optionElements[lowerEnabledOptionIndex]
            const lowerScrollPosition = lowerEnabledOption.offsetTop
            listBoxParent.scrollTop = lowerScrollPosition
            setFocussedOptionIndex(lowerEnabledOptionIndex)
            return
        }

        const inbetweenEnabledOptionIndex =
            nextTopOptionIndex +
            options
                .slice(nextTopOptionIndex, focussedOptionIndex)
                .findIndex((option) => !option.disabled)

        if (inbetweenEnabledOptionIndex === -1) {
            // We're already on the first enabled option
            return
        }

        const inbetweenTopOption = optionElements[inbetweenEnabledOptionIndex]
        const scrollPosition = inbetweenTopOption.offsetTop
        listBoxParent.scrollTop = scrollPosition
        setFocussedOptionIndex(inbetweenEnabledOptionIndex)
    }, [options, focussedOptionIndex, setFocussedOptionIndex, listBoxRef])
}
