/**
 * @param {Object} args
 * @param {string} args.highlightedPickedOptions
 * @param {string[]} args.selected
 * @returns {bool}
 */
export const isReorderUpDisabled = ({ highlightedPickedOptions, selected }) =>
    // only one item can be moved with the buttons
    highlightedPickedOptions.length !== 1 ||
    // can't move an item up if it's the first one
    selected.indexOf(highlightedPickedOptions[0]) === 0
