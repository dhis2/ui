import { colors, layers } from '@dhis2/ui-constants'
import { Popper } from '@dhis2-ui/popper'
import { Portal } from '@dhis2-ui/portal'
import React, { useEffect, useRef, useState } from 'react'
import css from 'styled-jsx/css'

const TOOLTIP_OFFSET = 4

const popperStyle = css.resolve`
    z-index: ${layers.applicationTop};
    // Hide popper when reference component is obscured (https://popper.js.org/docs/v2/modifiers/hide/)
    div[data-popper-reference-hidden='true'] {
        visibility: hidden;
    }
`

interface TooltipModifier {
    name: string
    options?: Record<string, unknown>
}

const offsetModifier: TooltipModifier = {
    name: 'offset',
    options: {
        offset: [0, TOOLTIP_OFFSET],
    },
}

/**
 * For some reason the intended effects of the 'hide' modifier work with or
 * without adding it to the popper... but it may be safe to include it anyway
 */
const hideModifier: TooltipModifier = { name: 'hide' }

const flipModifier: TooltipModifier = {
    name: 'flip',
    options: { altBoundary: true },
}

interface TooltipRenderProps {
    onMouseOver: () => void
    onMouseOut: () => void
    onFocus: () => void
    onBlur: () => void
    ref: React.RefObject<Element | null>
}

export interface TooltipProps {
    /** If child is a function, it's called with `{ onMouseOver, onMouseOut, ref }` args to apply to a reference element. If child is a node, it is wrapped in a `span` with the appropriate attributes and handlers. */
    children?:
        | React.ReactNode
        | ((props: TooltipRenderProps) => React.ReactNode)
    className?: string
    /** Time (in ms) until tooltip closes after mouse out */
    closeDelay?: number
    /** Content to display when the tooltip is open */
    content?: React.ReactNode
    dataTest?: string
    /** Max width of the tooltip in px */
    maxWidth?: number
    /** Time (in ms) until tooltip open after mouse over */
    openDelay?: number
    /** Where to place the tooltip relative to its reference */
    placement?: 'top' | 'right' | 'bottom' | 'left'
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
}: TooltipProps) => {
    const [open, setOpen] = useState(false)
    const popperReference = useRef<Element | null>(null)
    const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const onMouseOver = () => {
        clearTimeout(closeTimerRef.current as ReturnType<typeof setTimeout>)

        openTimerRef.current = setTimeout(() => {
            setOpen(true)
        }, openDelay)
    }

    const onMouseOut = () => {
        clearTimeout(openTimerRef.current as ReturnType<typeof setTimeout>)

        closeTimerRef.current = setTimeout(() => {
            setOpen(false)
        }, closeDelay)
    }

    const onFocus = () => {
        clearTimeout(closeTimerRef.current as ReturnType<typeof setTimeout>)

        openTimerRef.current = setTimeout(() => {
            setOpen(true)
        }, openDelay)
    }

    const onBlur = () => {
        clearTimeout(openTimerRef.current as ReturnType<typeof setTimeout>)

        closeTimerRef.current = setTimeout(() => {
            setOpen(false)
        }, closeDelay)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeTimerRef.current = setTimeout(() => {
                setOpen(false)
            }, closeDelay)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            clearTimeout(openTimerRef.current as ReturnType<typeof setTimeout>)
            clearTimeout(closeTimerRef.current as ReturnType<typeof setTimeout>)
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
                    ref={popperReference as React.RefObject<HTMLSpanElement>}
                    tabIndex={0}
                    aria-describedby={open ? 'tooltipContenDhis2Ui' : ''}
                    data-test={`${dataTest}-reference`}
                >
                    {children}
                </span>
            )}
            {open && (
                <Portal>
                    <Popper
                        className={popperStyle.className}
                        placement={placement}
                        reference={popperReference}
                        modifiers={
                            [
                                offsetModifier,
                                flipModifier,
                                hideModifier,
                            ] as React.ComponentProps<
                                typeof Popper
                            >['modifiers']
                        }
                    >
                        <div
                            className={className}
                            id="tooltipContenDhis2Ui"
                            onMouseOver={onMouseOver}
                            onMouseOut={onMouseOut}
                            data-test={`${dataTest}-content`}
                            role="tooltip"
                        >
                            {content}
                        </div>
                    </Popper>
                </Portal>
            )}
            {popperStyle.styles}
            <style jsx>{`
                div {
                    max-width: ${maxWidth}px;
                    word-break: normal;
                    overflow-wrap: break-word;
                }
                div {
                    padding: 4px 6px;
                    background-color: ${colors.grey900};
                    border-radius: 3px;
                    color: ${colors.white};
                    font-size: 13px;
                    line-height: 17px;
                }
            `}</style>
        </>
    )
}

export { Tooltip, TOOLTIP_OFFSET }
