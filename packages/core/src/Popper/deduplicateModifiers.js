import * as baseModifiers from './modifiers.js'

const deduplicateModifiers = (modifiers, popper, reference) => {
    const baseModifiersWithResizeObserver = {
        ...baseModifiers,
        resizeObserver: {
            ...baseModifiers.resizeObserver,
            options: { reference, popper },
        },
    }

    // Deduplicate modifiers from props and baseModifiers,
    // when duplicates are encountered (by name), use the
    // modifier from props so each Popper can be fully custom
    return Object.keys(baseModifiersWithResizeObserver)
        .map(key => baseModifiersWithResizeObserver[key])
        .filter(({ name }) => !modifiers.some(m => m.name === name))
        .concat(modifiers)
}

export { deduplicateModifiers }
