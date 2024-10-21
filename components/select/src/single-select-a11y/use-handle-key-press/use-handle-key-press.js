import { useCallback } from 'react'
import { useHandleTyping } from './use-handle-typing.js'
import { usePageUpDown } from './use-page-up-down.js'

export function useHandleKeyPress({
    value,
    expanded,
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

    const { pageDown, pageUp } = usePageUpDown(
        listBoxRef,
        focussedOptionIndex,
        setFocussedOptionIndex
    )

    const selectNextOption = useCallback(() => {
        const currentOptionIndex = options.findIndex(
            (option) => option.value === value
        )
        const nextSelectedOption = options[currentOptionIndex + 1]

        if (nextSelectedOption) {
            onChange(nextSelectedOption.value)
        }
    }, [options, onChange, value])

    const selectPrevOption = useCallback(() => {
        const currentOptionIndex = options.findIndex(
            (option) => option.value === value
        )
        const nextSelectedOption = options[currentOptionIndex - 1]

        if (nextSelectedOption) {
            onChange(nextSelectedOption.value)
        }
    }, [options, onChange, value])

    const focusNextOption = useCallback(() => {
        if (focussedOptionIndex < options.length - 1) {
            setFocussedOptionIndex(focussedOptionIndex + 1)
        }
    }, [focussedOptionIndex, options, setFocussedOptionIndex])

    const focusPrevOption = useCallback(() => {
        if (focussedOptionIndex > 0) {
            setFocussedOptionIndex(focussedOptionIndex - 1)
        }
    }, [focussedOptionIndex, setFocussedOptionIndex])

    const focusFirstOption = useCallback(() => {
        setFocussedOptionIndex(0)
    }, [setFocussedOptionIndex])

    const focusLastOption = useCallback(() => {
        setFocussedOptionIndex(options.length - 1)
    }, [options, setFocussedOptionIndex])

    const handleKeyPress = useCallback(
        (e) => {
            const { key, altKey, ctrlKey, metaKey } = e

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

            if (key === 'ArrowDown') {
                if (!expanded) {
                    selectNextOption()
                } else {
                    focusNextOption()
                }

                return
            }

            if (key === 'ArrowUp') {
                if (!expanded) {
                    selectPrevOption()
                } else {
                    focusPrevOption()
                }

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
                onTyping(e)
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
            expanded,
            closeMenu,
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
