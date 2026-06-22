import {
    autoUpdate as floatingAutoUpdate,
    useFloating,
} from '@floating-ui/react-dom'
import { useMemo } from 'react'
import { getReferenceElement } from './get-reference-element.js'
import { getAutoPlacementMiddleware, getBaseMiddleware } from './middleware.js'

const flipPlacement = (placement) => {
    if (placement.startsWith('right')) {
        return placement.replace('right', 'left')
    }
    if (placement.startsWith('left')) {
        return placement.replace('left', 'right')
    }
    return placement
}

const STATIC_ARRAY = []

export const usePopper = ({
    reference,
    placement = 'bottom',
    strategy = 'absolute',
    middleware = STATIC_ARRAY,
} = {}) => {
    const referenceElement = getReferenceElement(reference)
    const isAutoPlacement = placement.startsWith('auto')

    const adjustedPlacement = useMemo(
        () =>
            document.documentElement.dir === 'rtl'
                ? flipPlacement(placement)
                : placement,
        [placement]
    )

    const combinedMiddleware = useMemo(
        () => [
            ...(isAutoPlacement
                ? getAutoPlacementMiddleware(adjustedPlacement)
                : getBaseMiddleware()),
            ...middleware,
        ],
        [isAutoPlacement, adjustedPlacement, middleware]
    )

    return useFloating({
        elements: { reference: referenceElement },
        // FUI doesn't accept 'auto'/'auto-start'/'auto-end' as a placement;
        // pass a concrete value and let autoPlacement middleware override.
        placement: isAutoPlacement ? 'bottom' : adjustedPlacement,
        strategy,
        middleware: combinedMiddleware,
        whileElementsMounted: floatingAutoUpdate,
    })
}
