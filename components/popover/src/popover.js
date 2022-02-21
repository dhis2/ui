import { getReferenceElement, usePopper } from '@dhis2-ui/popper'
import { colors, elevations, sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useState, useMemo } from 'react'
import { Arrow } from './arrow.js'
import { combineModifiers } from './modifiers.js'

const Popover = ({
    children,
    reference,
    arrow,
    className,
    dataTest,
    elevation,
    maxWidth,
    observePopperResize,
    observeReferenceResize,
    placement,
}) => {
    const referenceElement = getReferenceElement(reference)
    const [popperElement, setPopperElement] = useState(null)
    const [arrowElement, setArrowElement] = useState(null)
    const modifiers = useMemo(
        () =>
            combineModifiers(arrow, arrowElement, {
                observePopperResize,
                observeReferenceResize,
            }),
        [arrow, arrowElement, observePopperResize, observeReferenceResize]
    )
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement,
        modifiers,
    })

    return (
        <div
            data-test={dataTest}
            className={className}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
        >
            {children}
            {arrow && (
                <Arrow
                    hidden={
                        attributes.arrow &&
                        attributes.arrow['data-arrow-hidden']
                    }
                    popperPlacement={
                        attributes.popper &&
                        attributes.popper['data-popper-placement']
                    }
                    ref={setArrowElement}
                    styles={styles.arrow}
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
    )
}

Popover.defaultProps = {
    arrow: true,
    dataTest: 'dhis2-uicore-popover',
    elevation: elevations.e200,
    maxWidth: 360,
    placement: 'top',
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
    observePopperResize: PropTypes.bool,
    observeReferenceResize: PropTypes.bool,
    placement: sharedPropTypes.popperPlacementPropType,
    /** A React ref that refers to the element the Popover should position against */
    reference: sharedPropTypes.popperReferencePropType,
}

export { Popover }
