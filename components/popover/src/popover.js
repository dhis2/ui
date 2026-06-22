import { colors, elevations, sharedPropTypes } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { getReferenceElement } from '@dhis2-ui/popper'
import { autoUpdate, useFloating } from '@floating-ui/react-dom'
import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'
import { Arrow } from './arrow.js'
import { combineMiddleware } from './middleware.js'

const Popover = ({
    children,
    reference,
    arrow = true,
    className,
    dataTest = 'dhis2-uicore-popover',
    elevation = elevations.popover,
    maxWidth = 360,
    placement = 'top',
    onClickOutside,
}) => {
    const referenceElement = getReferenceElement(reference)
    const [arrowElement, setArrowElement] = useState(null)

    const middleware = useMemo(
        () => combineMiddleware(arrow, arrowElement),
        [arrow, arrowElement]
    )

    const {
        refs,
        floatingStyles,
        placement: actualPlacement,
        middlewareData,
    } = useFloating({
        elements: { reference: referenceElement },
        placement,
        middleware,
        whileElementsMounted: autoUpdate,
    })

    const arrowStyles = useMemo(() => {
        const arrowData = middlewareData.arrow
        if (!arrowData) {
            return undefined
        }
        return {
            position: 'absolute',
            ...(arrowData.x != null && { left: `${arrowData.x}px` }),
            ...(arrowData.y != null && { top: `${arrowData.y}px` }),
        }
    }, [middlewareData.arrow])

    const arrowHidden = Boolean(middlewareData.hideArrowWhenDisplaced?.hidden)

    return (
        <Layer onBackdropClick={onClickOutside}>
            <div
                data-test={dataTest}
                className={className}
                ref={refs.setFloating}
                style={floatingStyles}
            >
                {children}
                {arrow && (
                    <Arrow
                        hidden={arrowHidden}
                        popperPlacement={actualPlacement}
                        ref={setArrowElement}
                        styles={arrowStyles}
                    />
                )}
                <style jsx>{`
                    div {
                        max-width: ${maxWidth}px;
                        box-shadow: ${elevation};
                        background-color: ${colors.white};
                        border-radius: 4px;
                    }
                `}</style>
            </div>
        </Layer>
    )
}

Popover.propTypes = {
    children: PropTypes.node.isRequired,
    /** Show or hide the arrow */
    arrow: PropTypes.bool,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Box-shadow to create appearance of elevation.  Use `elevations` constants from the UI library. */
    elevation: PropTypes.string,
    maxWidth: PropTypes.number,
    placement: sharedPropTypes.popperPlacementPropType,
    /** A React ref that refers to the element the Popover should position against */
    reference: sharedPropTypes.popperReferencePropType,
    onClickOutside: PropTypes.func,
}

export { Popover }
