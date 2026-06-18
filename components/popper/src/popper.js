import { sharedPropTypes } from '@dhis2/ui-constants'
import { autoUpdate, useFloating } from '@floating-ui/react-dom'
import PropTypes from 'prop-types'
import React, { forwardRef, useEffect, useMemo, useState } from 'react'
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

const staticArray = []

const Popper = forwardRef(function Popper(
    {
        children,
        className,
        dataTest = 'dhis2-uicore-popper',
        middleware = staticArray,
        placement = 'bottom',
        reference,
        strategy = 'absolute',
    },
    forwardedRef
) {
    const referenceElement = getReferenceElement(reference)
    const [floatingElement, setFloatingElement] = useState(null)

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

    const { refs, floatingStyles } = useFloating({
        elements: { reference: referenceElement },
        placement: adjustedPlacement,
        strategy,
        middleware: combinedMiddleware,
        whileElementsMounted: autoUpdate,
    })

    useEffect(() => {
        floatingElement?.firstElementChild?.focus()
    }, [floatingElement])

    const setRef = (node) => {
        setFloatingElement(node)
        refs.setFloating(node)
        if (typeof forwardedRef === 'function') {
            forwardedRef(node)
        } else if (forwardedRef) {
            forwardedRef.current = node
        }
    }

    return (
        <div
            className={className}
            data-test={dataTest}
            ref={setRef}
            style={floatingStyles}
            tabIndex={0}
        >
            {children}
        </div>
    )
})

Popper.propTypes = {
    /** Content inside the Popper */
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Floating UI middleware array. See https://floating-ui.com/docs/middleware */
    middleware: PropTypes.arrayOf(PropTypes.object),
    /** Where to place the popper relative to its reference */
    placement: sharedPropTypes.popperPlacementPropType,
    /** A React ref, DOM node, or virtual element for the popper to position itself against */
    reference: sharedPropTypes.popperReferencePropType,
    /** Positioning strategy. See https://floating-ui.com/docs/usefloating#strategy */
    strategy: PropTypes.oneOf(['absolute', 'fixed']),
}

export { Popper }
