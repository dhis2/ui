import React, { useState, useMemo } from 'react'
import propTypes from '@dhis2/prop-types'
import { usePopper } from 'react-popper'
import { colors, elevations, sharedPropTypes } from '@dhis2/ui-constants'

import { Layer } from '../Layer/Layer.js'
import { combineModifiers } from './modifiers.js'
import { Arrow } from './Arrow.js'

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
    onClickOutside,
}) => {
    const [popperElement, setPopperElement] = useState(null)
    const [arrowElement, setArrowElement] = useState(null)
    const modifiers = useMemo(
        () =>
            combineModifiers(arrow, arrowElement, {
                observePopperResize,
                observeReferenceResize,
            }),
        [arrow, arrowElement]
    )
    const { styles, attributes } = usePopper(reference.current, popperElement, {
        placement,
        modifiers,
    })

    return (
        <Layer onClick={onClickOutside}>
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
                        attributes={attributes}
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
 * @prop {Boolean} observePopperResize Makes the popper update position when the popper content changes size
 * @prop {Boolean} observeReferenceResize Makes the popper update position when the reference element changes size
 * @prop {('auto'|'auto-start'|'auto-end'|'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'right'|'right-start'|'right-end'|'left'|'left-start'|'left-end')} [placement=top]
 * @prop {function} [onClickOutside]
 */
Popover.propTypes = {
    children: propTypes.node.isRequired,
    reference: sharedPropTypes.elementRefPropType.isRequired,
    arrow: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    elevation: propTypes.string,
    maxWidth: propTypes.number,
    observePopperResize: propTypes.bool,
    observeReferenceResize: propTypes.bool,
    placement: sharedPropTypes.referencePlacementPropType,
    onClickOutside: propTypes.func,
}

export { Popover }
