import { findOptionIndex } from '../common'

/**
 * @param {Object} args
 * @param {PlainElement} args.highlightedPickedPlainOptions
 * @param {Option[]} args.selectedPlainOptions
 * @returns {bool}
 */
export const isReorderUpDisabled = ({
    highlightedPickedPlainOptions,
    selectedPlainOptions,
}) =>
    // only one item can be moved with the buttons
    highlightedPickedPlainOptions.length !== 1 ||
    // can't move an item up if it's the first one
    findOptionIndex(selectedPlainOptions, highlightedPickedPlainOptions[0]) ===
        0
