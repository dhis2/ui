import { findOptionIndex } from './findOptionIndex.js'

/**
 * @param {Object[]} options
 * @param {Object} option
 * @returns {Object}
 */
export const removeOption = (options, option) => {
    const index = findOptionIndex(options, option)

    if (index === -1) return options
    if (index === 0) return options.slice(1)

    return [...options.slice(0, index), ...options.slice(index + 1)]
}
