import { useCallback } from 'react'
import { isOptionHidden } from '../is-option-hidden.ts'
import { OptionType } from '../shared-prop-types.ts'
import { useHighlightFirstOptionOnPreviousPage } from './use-highlight-first-option-on-previous-page.ts'
import { useHighlightFirstVisibleOption } from './use-highlight-first-visible-option.ts'

export function usePageUp({
    options,
    listBoxRef,
    focussedOptionIndex,
    setFocussedOptionIndex,
}: {
    options: OptionType[]
    listBoxRef: React.RefObject<HTMLElement>
    focussedOptionIndex: number
    setFocussedOptionIndex: (index: number) => void
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
        const listBoxParent = listBoxRef.current!.parentNode as HTMLElement
        const optionElements = Array.from(
            listBoxRef.current!.childNodes
        ) as HTMLElement[]
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
