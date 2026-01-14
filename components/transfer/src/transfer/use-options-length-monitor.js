import { useCallback, useEffect, useRef } from 'react'

export const useOptionsLengthMonitor = ({
    scrollBoxRef,
    listRef,
    allOptionsLength,
    onEndReached,
}) => {
    /* Store in ref so this works even if a consumer does not pass a stable
     * function reference */
    const onEndReachRef = useRef(onEndReached)
    const prevAllOptionsLength = useRef(allOptionsLength)
    const isSourceOptionsListEndVisible = useCallback(() => {
        return (
            scrollBoxRef.current &&
            listRef.current &&
            scrollBoxRef.current.clientHeight > listRef.current.offsetHeight
        )
    }, [scrollBoxRef, listRef])

    useEffect(() => {
        /* When new options are loaded and the list end is (still) in
         * view we need to call onEndReached, because the end of the list
         * has indeed been reached but the interception detector will not pick
         * up on this */
        if (
            onEndReachRef.current &&
            prevAllOptionsLength.current < allOptionsLength &&
            isSourceOptionsListEndVisible()
        ) {
            onEndReachRef.current()
        }
        prevAllOptionsLength.current = allOptionsLength
        /* This effect will run on mount and when allOptionsLength changes
         * isSourceOptionsListEndVisible has two dependencies, but these are
         * both refs, so it actually is a fully stable callback */
    }, [isSourceOptionsListEndVisible, allOptionsLength])
}
