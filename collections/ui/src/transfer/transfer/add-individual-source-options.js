/**
 * @param {Object} args
 * @param {bool} args.filterable
 * @param {Object[]} args.sourceOptions
 * @param {string[]} args.highlightedSourceOptions
 * @param {string[]} args.selected
 * @param {Function} args.onChange
 * @param {Function} args.setHighlightedSourceOptions
 * @returns void
 */
export const addIndividualSourceOptions = ({
    filterable,
    sourceOptions,
    highlightedSourceOptions,
    maxSelections,
    onChange,
    selected,
    setHighlightedSourceOptions,
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
    const filteredHighlightedSourceOptions = filterable
        ? highlightedSourceOptions.filter((value) =>
              sourceOptions.find(
                  (filteredOption) => filteredOption.value === value
              )
          )
        : highlightedSourceOptions

    const newSelected = filteredHighlightedSourceOptions.reduce(
        (accumulatedSelected, value) => [
            ...accumulatedSelected,
            filteredHighlightedSourceOptions.find(
                (filteredHighlightedSourceOption) =>
                    filteredHighlightedSourceOption === value
            ),
        ],
        selected
    )

    setHighlightedSourceOptions([])

    /**
     * This will extract from the end, hence the "-1 *"
     * As the "newest" additions are always at the end of the array,
     * it's safe to just take the last nth (depending on maxSelection)
     * to always get the right ones
     */
    onChange({
        selected: newSelected.slice(-1 * maxSelections),
    })
}
