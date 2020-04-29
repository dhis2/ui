import { findOptionIndex } from '../common'

/**
 * @param {Object} args
 * @param {PlainElement} args.highlightedPickedPlainOptions
 * @param {Option[]} args.selectedPlainOptions
 * @returns {bool}
 */
export const isReorderDownDisabled = ({
    highlightedPickedPlainOptions,
    selectedPlainOptions,
}) =>
    // only one item can be moved with the buttons
    highlightedPickedPlainOptions.length !== 1 ||
    // can't move an item down if it's the last one
    findOptionIndex(selectedPlainOptions, highlightedPickedPlainOptions[0]) ===
        selectedPlainOptions.length - 1
