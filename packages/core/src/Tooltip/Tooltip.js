import { colors, layers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { resolve } from 'styled-jsx/css'
import { useLayerContext } from '../Layer/Layer.js'
import { Popper } from '../Popper/Popper.js'

const TOOLTIP_OFFSET = 4

const popperStyle = resolve`
    z-index: ${layers.applicationTop};
    pointer-events: none;

    // Hide popper when reference component is obscured (https://popper.js.org/docs/v2/modifiers/hide/)
    div[data-popper-reference-hidden="true"] {
        visibility: hidden;
    }
`

const offsetModifier = {
    name: 'offset',
    options: {
        offset: [0, TOOLTIP_OFFSET],
    },
}

/**
 * For some reason the intended effects of the 'hide' modifier work with or
 * without adding it to the popper... but it may be safe to include it anyway
 */
const hideModifier = { name: 'hide' }

const flipModifier = {
    name: 'flip',
    options: { altBoundary: true },
}

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
    closeDelay,
    content,
    dataTest,
    maxWidth,
    openDelay,
    placement,
}) => {
    const [open, setOpen] = useState(false)
    const popperReference = useRef()
    const openTimerRef = useRef(null)
    const closeTimerRef = useRef(null)
    const { node: portalRootNode } = useLayerContext()

    const onMouseOver = () => {
        clearTimeout(closeTimerRef.current)

        openTimerRef.current = setTimeout(() => {
            setOpen(true)
        }, openDelay)
    }

    const onMouseOut = () => {
        clearTimeout(openTimerRef.current)

        closeTimerRef.current = setTimeout(() => {
            setOpen(false)
        }, closeDelay)
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
                        modifiers={[offsetModifier, flipModifier, hideModifier]}
                    >
                        <div
                            className={className}
                            data-test={`${dataTest}-content`}
                        >
                            {content}
                        </div>
                    </Popper>,
                    portalRootNode
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
    closeDelay: 400,
    dataTest: 'dhis2-uicore-tooltip',
    maxWidth: 300,
    openDelay: 200,
    placement: 'top',
    tag: 'span',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node|function} [children]
 * @prop {string} [className]
 * @prop {number} [closeDelay=400] Time (in ms) until tooltip closes after mouse out
 * @prop {Node} [content]
 * @prop {string} [dataTest=dhis2-uicore-tooltip]
 * @prop {number} [maxWidth=300]
 * @prop {number} [openDelay=200] Time (in ms) until tooltip opens after mouse over
 * @prop {('top'|'bottom'|'right'|'left')} [placement=top]
 */
Tooltip.propTypes = {
    /** If child is a function, it's called with `{ onMouseOver, onMouseOut, ref }` args to apply to a reference element. If child is a node, it is wrapped in a `span` with the appropriate attributes and handlers. */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    className: PropTypes.string,
    /** Time (in ms) until tooltip closes after mouse out */
    closeDelay: PropTypes.number,
    /** Content to display when the tooltip is open */
    content: PropTypes.node,
    dataTest: PropTypes.string,
    /** Max width of the tooltip in px */
    maxWidth: PropTypes.number,
    /** Time (in ms) until tooltip open after mouse over */
    openDelay: PropTypes.number,
    /** Where to place the tooltip relative to its reference */
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
}

export { Tooltip, TOOLTIP_OFFSET }
