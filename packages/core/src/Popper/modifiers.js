import ResizeObserver from 'resize-observer-polyfill'

export const preventOverflow = {
    name: 'preventOverflow',
    options: {
        rootBoundary: 'document',
        boundary: document.body,
    },
}

export const flip = {
    name: 'flip',
    options: {
        rootBoundary: 'document',
        boundary: document.body,
    },
}

export const resizeObserver = {
    name: 'resizeObserver',
    enabled: true,
    phase: 'write',
    fn: () => {},
    effect: ({ state: { elements }, options, instance: { update } }) => {
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
    },
}
