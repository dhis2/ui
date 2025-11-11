import { useEffect, useRef, useState } from 'react'

export const useOptionsNavigation = (options) => {
    const wrapperRef = useRef(null)

    const [focusedOptionIndex, setFocusedOptionIndex] = useState(null)

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault()
                const newUpFocusIndex =
                    focusedOptionIndex > 0
                        ? focusedOptionIndex - 1
                        : options.length - 1
                setFocusedOptionIndex(newUpFocusIndex)
                if (event.shiftKey) {
                    // TODO: this is very ugly!
                    const clickEvent = new MouseEvent('click', {
                        bubbles: true,
                        cancelable: true,
                        shiftKey: true,
                    })
                    wrapperRef.current.children[
                        newUpFocusIndex
                    ].children[0].dispatchEvent(clickEvent)
                }

                break
            case 'ArrowDown':
                event.preventDefault()
                const newDownFocusIndex =
                    focusedOptionIndex >= options.length - 1
                        ? 0
                        : focusedOptionIndex + 1
                setFocusedOptionIndex(newDownFocusIndex)
                if (event.shiftKey) {
                    // TODO: this is very ugly!
                    const clickEvent = new MouseEvent('click', {
                        bubbles: true,
                        cancelable: true,
                        shiftKey: true,
                    })
                    wrapperRef.current.children[
                        newDownFocusIndex
                    ].children[0].dispatchEvent(clickEvent)
                }
                break
            case ' ':
                event.preventDefault()
                if (wrapperRef && wrapperRef.current.children.length > 0) {
                    // TODO: this is ugly!
                    wrapperRef.current.children[
                        focusedOptionIndex
                    ].children[0].click()
                }
                break
            default:
                break
        }
    }

    const onOptionFocusedHandler = (optionIndex) => {
        setFocusedOptionIndex(optionIndex)
    }

    useEffect(() => {
        if (wrapperRef && wrapperRef.current.children.length > 0) {
            if (
                focusedOptionIndex !== null &&
                wrapperRef.current.children[focusedOptionIndex]
            ) {
                wrapperRef.current.children[focusedOptionIndex]?.focus()
            }
        }
    }, [wrapperRef, focusedOptionIndex, options])

    useEffect(() => {
        if (options && focusedOptionIndex >= options.length) {
            setFocusedOptionIndex(null)
        }
    }, [options])

    useEffect(() => {
        if (wrapperRef?.current) {
            wrapperRef.current.addEventListener('keydown', handleKeyDown)

            return () => {
                wrapperRef.current.removeEventListener('keydown', handleKeyDown)
            }
        }
    }, [handleKeyDown, wrapperRef])

    return {
        wrapperRef,
        onOptionFocusedHandler,
        focusedOptionIndex,
    }
}
