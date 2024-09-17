import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useState, useMemo, useEffect } from 'react'
import { usePopper } from 'react-popper'
import { getReferenceElement } from './get-reference-element.js'
import { deduplicateModifiers } from './modifiers.js'

const flipPlacement = (placement) => {
    if (placement.startsWith('right')) {
        return placement.replace('right', 'left')
    }
    if (placement.startsWith('left')) {
        return placement.replace('left', 'right')
    }
    return placement
}

const Popper = ({
    children,
    className,
    dataTest,
    modifiers,
    observePopperResize,
    observeReferenceResize,
    onFirstUpdate,
    placement,
    reference,
    strategy,
}) => {
    const referenceElement = getReferenceElement(reference)
    const [popperElement, setPopperElement] = useState(null)

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
        modifiers: deduplicatedModifiers,
    })

    useEffect(() => {
        if (popperElement) {
            popperElement?.firstElementChild?.focus()
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

Popper.defaultProps = {
    dataTest: 'dhis2-uicore-popper',
    modifiers: [],
    placement: 'auto',
}

// Prop names follow the names here: https://popper.js.org/docs/v2/constructors/
Popper.propTypes = {
    /** Content inside the Popper */
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/) */
    modifiers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            options: PropTypes.object,
        })
    ),
    /** Makes the Popper update position when the **Popper content** changes size */
    observePopperResize: PropTypes.bool,
    /** Makes the Popper update position when the **reference element** changes size */
    observeReferenceResize: PropTypes.bool,
    /** A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/) */
    placement: sharedPropTypes.popperPlacementPropType,
    /** A React ref, DOM node, or [virtual element](https://popper.js.org/docs/v2/virtual-elements/) for the popper to position itself against */
    reference: sharedPropTypes.popperReferencePropType,
    /** A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/) */
    strategy: PropTypes.oneOf(['absolute', 'fixed']), // defaults to 'absolute'
    /** A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/) */
    onFirstUpdate: PropTypes.func,
}

export { Popper }
