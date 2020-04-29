import { dataTestNameToSelector } from './dataTestNameToSelector'

export const parseSelectorWithDataTest = (selector, prefix) => {
    return selector.replace(/\{([^}]*)\}/g, (match, dataTestName) =>
        dataTestNameToSelector(dataTestName, prefix)
    )
}
