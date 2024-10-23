import { useCallback } from 'react'
import { isOptionHidden } from '../is-option-hidden.js'
import { useHighlightLastOptionOnNextPage } from './use-highlight-last-option-on-next-page.js'
import { useHighlightLastVisibleOption } from './use-highlight-last-visible-option.js'

export function usePageDown({
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
