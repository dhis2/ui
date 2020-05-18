import ResizeObserver from 'resize-observer-polyfill'

const attachResizeObservers = ({
    state: { elements },
    options,
    instance: { update },
}) => {
    const observers = Object.keys(options).reduce((acc, elementKey) => {
        if (options[elementKey]) {
            const observer = new ResizeObserver(update)
            observer.observe(elements[elementKey])
            acc.push(observer)
        }
        return acc
    }, [])

    return () => {
        observers.forEach(observer => {
            observer.disconnect()
        })
    }
}

export const getBaseModifiers = ({
    observePopperResize,
    observeReferenceResize,
}) => [
    {
        name: 'preventOverflow',
        options: {
            altAxis: true,
            rootBoundary: 'document',
            boundary: document.body,
        },
    },
    {
        name: 'flip',
        options: {
            rootBoundary: 'document',
            boundary: document.body,
        },
    },
    {
        name: 'resizeObserver',
        enabled: true,
        phase: 'write',
        fn: () => {},
        effect: attachResizeObservers,
        options: {
            popper: observePopperResize,
            reference: observeReferenceResize,
        },
    },
]

export const deduplicateModifiers = (modifiers, resizeObservers) => {
    // Deduplicate modifiers from props and baseModifiers,
    // when duplicates are encountered (by name), use the
    // modifier from props so each Popper can be fully custom
    return getBaseModifiers(resizeObservers)
        .filter(({ name }) => !modifiers.some(m => m.name === name))
        .concat(modifiers)
}
