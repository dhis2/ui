import {
    Middleware,
    Placement,
    UseFloatingReturn,
    VirtualElement,
} from '@floating-ui/react-dom'
import * as React from 'react'

type PopperReference = VirtualElement | Element
type ReferenceElement =
    | PopperReference
    | React.RefObject<PopperReference | null>

export interface PopperProps {
    /**
     * Content inside the Popper
     */
    children: React.ReactNode
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

export interface UsePopperOptions {
    reference?: ReferenceElement
    placement?: Placement
    strategy?: 'absolute' | 'fixed'
    middleware?: Middleware[]
}

/**
 * Hook wrapping Floating UI's `useFloating` with the same defaults
 * the `<Popper>` component uses: base middleware (flip + shift with
 * dhis2 defaults), RTL-aware placement, and always-on autoUpdate.
 *
 * Use this directly when you need to compose your own DOM structure
 * or react to middlewareData inline.
 *
 * ```js
 * const { refs, floatingStyles, middlewareData } = usePopper({
 *     reference,
 *     placement: 'top',
 *     middleware: [offset(8), hide()],
 * })
 * ```
 */
export function usePopper(options?: UsePopperOptions): UseFloatingReturn

/**
 * Returns the base Floating UI middleware (flip + shift) with the
 * defaults used by `<Popper>`: `document.body` boundary, `document`
 * rootBoundary, `initialPlacement` flip fallback and cross-axis shift.
 *
 * Already applied automatically by `usePopper` and `<Popper>`. Export
 * is for consumers calling Floating UI's `useFloating` directly who
 * want to match Popper's positioning defaults without going through
 * our hook.
 */
export function getBaseMiddleware(): Middleware[]
