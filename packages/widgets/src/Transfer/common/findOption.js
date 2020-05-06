import { isOption } from './isOption.js'

/**
 * @param {Object[]} options
 * @param {Object} option
 * @returns {Object}
 */
export const findOption = (options, option) =>
    options.find(current => isOption(current, option))
