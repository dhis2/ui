/**
 * @param {Object} args
 * @param {string[]} args.highlightedPickedOptions
 * @param {string[]} args.selected
 * @param {Function} args.setHighlightedPickedOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const removeIndividualPickedOptions = ({
    filterablePicked,
    pickedOptions,
    highlightedPickedOptions,
    onChange,
    selected,
    setHighlightedPickedOptions,
}) => {
    /**
     * Creates a subset of the highlighted options to reflect a changed
     * filter value in case previously highlighted options are now
     * hidden.
     *
     * This enables us to keep items highlighted while searching for
     * a particular one.
     *
     * With this subset we only select the subset when the user
     * clicks the "add individuals" button
     */
    const filteredHighlightedPickedOptions = filterablePicked
        ? highlightedPickedOptions.filter(value =>
              pickedOptions.find(
                  filteredOption => filteredOption.value === value
              )
          )
        : highlightedPickedOptions

    const newSelected = selected.filter(
        selectedOption =>
            !filteredHighlightedPickedOptions.includes(selectedOption)
    )

    setHighlightedPickedOptions([])

    /**
     * as the maximum amount of selected items
     * is already restricted through the selection mechanism,
     * there's no need to handle `maxSelection` here
     */
    onChange({ selected: newSelected })
}
