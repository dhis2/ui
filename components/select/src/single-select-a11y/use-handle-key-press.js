import { useCallback } from 'react'

const OPEN_KEYS = ['ArrowDown', 'ArrowUp', 'Enter', ' ']

export function useHandleKeyPress({
    value,
    expanded,
    options,
    openMenu,
    closeMenu,
    focussedOptionIndex,
    setFocussedOptionIndex,
    selectFocussedOption,
    onChange,
}) {
    const selectNextOption = useCallback(() => {
        if (focussedOptionIndex < options.length - 1) {
            onChange(options[focussedOptionIndex + 1].value)
        }
    }, [focussedOptionIndex, options])

    const selectPrevOption = useCallback(() => {
        if (focussedOptionIndex > 0) {
            onChange(options[focussedOptionIndex - 1].value)
        }
    }, [focussedOptionIndex, options])

    const focusNextOption = useCallback(() => {
        if (focussedOptionIndex < options.length - 1) {
            setFocussedOptionIndex(focussedOptionIndex + 1)
        }
    }, [focussedOptionIndex, options])

    const focusPrevOption = useCallback(() => {
        if (focussedOptionIndex > 0) {
            setFocussedOptionIndex(focussedOptionIndex - 1)
        }
    }, [focussedOptionIndex, options])

    const focusFirstOption = useCallback(() => {
        setFocussedOptionIndex(0)
    }, [options])

    const focusLastOption = useCallback(() => {
        setFocussedOptionIndex(options.length - 1)
    }, [focussedOptionIndex, options])

    const keyToAction = {
    }

    const handleKeyPress = useCallback((e) => {
        const { key, altKey, ctrlKey, metaKey } = e

        if (
            expanded &&
            (
                key === 'Escape' ||
                key === 'Enter' ||
                key === ' ' ||
                (key === 'ArrowUp' && altKey) ||
                (key === 'ArrowDown' && altKey)
            )
        ) {
            if (value !== options[focussedOptionIndex].value) {
                selectFocussedOption()
            }

            closeMenu()
            return
        }

        if (
            !expanded &&
            (
                key === ' ' ||
                key === 'Enter' ||
                (key === 'ArrowUp' && altKey) ||
                (key === 'ArrowDown' && altKey)
            )
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
            (key.length === 1 && key !== ' ' && !altKey && !ctrlKey && !metaKey)
        ) {
            console.log('> typing')
            // @TODO: Handle typing
            return
        }

        if (expanded && key === 'PageUp') {
            // @TODO: SelectActions.PageUp
            return
        }

        if (expanded && key === 'PageDown') {
            // @TODO: SelectActions.PageDown
            return
        }

        console.log('> do nothing')
    }, [
        expanded,
        closeMenu,
        openMenu,
        selectFocussedOption,
        focusNextOption,
        focusPrevOption,
        focusFirstOption,
        focusLastOption,
    ])

    return handleKeyPress
}
