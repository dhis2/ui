import * as React from 'react'

type OnMouseEvent = React.MouseEventHandler<HTMLSpanElement>

type TooltipRenderProps = {
    onMouseOver: OnMouseEvent
    onMouseOut: OnMouseEvent
    ref: React.MutableRefObject<HTMLSpanElement>
}
export type TooltipRenderFunc = ({
    onMouseOver,
    onMouseOut,
    ref,
}: TooltipRenderProps) => React.ReactNode

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps {
    /**
     * If child is a function, it's called with `{ onMouseOver, onMouseOut, ref }` args to apply to a reference element. If child is a node, it is wrapped in a `span` with the appropriate attributes and handlers.
     */
    children?: React.ReactNode | TooltipRenderFunc
    className?: string
    /**
     * Time (in ms) until tooltip closes after mouse out
     */
    closeDelay?: number
    /**
     * Content to display when the tooltip is open
     */
    content?: React.ReactNode
    dataTest?: string
    /**
     * Max width of the tooltip in px
     */
    maxWidth?: number
    /**
     * Time (in ms) until tooltip open after mouse over
     */
    openDelay?: number
    /**
     * Where to place the tooltip relative to its reference
     */
    placement?: TooltipPlacement
}

export const Tooltip: React.FC<TooltipProps>
