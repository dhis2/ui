import { useEffect, useState } from 'react'

/*
 * The initial call is irrelevant as there has been
 * no resize yet that we want to react to
 * So we start with -1 with will returned as 0 by this hook
 *
 * @param {Element} element
 * @returns {number}
 */
export const useResizeCounter = (element) => {
    const [counter, setCounter] = useState(-1)

    useEffect(() => {
        // using an internal counter as using the one from `useState`
        // would cause an infinite loop as this `useEffect` would
        // both depend on that value as well as change it every time
        // it's executed as the callback passed to `ResizeObserver`
        // will be executed on construction
        let internalCounter = counter

        if (element) {
            const observer = new ResizeObserver(() => {
                ++internalCounter
                setCounter(internalCounter)
            })

            observer.observe(element)
            return () => observer.disconnect()
        }
    }, [element, setCounter])

    return counter < 1 ? 0 : counter
}
