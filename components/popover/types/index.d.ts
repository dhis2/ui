import * as React from 'react'
import { VirtualElement, Options as PopperOptions } from '@popperjs/core'

type PopperReference = VirtualElement | Element
type ReferenceElement = PopperReference | React.RefObject<PopperReference>

export interface PopoverProps {
    children: React.ReactNode
    /**
     * Show or hide the arrow
     */
    arrow?: boolean
    className?: string
    dataTest?: string
    /**
     * Box-shadow to create appearance of elevation.  Use `elevations` constants from the UI library.
     */
    elevation?: string
    maxWidth?: number
    observePopperResize?: boolean
    observeReferenceResize?: boolean
    placement?: PopperOptions['placement']
    /**
     * A React ref that refers to the element the Popover should position against
     */
    reference?: ReferenceElement
    onClickOutside?: (arg0: {}, event: React.SyntheticEvent) => void
}

export const Popover: React.FC<PopoverProps>
