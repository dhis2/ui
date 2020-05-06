import { addOption } from './addOption.js'
import { findOption } from './findOption.js'
import { removeOption } from './removeOption.js'

/**
 * @param {Object[]} options
 * @param {Object} option
 * @returns {Object}
 */
export const toggleOption = (options, option) =>
    findOption(options, option)
        ? removeOption(options, option)
        : addOption(options, option)
