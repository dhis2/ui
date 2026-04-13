import { useCallback } from 'react'
import { isOptionHidden } from '../is-option-hidden.ts'
import { OptionType } from '../shared-prop-types.ts'
import { useHighlightLastOptionOnNextPage } from './use-highlight-last-option-on-next-page.ts'
import { useHighlightLastVisibleOption } from './use-highlight-last-visible-option.ts'

export function usePageDown({
    options,
    focussedOptionIndex,
    setFocussedOptionIndex,
    listBoxRef,
}: {
    options: OptionType[]
    focussedOptionIndex: number
    setFocussedOptionIndex: (index: number) => void
    listBoxRef: React.RefObject<HTMLElement>
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
        const listBoxParent = listBoxRef.current!.parentNode as HTMLElement
        const optionElements = Array.from(listBoxRef.current!.childNodes) as HTMLElement[]
        const highestVisibleIndex = optionElements.findLastIndex(
            (option) => !isOptionHidden(option, listBoxParent)
        )

        if (highestVisibleIndex > focussedOptionIndex) {
            highlightLastVisibleOption(highestVisibleIndex)
            return
        }

        if (highestVisibleIndex > -1) {
            highlightLastOptionOnNextPage()
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
