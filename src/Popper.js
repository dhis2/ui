import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'
import { createPopper } from '@popperjs/core'

import {
    elementRefPropType,
    referencePlacementPropType,
} from './common-prop-types.js'
import * as baseModifiers from './Popper/modifiers.js'

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

class Popper extends Component {
    popperInstance = null
    popperRef = createRef()

    componentDidMount() {
        const { reference, strategy, onFirstUpdate, placement } = this.props

        this.popperInstance = createPopper(
            reference.current,
            this.popperRef.current,
            {
                strategy,
                onFirstUpdate,
                placement,
                modifiers: this.deduplicateModifiers(),
            }
        )
    }

    deduplicateModifiers() {
        const { modifiers } = this.props
        // Deduplicate modifiers from props and baseModifiers,
        // when duplicates are encountered (by name), use the
        // modifier from props so each Popper can be fully custom
        return Object.keys(baseModifiers)
            .map(key => baseModifiers[key])
            .filter(({ name }) => !modifiers.some(m => m.name === name))
            .concat(modifiers)
    }

    componentWillUnmount() {
        this.popperInstance && this.popperInstance.destroy()
        this.popperInstance = null
    }

    render() {
        const { children, dataTest, className } = this.props

        return (
            <div
                className={className}
                data-test={dataTest}
                ref={this.popperRef}
            >
                {children}
            </div>
        )
    }
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
 * @prop {('absolute'|'fixed')} [strategy=absolute] A property of the `createPopper` options, {@link https://popper.js.org/docs/v2/constructors/|see constructor section of popper.js docs}
 * @prop {Function} [onFirstUpdate] A property of the `createPopper` options, {@link https://popper.js.org/docs/v2/constructors/|see constructor section of popper.js docs}
 * @prop {('auto'|'auto-start'|'auto-end'|'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'right'|'right-start'|'right-end'|'left'|'left-start'|'left-end')} [placement=top] A property of the `createPopper` options, {@link https://popper.js.org/docs/v2/constructors/|see constructor section of popper.js docs}
 */
// Prop names follow the names here: https://popper.js.org/docs/v2/constructors/
Popper.propTypes = {
    children: propTypes.node.isRequired,
    reference: elementRefPropType.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
    modifiers: propTypes.arrayOf(
        propTypes.shape({
            name: propTypes.string,
            options: propTypes.object,
        })
    ),
    placement: referencePlacementPropType,
    strategy: propTypes.oneOf(['absolute', 'fixed']), // defaults to 'absolute'
    onFirstUpdate: propTypes.func,
}

export { Popper }
