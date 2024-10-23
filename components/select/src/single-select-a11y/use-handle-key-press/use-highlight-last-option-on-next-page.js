import { useCallback } from 'react'
import { isOptionHidden } from '../is-option-hidden.js'

export function useHighlightLastOptionOnNextPage({
    options,
    focussedOptionIndex,
    setFocussedOptionIndex,
    listBoxRef,
}) {
    return useCallback(
        (listBoxParent) => {
            const optionElements = Array.from(listBoxRef.current.childNodes)
            const visibleOptionsAmount = options.filter(
                (_, index) =>
                    !isOptionHidden(optionElements[index], listBoxParent)
            ).length

            const nextHighlightedOptionIndex = Math.min(
                options.length - 1,
                focussedOptionIndex + visibleOptionsAmount
            )

            // If there's no next option and we already have the last option in the list highlighted
            if (!options[nextHighlightedOptionIndex]) {
                return
            }

            if (!options[nextHighlightedOptionIndex].disabled) {
                // This will be the first option in the list
                const { offsetTop: scrollPosition } =
                    optionElements[
                        nextHighlightedOptionIndex - visibleOptionsAmount + 1
                    ]

                listBoxParent.scrollTop = scrollPosition
                setFocussedOptionIndex(nextHighlightedOptionIndex)
                return
            }

            const followingEnabledOptionIndex =
                nextHighlightedOptionIndex +
                options
                    .slice(nextHighlightedOptionIndex)
                    .findIndex((option) => !option.disabled)

            // There is no enabled option after the disabled option that's at the end of the next page
            // So we stay where we are
            if (followingEnabledOptionIndex === -1) {
                return
            }

            // There is an enabled option after the disabled option that's at the end of the next page
            // So that'll be the new highlighted option and the bottom of the next displayed page
            const { offsetTop: adjustedScrollPosition } =
                optionElements[
                    followingEnabledOptionIndex - visibleOptionsAmount + 1
                ]

            listBoxParent.scrollTop = adjustedScrollPosition
            setFocussedOptionIndex(followingEnabledOptionIndex)
        },
        [options, focussedOptionIndex, setFocussedOptionIndex, listBoxRef]
    )
}
