import { useCallback } from 'react'
import { isOptionHidden } from '../is-option-hidden.js'
import { useHighlightLastOptionOnNextPage } from './use-highlight-last-option-on-next-page.js'
import { useHighlightLastVisibleOption } from './use-highlight-last-visible-option.js'

function usePageDown({
    options,
    focussedOptionIndex,
    setFocussedOptionIndex,
    listBoxRef,
}) {
    const highlightLastVisibleOption = useHighlightLastVisibleOption({
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
    })

    const highlightLastOptionOnNextPage = useHighlightLastOptionOnNextPage({
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
        listBoxRef,
    })

    return useCallback(() => {
        const listBoxParent = listBoxRef.current.parentNode
        const options = Array.from(listBoxRef.current.childNodes)
        const highestVisibleIndex = options.findLastIndex(
            (option) => !isOptionHidden(option, listBoxParent)
        )

        if (highestVisibleIndex > focussedOptionIndex) {
            highlightLastVisibleOption(highestVisibleIndex)
            return
        }

        if (highestVisibleIndex > -1) {
            highlightLastOptionOnNextPage(listBoxParent)
            return
        }

        // No visible option (e.g. when menu is empty)
        return
    }, [
        focussedOptionIndex,
        listBoxRef,
        highlightLastVisibleOption,
        highlightLastOptionOnNextPage,
    ])
}

function usePageUp({
    listBoxRef,
    focussedOptionIndex,
    setFocussedOptionIndex,
}) {
    return useCallback(() => {
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
}

export function usePageUpDown({
    options,
    listBoxRef,
    focussedOptionIndex,
    setFocussedOptionIndex,
}) {
    const pageDown = usePageDown({
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
        listBoxRef,
    })

    const pageUp = usePageUp({
        options,
        listBoxRef,
        focussedOptionIndex,
        setFocussedOptionIndex,
    })

    return { pageDown, pageUp }
}
