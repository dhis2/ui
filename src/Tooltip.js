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
            content,
            dataTest,
            maxWidth,
            placement,
        } = this.props
        const { open } = this.state

        return (
            <>
                {typeof children === 'function' ? (
                    children({
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut,
                        ref: this.ref,
                    })
                ) : (
                    <span
                        onMouseOver={this.onMouseOver}
                        onMouseOut={this.onMouseOut}
                        ref={this.ref}
                        data-test={`${dataTest}-reference`}
                    >
                        {children}
                    </span>
                )}

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
    maxWidth: 300,
    placement: 'top',
    tag: 'span',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {Node} [content]
 * @prop {string} [dataTest=dhis2-uicore-tooltip]
 * @prop {number} [maxWidth=300]
 * @prop {('top'|'bottom'|'right'|'left')} [placement=top]
 */
Tooltip.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    content: propTypes.node,
    dataTest: propTypes.string,
    maxWidth: propTypes.number,
    placement: propTypes.oneOf(['top', 'right', 'bottom', 'left']),
}

export { Tooltip, TOOLTIP_OFFSET }
