const getReferenceElement = reference => {
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

export { getReferenceElement }
