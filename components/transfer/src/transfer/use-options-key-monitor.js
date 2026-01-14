import { useEffect, useRef } from 'react'
import { INTERSECTION_DETECTOR_HEIGHT } from '../end-intersection-detector.js'

const isEndIntersectionDetectorWithinScrollBox = (scrollBoxRef, listRef) => {
    if (!scrollBoxRef.current || !listRef.current) {
        return false
    }
    const scrollBoxRect = scrollBoxRef.current.getBoundingClientRect()
    const listRect = listRef.current.getBoundingClientRect()
    return listRect.bottom - scrollBoxRect.bottom < INTERSECTION_DETECTOR_HEIGHT
}

export const useOptionsKeyMonitor = ({
    scrollBoxRef,
    listRef,
    allOptionsKey,
    onEndReached,
}) => {
    /* Store in ref so this works even if a consumer does not pass a stable
     * function reference */
    const onEndReachRef = useRef(onEndReached)
    const prevAllOptionsKey = useRef(allOptionsKey)

    useEffect(() => {
        /* When new options are loaded and the list end is (still) in
         * view we need to call onEndReached, because the end of the list
         * has indeed been reached but the interception detector will not pick
         * up on this */
        if (
            onEndReachRef.current &&
            prevAllOptionsKey.current !== allOptionsKey &&
            isEndIntersectionDetectorWithinScrollBox(scrollBoxRef, listRef)
        ) {
            onEndReachRef.current()
        }
        prevAllOptionsKey.current = allOptionsKey
        /* This effect will only run on mount and when allOptionsKey
         * changes because scrollBoxRef, listRef are stable references */
    }, [scrollBoxRef, listRef, allOptionsKey])
}
