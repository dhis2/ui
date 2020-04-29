import './types.js'
import { colors } from '../theme.js'

export const borderColor = colors.grey400
export const borderRadius = '3px'

/**
 * Click modes when clicking on an option with/without
 * a modifier key (ctrl, alt, cmd, shift)
 */

// no or multiple modifier keys
export const REPLACE_MODE = 'REPLACE_MODE'
// add/remove options from selection
export const ADD_MODE = 'ADD_MODE'
// create selection range
export const RANGE_MODE = 'RANGE_MODE'

/**
 * @param {Option} left
 * @param {Option} left
 * @returns {bool}
 */
export const isOption = (left, right) =>
    left.label === right.label && left.value === right.value

/**
 * @param {Option[]} options
 * @param {Option} option
 * @returns {Int}
 */
export const findOptionIndex = (options, option) =>
    options.findIndex(current => isOption(current, option))

/**
 * @param {Option[]} options
 * @param {Option} option
 * @returns {Option}
 */
export const findOption = (options, option) =>
    options.find(current => isOption(current, option))

/**
 * @param {Option[]} options
 * @param {Option} option
 * @returns {Option}
 */
export const addOption = (options, option) => {
    const found = findOption(options, option)
    if (found) return options
    return [...options, option]
}

/**
 * @param {Option[]} options
 * @param {Option} option
 * @returns {Option}
 */
export const removeOption = (options, option) => {
    const index = findOptionIndex(options, option)

    if (index === -1) return options
    if (index === 0) return options.slice(1)

    return [...options.slice(0, index), ...options.slice(index + 1)]
}

/**
 * @param {Option[]} options
 * @param {Option} option
 * @returns {Option}
 */
export const toggleOption = (options, option) =>
    findOption(options, option)
        ? removeOption(options, option)
        : addOption(options, option)

/**
 * @param {Option[]} collection
 * @param {Option[]} options
 * @param {Function} modifier
 * @returns {Option}
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

export const getModeByModifierKey = ({
    altKey,
    shiftKey,
    ctrlKey,
    metaKey,
}) => {
    const keys = [altKey, shiftKey, ctrlKey, metaKey]
    const amountKeyPressed = keys.filter(v => v)
    const moreThanOneKeyPressed = amountKeyPressed.length

    if (moreThanOneKeyPressed !== 1) return REPLACE_MODE

    if (altKey || ctrlKey || metaKey) return ADD_MODE

    if (shiftKey) return RANGE_MODE

    // default to replace mode
    return REPLACE_MODE
}
