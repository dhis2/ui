import React, { Component, createRef } from 'react'
import { createPortal } from 'react-dom'
import propTypes from '@dhis2/prop-types'
import { resolve } from 'styled-jsx/css'

import { Popper } from './Popper.js'
import { colors, layers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

const TOOLTIP_OFFSET = 4

const popperStyle = resolve`
    z-index: ${layers.applicationTop};
    pointer-events: none;
`

const offsetModifier = {
    name: 'offset',
    options: {
        offset: [0, TOOLTIP_OFFSET],
    },
}

const OPEN_DELAY = 200
const CLOSE_DELAY = 400

/**
 * @module
 * @param {Tooltip.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Tooltip } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/tooltip.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/tooltips--default-fluid|Storybook}
 */
class Tooltip extends Component {
    state = { open: false }
    ref = createRef()
    openTimeout = null
    closeTimeout = null

    componentWillUnmount() {
        clearTimeout(this.openTimeout)
        clearTimeout(this.closeTimeout)
    }

    onMouseOver = () => {
        clearTimeout(this.closeTimeout)

        this.openTimeout = setTimeout(() => {
            this.setState({ open: true })
        }, OPEN_DELAY)
    }

    onMouseOut = () => {
        clearTimeout(this.openTimeout)

        this.closeTimeout = setTimeout(() => {
            this.setState({ open: false })
        }, CLOSE_DELAY)
    }

    render() {
        const {
            children,
            className,
            component: Component,
            content,
            dataTest,
            maxWidth,
            placement,
        } = this.props
        const { open } = this.state

        return (
            <>
                <Component
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    ref={this.ref}
                    data-test={`${dataTest}-reference`}
                >
                    {children}
                </Component>

                {open &&
                    createPortal(
                        <Popper
                            className={popperStyle.className}
                            placement={placement}
                            reference={this.ref}
                            modifiers={[offsetModifier]}
                        >
                            <div
                                className={className}
                                data-test={`${dataTest}-content`}
                            >
                                {content}
                            </div>
                        </Popper>,
                        document.body
                    )}
                {popperStyle.styles}
                <style jsx>{`
                    div {
                        max-width: ${maxWidth}px;
                    }
                    div {
                        padding: 6px 8px;
                        background-color: ${colors.grey800};
                        border-radius: 3px;
                        color: ${colors.white};
                        font-size: 12px;
                        line-height: 16px;
                    }
                `}</style>
            </>
        )
    }
}

Tooltip.defaultProps = {
    dataTest: 'dhis2-uicore-tooltip',
    component: 'span',
    maxWidth: 300,
    placement: 'top',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string|function} [component] Use a custom component to wrap the Tooltip children or pass a string (i.e. 'p') to use a custom built-in component
 * @example
 * const Content = React.forwardRef(
 *     ({ children, onMouseOver, onMouseOut, dataTest }, ref) => (
 *         <em
 *             style={{ display: 'inline-block', color: 'red' }}
 *             ref={ref}
 *             onMouseOver={onMouseOver}
 *             onMouseOut={onMouseOut}
 *             dataTest={`${dataTest}-reference`}
 *         >
 *             {children}
 *         </em>
 *     )
 * )
 * Content.displayName = 'Content'
 * Content.propTypes = {
 *     children: propTypes.node,
 *     dataTest: propTypes.string,
 *     onMouseOut: propTypes.func,
 *     onMouseOver: propTypes.func,
 * }
 * @prop {Node} [content]
 * @prop {string} [dataTest]
 * @prop {number} [maxWidth]
 * @prop {('top'|'bottom'|'right'|'left')} [placement=top]
 */
Tooltip.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),
    content: propTypes.node,
    dataTest: propTypes.string,
    maxWidth: propTypes.number,
    placement: propTypes.oneOf(['top', 'right', 'bottom', 'left']),
}

export { Tooltip, TOOLTIP_OFFSET }
