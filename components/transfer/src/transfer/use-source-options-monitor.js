import { useEffect, useRef } from 'react'
import { useIsSourceOptionsListEndVisible } from '../transfer-provider.js'

export const useOptionsListMonitor = (optionsLength, onEndReached) => {
    const isSourceOptionsListEndVisible = useIsSourceOptionsListEndVisible()
    /* Store in ref so this works even if a consumer does not pass a stable
     * function reference */
    const onEndReachRef = useRef(onEndReached)
    const prevOptionsLength = useRef(optionsLength)

    useEffect(() => {
        /* When new options are loaded and the list end is (still) in
         * view we need to call onEndReached, because the end of the list
         * has indeed been reached but the interception detector will not pick
         * up on this */
        if (
            onEndReachRef.current &&
            prevOptionsLength.current < optionsLength &&
            isSourceOptionsListEndVisible()
        ) {
            onEndReachRef.current()
        }
        prevOptionsLength.current = optionsLength
    }, [isSourceOptionsListEndVisible, optionsLength])
}
