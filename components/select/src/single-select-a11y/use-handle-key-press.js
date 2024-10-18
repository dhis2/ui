import { useCallback, useEffect, useRef, useState } from 'react'

const TYPING_DEBOUNCE_TIME = 300 // ms

function useHandleTyping({
    expanded,
    options,
    setFocussedOptionIndex,
    onChange,
}) {
    const timeoutRef = useRef()
    const [value, setValue] = useState('')
    const [typing, setTyping] = useState(false)

    // This will reset the typed value after a given time
    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }

        if (value) {
            timeoutRef.current = setTimeout(() => {
                setValue('')
                setTyping(false)
            }, TYPING_DEBOUNCE_TIME)
        } else {
            setTyping(false)
        }
    }, [
        // adding value to the dependencies array so that the hooks runs every time the value changes
        value,
    ])

    const prevValueRef = useRef()
    useEffect(() => {
        if (value && value !== prevValueRef.current) {
            // We only want to do this when the value changed
            prevValueRef.current = value

            const optionIndex = options.findIndex((option) =>
                option.label.toLowerCase().startsWith(value.toLowerCase())
            )

            if (optionIndex !== -1) {
                if (expanded) {
                    setFocussedOptionIndex(optionIndex)
                } else {
                    const nextSelectedOption = options[optionIndex]
                    onChange(nextSelectedOption.value)
                }
            }
        }
    }, [value, options, setFocussedOptionIndex, expanded, onChange])

    const onTyping = useCallback((e) => {
        const { key } = e
        setTyping(true)

        if (key === 'Backspace') {
            setValue((prevValue) => prevValue.slice(0, -1))
            return
        }

        if (key === 'Clear') {
            setValue('')
            return
        }

        setValue((prevValue) => `${prevValue}${key}`)
    }, [])

    return { onTyping, typing }
}

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
    const { onTyping, typing } = useHandleTyping({
        expanded,
        options,
        setFocussedOptionIndex,
        onChange,
    })

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
                // @TODO: SelectActions.PageUp
                return
            }

            if (expanded && key === 'PageDown') {
                // @TODO: SelectActions.PageDown
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
            onTyping,
        ]
    )

    return handleKeyPress
}
