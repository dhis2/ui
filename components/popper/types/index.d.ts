import * as React from 'react'
import { StrictModifier } from 'react-popper'
import { VirtualElement, Options as PopperOptions } from '@popperjs/core'

type PopperReference =
    | Element
    | { getBoundingClientRect: () => DOMRect }
    | React.RefObject<Element>
    | null
    | undefined
type ReferenceElement = PopperReference

export interface PopperModifier {
    name: string
    options?: Record<string, unknown>
    enabled?: boolean
    phase?: string
    fn?: (...args: unknown[]) => void
    effect?: (args: {
        state: { elements: Record<string, Element> }
        options: Record<string, boolean | undefined>
        instance: { update: () => void }
    }) => (() => void) | void
}

export interface PopperProps {
    /**
     * Content inside the Popper
     */
    children: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)
     */
    modifiers?: StrictModifier[]
    /**
     * Makes the Popper update position when the **Popper content** changes size
     */
    observePopperResize?: boolean
    /**
     * Makes the Popper update position when the **reference element** changes size
     */
    observeReferenceResize?: boolean
    /**
     * A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)
     */
    placement?: PopperOptions['placement']
    /**
     * A React ref, DOM node, or [virtual element](https://popper.js.org/docs/v2/virtual-elements/) for the popper to position itself against
     */
    reference?: ReferenceElement
    /**
     * A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)
     */
    strategy?: PopperOptions['strategy']
    onFirstUpdate?: PopperOptions['onFirstUpdate']
}

export const Popper: React.FC<PopperProps>

export type { PopperReference }

export function getReferenceElement(
    reference: PopperReference
): Element | { getBoundingClientRect: () => DOMRect } | null

export function getBaseModifiers(options: {
    observePopperResize?: boolean
    observeReferenceResize?: boolean
}): PopperModifier[]

export { usePopper } from 'react-popper'
