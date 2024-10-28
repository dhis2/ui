import { useCallback, useEffect, useRef, useState } from 'react'

const TYPING_DEBOUNCE_TIME = 300 // ms

export function useHandleTyping({
    expanded,
    options,
    setFocussedOptionIndex,
    onChange,
}) {
    const [value, setValue] = useState('')
    const [typing, setTyping] = useState(false)

    // This will reset the typed value after a given time
    const timeoutRef = useRef()
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

    // This will focus the first option with a label starting with the typed sequence
    const prevValueRef = useRef()
    useEffect(() => {
        if (value && value !== prevValueRef.current) {
            // We only want to do this when the value changed
            prevValueRef.current = value

            const optionIndex = options.findIndex(
                ({ disabled, label }) =>
                    !disabled &&
                    label.toLowerCase().startsWith(value.toLowerCase())
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

    const onTyping = useCallback((key) => {
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
