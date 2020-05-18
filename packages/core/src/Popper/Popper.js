import React, { useState, useMemo } from 'react'
import propTypes from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import { usePopper } from 'react-popper'

import { deduplicateModifiers } from './modifiers.js'

/**
 * @module
 * @param {Popper.PropTypes} props
 * @returns {React.Component}
 * @description A React wrapper around popper.js.
 *
 * @example import { Popper } from '@dhis2/ui-core'
 *
 * @see Live demo: {@link /demo/?path=/story/popper--default|Storybook}
 * @see Popper js: {@link https://popper.js.org/docs/v2/|Documentation}
 */

const Popper = ({
    children,
    className,
    dataTest,
    modifiers,
    observePopperResize,
    observeReferenceResize,
    onFirstUpdate,
    placement,
    reference,
    strategy,
}) => {
    const [popperElement, setPopperElement] = useState(null)

    const deduplicatedModifiers = useMemo(
        () =>
            deduplicateModifiers(modifiers, {
                observePopperResize,
                observeReferenceResize,
            }),
        [modifiers, observePopperResize, observeReferenceResize]
    )

    const { styles, attributes } = usePopper(reference.current, popperElement, {
        strategy,
        onFirstUpdate,
        placement,
        modifiers: deduplicatedModifiers,
    })

    return (
        <div
            className={className}
            data-test={dataTest}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
        >
            {children}
        </div>
    )
}

Popper.defaultProps = {
    dataTest: 'dhis2-uicore-popper',
    modifiers: [],
}

/**
 * @typedef Modifier
 * @type {Object}
 * @property {string} name
 * @property {Object} options
 */

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Node} children
 * @prop {React.Ref} reference A React ref that refers to the element the Popover should position against
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-popper]
 * @prop {Array.<Modifier>} [modifiers=[]] A property of the `createPopper` options, {@link https://popper.js.org/docs/v2/constructors/|see constructor section of popper.js docs}
 * @prop {Boolean} observePopperResize Makes the popper update position when the popper content changes size
 * @prop {Boolean} observeReferenceResize Makes the popper update position when the reference element changes size
 * @prop {('absolute'|'fixed')} [strategy=absolute] A property of the `createPopper` options, {@link https://popper.js.org/docs/v2/constructors/|see constructor section of popper.js docs}
 * @prop {Function} [onFirstUpdate] A property of the `createPopper` options, {@link https://popper.js.org/docs/v2/constructors/|see constructor section of popper.js docs}
 * @prop {('auto'|'auto-start'|'auto-end'|'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'right'|'right-start'|'right-end'|'left'|'left-start'|'left-end')} [placement=top] A property of the `createPopper` options, {@link https://popper.js.org/docs/v2/constructors/|see constructor section of popper.js docs}
 */
// Prop names follow the names here: https://popper.js.org/docs/v2/constructors/
Popper.propTypes = {
    children: propTypes.node.isRequired,
    reference: sharedPropTypes.elementRefPropType.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
    modifiers: propTypes.arrayOf(
        propTypes.shape({
            name: propTypes.string,
            options: propTypes.object,
        })
    ),
    observePopperResize: propTypes.bool,
    observeReferenceResize: propTypes.bool,
    placement: sharedPropTypes.referencePlacementPropType,
    strategy: propTypes.oneOf(['absolute', 'fixed']), // defaults to 'absolute'
    onFirstUpdate: propTypes.func,
}

export { Popper }
