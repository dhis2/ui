import React from 'react'
import propTypes from 'prop-types'

import { colors, elevations, sharedPropTypes } from '@dhis2/ui-constants'

import { Popper } from '../Popper/Popper.js'
import { Layer } from '../Layer/Layer.js'

import { Arrow } from './Arrow.js'
import { arrow, offset, hideArrowWhenDisplaced } from './modifiers.js'

const arrowModifiers = [arrow, offset, hideArrowWhenDisplaced]
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
    placement,
    onClickOutside,
}) => (
    <Layer onClick={onClickOutside} transparent>
        <Popper
            dataTest={`${dataTest}-popper`}
            placement={placement}
            reference={reference}
            modifiers={arrow ? arrowModifiers : []}
            className={className}
        >
            <div>
                {children}
                {arrow && <Arrow />}
                <style jsx>{`
                    div {
                        max-width: ${maxWidth}px;
                        box-shadow: ${elevation};
                        background-color: ${colors.white};
                        border-radius: 4px;
                    }
                `}</style>
            </div>
        </Popper>
    </Layer>
)

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
    reference: sharedPropTypes.elementRefPropType.isRequired,
    arrow: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    elevation: propTypes.string,
    maxWidth: propTypes.number,
    placement: sharedPropTypes.referencePlacementPropType,
    onClickOutside: propTypes.func,
}

export { Popover }
