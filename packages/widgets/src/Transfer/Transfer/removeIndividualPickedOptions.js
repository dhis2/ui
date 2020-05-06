/**
 * @param {Object} args
 * @param {string[]} args.highlightedPickedOptions
 * @param {string[]} args.selected
 * @param {Function} args.setHighlightedPickedOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const removeIndividualPickedOptions = ({
    highlightedPickedOptions,
    onChange,
    selected,
    setHighlightedPickedOptions,
}) => {
    const newSelected = selected.filter(
        selectedOption => !highlightedPickedOptions.includes(selectedOption)
    )

    setHighlightedPickedOptions([])

    /**
     * as the maximum amount of selected items
     * is already restricted through the selection mechanism,
     * there's no need to handle `maxSelection` here
     */
    onChange({ selected: newSelected })
}
