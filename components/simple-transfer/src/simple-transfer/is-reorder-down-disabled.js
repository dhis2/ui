/**
 * @param {Object} args
 * @param {string} args.highlightedPickedOptions
 * @param {string[]} args.selected
 * @returns {bool}
 */
export const isReorderDownDisabled = ({ highlightedPickedOptions, selected }) =>
    // only one item can be moved with the buttons
    highlightedPickedOptions.length !== 1 ||
    // can't move an item down if it's the last one
    selected.indexOf(highlightedPickedOptions[0]) === selected.length - 1
