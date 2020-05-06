import { findOptionIndex } from '../common.js'

/**
 * @param {Object} args
 * @param {Element} args.highlightedPickedOptions
 * @param {Object[]} args.selectedOptions
 * @returns {bool}
 */
export const isReorderUpDisabled = ({
    highlightedPickedOptions,
    selectedOptions,
}) =>
    // only one item can be moved with the buttons
    highlightedPickedOptions.length !== 1 ||
    // can't move an item up if it's the first one
    findOptionIndex(selectedOptions, highlightedPickedOptions[0]) === 0
