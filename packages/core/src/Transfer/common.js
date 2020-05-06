import { colors } from '@dhis2/ui-constants'

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
 * @param {Object} left
 * @param {Object} left
 * @returns {bool}
 */
export const isOption = (left, right) =>
    left.label === right.label && left.value === right.value

/**
 * @param {Object[]} options
 * @param {Object} option
 * @returns {Int}
 */
export const findOptionIndex = (options, option) =>
    options.findIndex(current => isOption(current, option))

/**
 * @param {Object[]} options
 * @param {Object} option
 * @returns {Object}
 */
export const findOption = (options, option) =>
    options.find(current => isOption(current, option))

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

/**
 * @param {Object[]} options
 * @param {Object} option
 * @returns {Object}
 */
export const toggleOption = (options, option) =>
    findOption(options, option)
        ? removeOption(options, option)
        : addOption(options, option)

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
