import { findOption } from './findOption.js'

/**
 * @param {Object[]} options
 * @param {Object} option
 * @returns {Object}
 */
export const addOption = (options, option) => {
    const found = findOption(options, option)
    if (found) return options
    return [...options, option]
}
