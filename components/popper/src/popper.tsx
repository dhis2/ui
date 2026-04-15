import type { Modifier } from '@popperjs/core'
import React, { useState, useMemo, useEffect } from 'react'
import { usePopper } from 'react-popper'
import {
    getReferenceElement,
    PopperReference,
} from './get-reference-element.ts'
import { deduplicateModifiers, PopperModifier } from './modifiers.ts'

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

const flipPlacement = (placement: Placement): Placement => {
    if (placement.startsWith('right')) {
        return placement.replace('right', 'left') as Placement
    }
    if (placement.startsWith('left')) {
        return placement.replace('left', 'right') as Placement
    }
    return placement
}

export interface PopperProps {
    /** Content inside the Popper */
    children: React.ReactNode
    className?: string
    dataTest?: string
    /** A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/) */
    modifiers?: PopperModifier[]
    /** Makes the Popper update position when the **Popper content** changes size */
    observePopperResize?: boolean
    /** Makes the Popper update position when the **reference element** changes size */
    observeReferenceResize?: boolean
    /** A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/) */
    onFirstUpdate?: (state: Record<string, unknown>) => void
    /** A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/) */
    placement?: Placement
    /** A React ref, DOM node, or [virtual element](https://popper.js.org/docs/v2/virtual-elements/) for the popper to position itself against */
    reference?: PopperReference
    /** A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/) */
    strategy?: 'absolute' | 'fixed'
}

// Stable object reference
const staticArray: PopperModifier[] = []

const Popper = ({
    children,
    className,
    dataTest = 'dhis2-uicore-popper',
    modifiers = staticArray,
    observePopperResize,
    observeReferenceResize,
    onFirstUpdate,
    placement = 'auto',
    reference,
    strategy,
}: PopperProps) => {
    const referenceElement = getReferenceElement(reference)
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
        null
    )

    const deduplicatedModifiers = useMemo(
        () =>
            deduplicateModifiers(modifiers, {
                observePopperResize,
                observeReferenceResize,
            }),
        [modifiers, observePopperResize, observeReferenceResize]
    )

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        strategy,
        onFirstUpdate,
        placement:
            document.documentElement.dir === 'rtl'
                ? flipPlacement(placement)
                : placement,
        modifiers: deduplicatedModifiers as unknown as readonly Partial<
            Modifier<string, object>
        >[],
    })

    useEffect(() => {
        if (popperElement) {
            const firstChild = popperElement.firstElementChild as HTMLElement
            firstChild?.focus()
        }
    }, [popperElement])

    return (
        <div
            className={className}
            data-test={dataTest}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            tabIndex={0}
        >
            {children}
        </div>
    )
}

export { Popper }
