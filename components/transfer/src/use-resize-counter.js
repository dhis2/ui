import { useEffect, useRef, useState } from 'react'

/*
 * The initial call is irrelevant as there has been
 * no resize yet that we want to react to
 * So we start with -1 with will returned as 0 by this hook
 *
 * @param {Element} element
 * @returns {number}
 */
export const useResizeCounter = (element) => {
    const [counter, setCounter] = useState(0)
    const resizeObserverRef = useRef(
        new ResizeObserver(() => {
            setCounter((currentCounter) => currentCounter + 1)
        })
    )

    useEffect(() => {
        if (element) {
            const observer = resizeObserverRef.current
            observer.observe(element)
            return () => observer.disconnect()
        }
    }, [element])

    return counter
}
