import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { resolve } from 'styled-jsx/css'

import propTypes from '@dhis2/prop-types'
import { colors, layers } from '@dhis2/ui-constants'

import { Popper } from '../Popper/Popper.js'

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
const Tooltip = ({
    children,
    className,
    content,
    dataTest,
    maxWidth,
    placement,
}) => {
    const [open, setOpen] = useState(false)
    const popperReference = useRef()
    const openTimerRef = useRef(null)
    const closeTimerRef = useRef(null)

    const onMouseOver = () => {
        clearTimeout(closeTimerRef.current)

        openTimerRef.current = setTimeout(() => {
            setOpen(true)
        }, OPEN_DELAY)
    }

    const onMouseOut = () => {
        clearTimeout(openTimerRef.current)

        closeTimerRef.current = setTimeout(() => {
            setOpen(false)
        }, CLOSE_DELAY)
    }

    return (
        <>
            {typeof children === 'function' ? (
                children({
                    onMouseOver: onMouseOver,
                    onMouseOut: onMouseOut,
                    ref: popperReference,
                })
            ) : (
                <span
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    ref={popperReference}
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
                        reference={popperReference}
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

Tooltip.defaultProps = {
    dataTest: 'dhis2-uicore-tooltip',
    maxWidth: 300,
    placement: 'top',
    tag: 'span',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node|function} [children]
 * @prop {string} [className]
 * @prop {Node} [content]
 * @prop {string} [dataTest=dhis2-uicore-tooltip]
 * @prop {number} [maxWidth=300]
 * @prop {('top'|'bottom'|'right'|'left')} [placement=top]
 */
Tooltip.propTypes = {
    children: propTypes.oneOfType([propTypes.node, propTypes.func]),
    className: propTypes.string,
    content: propTypes.node,
    dataTest: propTypes.string,
    maxWidth: propTypes.number,
    placement: propTypes.oneOf(['top', 'right', 'bottom', 'left']),
}

export { Tooltip, TOOLTIP_OFFSET }
