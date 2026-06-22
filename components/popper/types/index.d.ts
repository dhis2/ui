import {
    Middleware,
    MiddlewareData,
    Placement,
    VirtualElement,
} from '@floating-ui/react-dom'
import * as React from 'react'

type PopperReference = VirtualElement | Element
type ReferenceElement =
    | PopperReference
    | React.RefObject<PopperReference | null>

export interface PopperRenderProps {
    middlewareData: MiddlewareData
    placement: Placement
    isPositioned: boolean
}

export interface PopperProps {
    /**
     * Content inside the Popper. Either a node, or a function called with
     * `{ middlewareData, placement, isPositioned }` returning a node.
     */
    children:
        | React.ReactNode
        | ((props: PopperRenderProps) => React.ReactNode)
    className?: string
    dataTest?: string
    /**
     * Floating UI middleware array. See https://floating-ui.com/docs/middleware
     */
    middleware?: Middleware[]
    /**
     * Where to place the popper relative to its reference
     */
    placement?: Placement
    /**
     * A React ref, DOM node, or virtual element for the popper to position itself against
     */
    reference?: ReferenceElement
    /**
     * Positioning strategy. See https://floating-ui.com/docs/usefloating#strategy
     */
    strategy?: 'absolute' | 'fixed'
}

export const Popper: React.ForwardRefExoticComponent<
    PopperProps & React.RefAttributes<HTMLDivElement>
>
