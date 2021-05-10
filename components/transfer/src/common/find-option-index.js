import { isOption } from './is-option.js'

/**
 * @param {Object[]} options
 * @param {Object} option
 * @returns {Int}
 */
export const findOptionIndex = (options, option) =>
    options.findIndex(current => isOption(current, option))
