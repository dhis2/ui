import {
    autoUpdate as floatingAutoUpdate,
    useFloating,
} from '@floating-ui/react-dom'
import { useMemo } from 'react'
import { getReferenceElement } from './get-reference-element.js'
import { getBaseMiddleware } from './middleware.js'

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

    const adjustedPlacement = useMemo(
        () =>
            document.documentElement.dir === 'rtl'
                ? flipPlacement(placement)
                : placement,
        [placement]
    )

    const combinedMiddleware = useMemo(
        () => [...getBaseMiddleware(), ...middleware],
        [middleware]
    )

    return useFloating({
        elements: { reference: referenceElement },
        placement: adjustedPlacement,
        strategy,
        middleware: combinedMiddleware,
        whileElementsMounted: floatingAutoUpdate,
    })
}
