import { useCallback } from 'react'
import { useFocusOption } from './use-focus-option.js'
import { useHandleTyping } from './use-handle-typing.js'
import { usePageDown } from './use-page-down.js'
import { usePageUp } from './use-page-up.js'
import {
    findNextOptionIndex,
    findPrevOptionIndex,
    findFirstOptionIndex,
    findLastOptionIndex,
} from './utils.js'

function useSelectOption(findIndexCallback, { options, onChange, value }) {
    return useCallback(() => {
        const currentOptionIndex = options.findIndex(
            (option) => option.value === value
        )

        const nextSelectedOptionIndex = findIndexCallback({
            options,
            activeIndex: currentOptionIndex,
        })

        if (nextSelectedOptionIndex === -1) {
            return
        }

        const nextOption = options[nextSelectedOptionIndex]
        onChange({
            label: nextOption.label,
            value: nextOption.value,
        })
    }, [findIndexCallback, options, onChange, value])
}

export function useHandleKeyPressOnCombobox({
    value,
    disabled,
    expanded,
    loading,
    options,
    openMenu,
    closeMenu,
    listBoxRef,
    focussedOptionIndex,
    setFocussedOptionIndex,
    selectFocussedOption,
    onChange,
}) {
    const { onTyping, typing } = useHandleTyping({
        expanded,
        options,
        setFocussedOptionIndex,
        onChange,
    })

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

    const selectNextOption = useSelectOption(findNextOptionIndex, {
        options,
        onChange,
        value,
    })

    const selectPrevOption = useSelectOption(findPrevOptionIndex, {
        options,
        onChange,
        value,
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
        (event) => {
            const { key, altKey, ctrlKey, metaKey } = event
            if (disabled || loading) {
                return
            }

            /*
             * The menu won't be an ancestor / sibling of the combobox,
             * so when pressing tab, it's highly unlikely that any element
             * in the menu would receive focus (happens only in storybook,
             * where there's no other focussable element).
             *
             * Assistive technology will know about the menu as the combobox
             * has the appropriate aria attributes that will point to the
             * correct HTML elements.
             */
            if (expanded && key === 'Tab') {
                closeMenu()
                return
            }

            // ! This is necessary for cases where the parent window is scrollable
            // ! otherwise the ArrowDown/Up would change the combo but also scroll the window
            if (key === 'ArrowDown' || key === 'ArrowUp' || key === ' ') {
                event.preventDefault()
            }

            if (
                expanded &&
                (key === 'Escape' ||
                    key === 'Enter' ||
                    (key === ' ' && !typing) ||
                    (key === 'ArrowUp' && altKey) ||
                    (key === 'ArrowDown' && altKey))
            ) {
                if (value !== options[focussedOptionIndex].value) {
                    selectFocussedOption()
                }

                closeMenu()
                return
            }

            if (
                !expanded &&
                ((key === ' ' && !typing) ||
                    key === 'Enter' ||
                    (key === 'ArrowUp' && altKey) ||
                    (key === 'ArrowDown' && altKey))
            ) {
                openMenu()
                return
            }

            if (key === 'ArrowDown' && !expanded) {
                selectNextOption()
                return
            }

            if (key === 'ArrowDown') {
                focusNextOption()
                return
            }

            if (key === 'ArrowUp' && !expanded) {
                selectPrevOption()
                return
            }

            if (key === 'ArrowUp') {
                focusPrevOption()
                return
            }

            if (key === 'Home') {
                focusFirstOption()
                return
            }

            if (key === 'End') {
                focusLastOption()
                return
            }

            if (
                key === 'Backspace' ||
                key === 'Clear' ||
                (key.length === 1 &&
                    key !== ' ' &&
                    !altKey &&
                    !ctrlKey &&
                    !metaKey) ||
                (key === ' ' && typing)
            ) {
                onTyping(key)
                return
            }

            if (expanded && key === 'PageUp') {
                pageUp()
                return
            }

            if (expanded && key === 'PageDown') {
                pageDown()
                return
            }

            // Do nothing
        },
        [
            closeMenu,
            disabled,
            expanded,
            loading,
            openMenu,
            options,
            value,
            typing,
            focussedOptionIndex,
            selectFocussedOption,
            selectNextOption,
            selectPrevOption,
            focusNextOption,
            focusPrevOption,
            focusFirstOption,
            focusLastOption,
            pageDown,
            pageUp,
            onTyping,
        ]
    )

    return handleKeyPress
}
