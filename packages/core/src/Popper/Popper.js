import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useState, useMemo } from 'react'
import { usePopper } from 'react-popper'
import { getReferenceElement } from './getReferenceElement.js'
import { deduplicateModifiers } from './modifiers.js'

/**
 * @module
 * @param {Popper.PropTypes} props
 * @returns {React.Component}
 * @description A React wrapper around popper.js.
 *
 * @example import { Popper } from '@dhis2/ui-core'
 *
 * @see Live demo: {@link /demo/?path=/story/components-core-popper--top|Storybook}
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
    const referenceElement = getReferenceElement(reference)
    const [popperElement, setPopperElement] = useState(null)

    const deduplicatedModifiers = useMemo(
        () =>
            deduplicateModifiers(modifiers, {
                observePopperResize,
                observeReferenceResize,
            }),
        [modifiers, observePopperResize, observeReferenceResize]
    )

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
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
    placement: 'auto',
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
 * @prop {React.Ref|Element|VirtualElement} reference A React ref, DOM node, or {@link https://popper.js.org/docs/v2/virtual-elements/|popper.js virtual element} for the Popper to position itself against.
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
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    modifiers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            options: PropTypes.object,
        })
    ),
    observePopperResize: PropTypes.bool,
    observeReferenceResize: PropTypes.bool,
    placement: sharedPropTypes.popperPlacementPropType,
    reference: sharedPropTypes.popperReferencePropType,
    strategy: PropTypes.oneOf(['absolute', 'fixed']), // defaults to 'absolute'
    onFirstUpdate: PropTypes.func,
}

export { Popper }
