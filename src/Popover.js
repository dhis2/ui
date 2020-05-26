import React, { useState, useMemo } from 'react'
import propTypes from '@dhis2/prop-types'
import { usePopper } from 'react-popper'

import { colors, elevations } from './theme.js'
import { Layer } from './Layer.js'
import { combineModifiers } from './Popover/modifiers.js'
import { Arrow } from './Popover/Arrow.js'
import {
    popperReferencePropType,
    popperPlacementPropType,
} from './common-prop-types.js'
import { getReferenceElement } from './Popper/getReferenceElement.js'

/**
 * @module
 * @param {Popover.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Popover } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/popover.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/popover--default|Storybook}
 */

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
    onBackdropClick,
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
        <Layer onClick={onBackdropClick}>
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
        </Layer>
    )
}

Popover.defaultProps = {
    arrow: true,
    dataTest: 'dhis2-uicore-popover',
    elevation: elevations.e200,
    maxWidth: 360,
    placement: 'top',
}
/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {React.Ref|Element|VirtualElement} reference A React ref, DOM node, or {@link https://popper.js.org/docs/v2/virtual-elements/|popper.js virtual element} for the Popover to position itself against.
 * @prop {Node} children
 * @prop {boolean} [arrow=true] Show or hide the arrow
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-popover]
 * @prop {number} [maxWidth=360]
 * @prop {Boolean} observePopperResize Makes the popper update position when the popper content changes size
 * @prop {Boolean} observeReferenceResize Makes the popper update position when the reference element changes size
 * @prop {('auto'|'auto-start'|'auto-end'|'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'right'|'right-start'|'right-end'|'left'|'left-start'|'left-end')} [placement=top]
 * @prop {function} [onBackdropClick]
 */
Popover.propTypes = {
    children: propTypes.node.isRequired,
    arrow: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    elevation: propTypes.string,
    maxWidth: propTypes.number,
    observePopperResize: propTypes.bool,
    observeReferenceResize: propTypes.bool,
    placement: popperPlacementPropType,
    reference: popperReferencePropType,
    onBackdropClick: propTypes.func,
}

export { Popover }
