import ResizeObserver from 'resize-observer-polyfill'

interface ModifierOptions {
    [key: string]: boolean | undefined
}

interface ModifierEffectArgs {
    state: {
        elements: Record<string, Element>
    }
    options: ModifierOptions
    instance: {
        update: () => void
    }
}

export interface PopperModifier {
    name: string
    options?: Record<string, unknown>
    enabled?: boolean
    phase?: string
    fn?: (...args: unknown[]) => void
    effect?: (args: ModifierEffectArgs) => (() => void) | void
}

interface ResizeObserverOptions {
    observePopperResize?: boolean
    observeReferenceResize?: boolean
}

const attachResizeObservers = ({
    state: { elements },
    options,
    instance: { update },
}: ModifierEffectArgs) => {
    const observers = Object.keys(options).reduce<ResizeObserver[]>(
        (acc, elementKey) => {
            if (options[elementKey]) {
                const observer = new ResizeObserver(update)
                observer.observe(elements[elementKey])
                acc.push(observer)
            }
            return acc
        },
        []
    )

    return () => {
        observers.forEach((observer) => {
            observer.disconnect()
        })
    }
}

export const getBaseModifiers = ({
    observePopperResize,
    observeReferenceResize,
}: ResizeObserverOptions): PopperModifier[] => [
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

export const deduplicateModifiers = (
    modifiers: PopperModifier[],
    resizeObservers: ResizeObserverOptions
): PopperModifier[] => {
    // Deduplicate modifiers from props and baseModifiers,
    // when duplicates are encountered (by name), use the
    // modifier from props so each Popper can be fully custom
    return getBaseModifiers(resizeObservers)
        .filter(({ name }) => !modifiers.some((m) => m.name === name))
        .concat(modifiers)
}

export const resizeObserver: PopperModifier = {
    name: 'resizeObserver',
    enabled: true,
    phase: 'write',
    fn: () => {},
    effect: ({ state: { elements }, options, instance: { update } }) => {
        const observers = Object.keys(options).reduce<ResizeObserver[]>(
            (acc, elementKey) => {
                if (options[elementKey]) {
                    const observer = new ResizeObserver(update)
                    observer.observe(elements[elementKey])
                    acc.push(observer)
                }
                return acc
            },
            []
        )

        return () => {
            observers.forEach((observer) => {
                observer.disconnect()
            })
        }
    },
}
