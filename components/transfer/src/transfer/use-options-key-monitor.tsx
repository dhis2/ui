import { useEffect, useRef } from 'react'
import { INTERSECTION_DETECTOR_HEIGHT } from '../end-intersection-detector.tsx'

const isEndIntersectionDetectorWithinScrollBox = (
    scrollBoxRef: React.RefObject<HTMLElement>,
    listRef: React.RefObject<HTMLElement>
): boolean => {
    if (!scrollBoxRef.current || !listRef.current) {
        return false
    }
    const scrollBoxRect = scrollBoxRef.current.getBoundingClientRect()
    const listRect = listRef.current.getBoundingClientRect()
    return listRect.bottom - scrollBoxRect.bottom < INTERSECTION_DETECTOR_HEIGHT
}

interface UseOptionsKeyMonitorArgs {
    scrollBoxRef: React.RefObject<HTMLElement>
    listRef: React.RefObject<HTMLElement>
    allOptionsKey: string
    onEndReached?: () => void
}

export const useOptionsKeyMonitor = ({
    scrollBoxRef,
    listRef,
    allOptionsKey,
    onEndReached,
}: UseOptionsKeyMonitorArgs): void => {
    const onEndReachedRef = useRef(onEndReached)
    const prevAllOptionsKey = useRef(allOptionsKey)
    onEndReachedRef.current = onEndReached

    useEffect(() => {
        if (
            onEndReachedRef.current &&
            prevAllOptionsKey.current !== allOptionsKey &&
            isEndIntersectionDetectorWithinScrollBox(scrollBoxRef, listRef)
        ) {
            onEndReachedRef.current()
        }
        prevAllOptionsKey.current = allOptionsKey
    }, [scrollBoxRef, listRef, allOptionsKey])
}
