import { dataTestNameToSelector } from './dataTestNameToSelector.js'

export const parseSelectorWithDataTest = (selector, prefix) => {
    return selector.replace(/\{([^}]*)\}/g, (match, dataTestName) =>
        dataTestNameToSelector(dataTestName, prefix)
    )
}
