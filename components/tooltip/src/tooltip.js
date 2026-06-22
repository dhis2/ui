import { colors, layers } from '@dhis2/ui-constants'
import { usePopper } from '@dhis2-ui/popper'
import { Portal } from '@dhis2-ui/portal'
import { flip, hide, offset } from '@floating-ui/react-dom'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { resolve } from 'styled-jsx/css'

const TOOLTIP_OFFSET = 4

const popperStyle = resolve`
    z-index: ${layers.applicationTop};
`

const tooltipMiddleware = [
    offset(TOOLTIP_OFFSET),
    flip({ altBoundary: true }),
    hide(),
]

const TooltipContent = ({
    className,
    content,
    dataTest,
    maxWidth,
    onMouseOut,
    onMouseOver,
    placement,
    reference,
}) => {
    const { refs, floatingStyles, middlewareData } = usePopper({
        reference,
        placement,
        middleware: tooltipMiddleware,
    })

    return (
        <Portal>
            <div
                ref={refs.setFloating}
                className={popperStyle.className}
                data-test="dhis2-uicore-popper"
                style={{
                    ...floatingStyles,
                    visibility: middlewareData.hide?.referenceHidden
                        ? 'hidden'
                        : undefined,
                }}
            >
                <div
                    className={cx('tooltip-body', className)}
                    id="tooltipContenDhis2Ui"
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    data-test={`${dataTest}-content`}
                    role="tooltip"
                >
                    {content}
                </div>
            </div>
            {popperStyle.styles}
            <style jsx>{`
                .tooltip-body {
                    max-width: ${maxWidth}px;
                    word-break: normal;
                    overflow-wrap: break-word;
                    padding: 4px 6px;
                    background-color: ${colors.grey900};
                    border-radius: 3px;
                    color: ${colors.white};
                    font-size: 13px;
                    line-height: 17px;
                }
            `}</style>
        </Portal>
    )
}

TooltipContent.propTypes = {
    className: PropTypes.string,
    content: PropTypes.node,
    dataTest: PropTypes.string,
    maxWidth: PropTypes.number,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    reference: PropTypes.object,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
}

const Tooltip = ({
    children,
    className,
    closeDelay = 200,
    content,
    dataTest = 'dhis2-uicore-tooltip',
    maxWidth = 300,
    openDelay = 200,
    placement = 'top',
}) => {
    const [open, setOpen] = useState(false)
    const popperReference = useRef()
    const openTimerRef = useRef(null)
    const closeTimerRef = useRef(null)

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

    const onFocus = () => {
        clearTimeout(closeTimerRef.current)

        openTimerRef.current = setTimeout(() => {
            setOpen(true)
        }, openDelay)
    }

    const onBlur = () => {
        clearTimeout(openTimerRef.current)

        closeTimerRef.current = setTimeout(() => {
            setOpen(false)
        }, closeDelay)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeTimerRef.current = setTimeout(() => {
                setOpen(false)
            }, closeDelay)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            clearTimeout(openTimerRef.current)
            clearTimeout(closeTimerRef.current)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <>
            {typeof children === 'function' ? (
                children({
                    onMouseOver: onMouseOver,
                    onMouseOut: onMouseOut,
                    onFocus: onFocus,
                    onBlur: onBlur,
                    ref: popperReference,
                })
            ) : (
                <span
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    ref={popperReference}
                    tabIndex={0}
                    aria-describedby={open ? 'tooltipContenDhis2Ui' : ''}
                    data-test={`${dataTest}-reference`}
                >
                    {children}
                </span>
            )}
            {open && (
                <TooltipContent
                    className={className}
                    content={content}
                    dataTest={dataTest}
                    maxWidth={maxWidth}
                    onMouseOut={onMouseOut}
                    onMouseOver={onMouseOver}
                    placement={placement}
                    reference={popperReference}
                />
            )}
        </>
    )
}

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
