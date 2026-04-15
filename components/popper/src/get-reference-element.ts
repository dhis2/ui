export type PopperReference =
    | Element
    | { getBoundingClientRect: () => DOMRect }
    | React.RefObject<Element>
    | null
    | undefined

export const getReferenceElement = (
    reference: PopperReference
): Element | { getBoundingClientRect: () => DOMRect } | null => {
    // Elements or virtualElements
    if (
        reference instanceof Element ||
        (reference && 'getBoundingClientRect' in reference)
    ) {
        return reference
    }

    // react refs
    if (reference && 'current' in reference) {
        return reference.current
    }

    return null
}
