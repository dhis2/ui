import { findOptionIndex } from '../common'

/**
 * @param {Object} args
 * @param {Element} args.highlightedPickedOptions
 * @param {Object[]} args.selectedOptions
 * @returns {bool}
 */
export const isReorderDownDisabled = ({
    highlightedPickedOptions,
    selectedOptions,
}) =>
    // only one item can be moved with the buttons
    highlightedPickedOptions.length !== 1 ||
    // can't move an item down if it's the last one
    findOptionIndex(selectedOptions, highlightedPickedOptions[0]) ===
        selectedOptions.length - 1
