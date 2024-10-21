import { useCallback } from 'react'
import { isOptionHidden } from '../is-option-hidden.js'

export function usePageUpDown(
    listBoxRef,
    focussedOptionIndex,
    setFocussedOptionIndex
) {
    const pageDown = useCallback(() => {
        const listBoxParent = listBoxRef.current.parentNode
        const options = Array.from(listBoxRef.current.childNodes)
        const highestVisibleIndex = options.reduce(
            (curIndex, option, index) => {
                if (
                    // When option is not visible
                    isOptionHidden(option, listBoxParent) ||
                    // When option is not the highest-index one so far
                    index <= curIndex
                ) {
                    return curIndex
                }

                return index
            },
            -1
        )

        // No visible option (e.g. when menu is empty)
        if (highestVisibleIndex === -1) {
            return
        }

        // Highlight last visible option
        if (highestVisibleIndex > focussedOptionIndex) {
            setFocussedOptionIndex(highestVisibleIndex)
            return
        }

        const visibleOptionsAmount = options.filter(
            (option) => !isOptionHidden(option, listBoxParent)
        ).length

        const nextHighlightedOptionIndex = Math.min(
            options.length - 1,
            focussedOptionIndex + visibleOptionsAmount
        )

        // If there's no next option and we already have the last option in the list highlighted
        if (!options[nextHighlightedOptionIndex]) {
            return
        }

        const nextTopOptionIndex = Math.min(
            options.length - 1,
            focussedOptionIndex + 1
        )

        const nextTopOption = options[nextTopOptionIndex]
        const scrollPosition = nextTopOption.offsetTop
        listBoxParent.scrollTop = scrollPosition
        setFocussedOptionIndex(nextHighlightedOptionIndex)
    }, [focussedOptionIndex, setFocussedOptionIndex, listBoxRef])

    const pageUp = useCallback(() => {
        const listBoxParent = listBoxRef.current.parentNode
        const options = Array.from(listBoxRef.current.childNodes)
        const lowestVisibleIndex = options.findIndex(
            (option) => !isOptionHidden(option, listBoxParent)
        )

        // No visible option (e.g. when menu is empty)
        if (lowestVisibleIndex === -1) {
            return
        }

        // Highlight last visible option
        if (lowestVisibleIndex < focussedOptionIndex) {
            setFocussedOptionIndex(lowestVisibleIndex)
            return
        }

        const visibleOptionsAmount = options.filter(
            (option) => !isOptionHidden(option, listBoxParent)
        ).length

        const nextTopOptionIndex = Math.max(
            0,
            focussedOptionIndex - visibleOptionsAmount
        )

        // If there's no next option and we already have the last option in the list highlighted
        if (!options[nextTopOptionIndex]) {
            return
        }

        const nextTopOption = options[nextTopOptionIndex]
        const scrollPosition = nextTopOption.offsetTop
        listBoxParent.scrollTop = scrollPosition
        setFocussedOptionIndex(nextTopOptionIndex)
    }, [focussedOptionIndex, setFocussedOptionIndex, listBoxRef])

    return { pageDown, pageUp }
}
