import { useCallback } from 'react'
import { isOptionHidden } from '../is-option-hidden.js'
import { useHighlightFirstOptionOnPreviousPage } from './use-highlight-first-option-on-previous-page.js'
import { useHighlightFirstVisibleOption } from './use-highlight-first-visible-option.js'

export function usePageUp({
    options,
    listBoxRef,
    focussedOptionIndex,
    setFocussedOptionIndex,
}) {
    const highlightFirstVisibleOption = useHighlightFirstVisibleOption({
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
    })

    const highlightFirstOptionOnPreviousPage =
        useHighlightFirstOptionOnPreviousPage({
            options,
            focussedOptionIndex,
            setFocussedOptionIndex,
            listBoxRef,
        })

    return useCallback(() => {
        const listBoxParent = listBoxRef.current.parentNode
        const optionElements = Array.from(listBoxRef.current.childNodes)
        const lowestVisibleIndex = optionElements.findIndex(
            (optionElement) => !isOptionHidden(optionElement, listBoxParent)
        )

        // No visible option (e.g. when menu is empty)
        if (lowestVisibleIndex === -1) {
            return
        }

        if (lowestVisibleIndex < focussedOptionIndex) {
            highlightFirstVisibleOption(lowestVisibleIndex)
            return
        }

        highlightFirstOptionOnPreviousPage()
    }, [
        focussedOptionIndex,
        listBoxRef,
        highlightFirstOptionOnPreviousPage,
        highlightFirstVisibleOption,
    ])
}
