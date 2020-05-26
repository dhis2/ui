import React, { useState, useMemo } from 'react'
import propTypes from 'prop-types'
import { usePopper } from 'react-popper'
import { colors, elevations, sharedPropTypes } from '@dhis2/ui-constants'
import { Layer } from '../Layer/Layer.js'
import { Arrow } from './Arrow.js'
import { combineModifiers } from './modifiers.js'
import { getReferenceElement } from '../Popper/getReferenceElement.js'

/**
 * @module
 * @param {Popover.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Popover } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/popover.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/components-core-popover--default|Storybook}
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
 * @prop {React.Ref} reference A React ref that refers to the element the Popover should position against
 * @prop {Node} children
 * @prop {boolean} [arrow=true] Show or hide the arrow
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-popover]
 * @prop {number} [maxWidth=360]
 * @prop {('auto'|'auto-start'|'auto-end'|'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'right'|'right-start'|'right-end'|'left'|'left-start'|'left-end')} [placement=top]
 * @prop {function} [onClickOutside]
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
    placement: sharedPropTypes.popperPlacementPropType,
    reference: sharedPropTypes.popperReferencePropType,
    onBackdropClick: propTypes.func,
}

export { Popover }
