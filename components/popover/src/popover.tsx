import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import {
    getReferenceElement,
    usePopper,
    PopperReference,
} from '@dhis2-ui/popper'
import type { Modifier } from '@popperjs/core'
import React, { useState, useMemo } from 'react'
import { Arrow } from './arrow.tsx'
import { combineModifiers } from './modifiers.ts'

type Placement =
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end'

export interface PopoverProps {
    /** Content inside the Popover */
    children: React.ReactNode
    /** Show or hide the arrow */
    arrow?: boolean
    className?: string
    dataTest?: string
    /** Box-shadow to create appearance of elevation. Use `elevations` constants from the UI library. */
    elevation?: string
    maxWidth?: number
    observePopperResize?: boolean
    observeReferenceResize?: boolean
    placement?: Placement
    /** A React ref that refers to the element the Popover should position against */
    reference?: PopperReference
    onClickOutside?: () => void
}

const Popover = ({
    children,
    reference,
    arrow = true,
    className,
    dataTest = 'dhis2-uicore-popover',
    elevation = (elevations as Record<string, string>).popover,
    maxWidth = 360,
    observePopperResize,
    observeReferenceResize,
    placement = 'top',
    onClickOutside,
}: PopoverProps) => {
    const referenceElement = getReferenceElement(reference)
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
        null
    )
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(
        null
    )
    const modifiers = useMemo(
        () =>
            combineModifiers(arrow, arrowElement, {
                observePopperResize,
                observeReferenceResize,
            }),
        [arrow, arrowElement, observePopperResize, observeReferenceResize]
    )
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement,
        modifiers: modifiers as unknown as readonly Partial<
            Modifier<string, object>
        >[],
    })

    return (
        <Layer onBackdropClick={onClickOutside}>
            <div
                data-test={dataTest}
                className={className}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
            >
                {children}
                {arrow && (
                    <Arrow
                        hidden={
                            attributes.arrow &&
                            !!attributes.arrow['data-arrow-hidden']
                        }
                        popperPlacement={
                            attributes.popper &&
                            attributes.popper['data-popper-placement']
                        }
                        ref={setArrowElement}
                        styles={styles.arrow}
                    />
                )}
                <style jsx>{`
                    div {
                        max-width: ${maxWidth}px;
                        box-shadow: ${elevation};
                        background-color: ${colors.white};
                        border-radius: 4px;
                    }
                `}</style>
            </div>
        </Layer>
    )
}

export { Popover }
