import { useCallback } from 'react'
import { OptionType } from '../shared-prop-types.ts'
import { useFocusOption } from './use-focus-option.ts'
import { usePageDown } from './use-page-down.ts'
import { usePageUp } from './use-page-up.ts'
import {
    findNextOptionIndex,
    findPrevOptionIndex,
    findFirstOptionIndex,
    findLastOptionIndex,
} from './utils.ts'

export function useHandleKeyPressOnFilterInput({
    value,
    options,
    loading,
    closeMenu,
    listBoxRef,
    focusComboBox,
    focussedOptionIndex,
    setFocussedOptionIndex,
    selectFocussedOption,
}: {
    value: string
    options: OptionType[]
    loading: boolean
    closeMenu: () => void
    listBoxRef: React.RefObject<HTMLElement>
    focusComboBox: () => void
    focussedOptionIndex: number
    setFocussedOptionIndex: (index: number) => void
    selectFocussedOption: () => void
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

    const focusNextOption = useFocusOption(findNextOptionIndex, {
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
    })

    const focusPrevOption = useFocusOption(findPrevOptionIndex, {
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
    })

    const focusFirstOption = useFocusOption(findFirstOptionIndex, {
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
    })

    const focusLastOption = useFocusOption(findLastOptionIndex, {
        options,
        focussedOptionIndex,
        setFocussedOptionIndex,
    })

    const handleKeyPress = useCallback(
        (e: React.KeyboardEvent) => {
            if (loading) {
                return
            }

            const { key, altKey } = e

            if (
                key === 'Escape' ||
                key === 'Enter' ||
                (key === 'ArrowUp' && altKey) ||
                (key === 'ArrowDown' && altKey)
            ) {
                if (value !== options[focussedOptionIndex].value) {
                    selectFocussedOption()
                }

                closeMenu()

                // As the filter is being focused, we want to move focus back to the combobox
                focusComboBox()

                return
            }

            if (key === 'ArrowDown') {
                e.preventDefault() // Disable moving cursor to end
                focusNextOption()
                return
            }

            if (key === 'ArrowUp') {
                e.preventDefault() // Disable moving cursor to start
                focusPrevOption()
                return
            }

            if (key === 'Home') {
                e.preventDefault() // Disable moving cursor to start
                focusFirstOption()
                return
            }

            if (key === 'End') {
                e.preventDefault() // Disable moving cursor to end
                focusLastOption()
                return
            }

            if (key === 'PageUp') {
                pageUp()
                return
            }

            if (key === 'PageDown') {
                pageDown()
                return
            }

            // Do nothing
        },
        [
            closeMenu,
            options,
            value,
            loading,
            focussedOptionIndex,
            selectFocussedOption,
            focusComboBox,
            focusNextOption,
            focusPrevOption,
            focusFirstOption,
            focusLastOption,
            pageDown,
            pageUp,
        ]
    )

    return handleKeyPress
}
