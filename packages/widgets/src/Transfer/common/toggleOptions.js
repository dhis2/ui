import { toggleOption } from './toggleOption.js'

/**
 * @param {Object[]} collection
 * @param {Object[]} options
 * @param {Function} modifier
 * @returns {Object}
 */
export const toggleOptions = (
    collection,
    optionsToToggle,
    modifier = toggleOption
) => {
    return optionsToToggle.reduce(
        (curSelected, option) => modifier(curSelected, option),
        collection
    )
}
