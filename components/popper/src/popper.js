import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { forwardRef, useEffect, useState } from 'react'
import { usePopper } from './use-popper.js'

const Popper = forwardRef(function Popper(
    {
        children,
        className,
        dataTest = 'dhis2-uicore-popper',
        middleware,
        placement,
        reference,
        strategy,
    },
    forwardedRef
) {
    const { refs, floatingStyles } = usePopper({
        reference,
        placement,
        middleware,
        strategy,
    })

    const [floatingElement, setFloatingElement] = useState(null)

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
