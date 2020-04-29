import { Children } from 'react'
import { addOption, isOption, toggleOptions } from '../common'

/**
 * @param {Object} args
 * @param {bool} args.filterable
 * @param {ReactElement} args.filteredSourcePlainOptions
 * @param {Option[]} args.highlightedSourcePlainOptions
 * @param {Function} args.onChange
 * @param {Option[]} args.selectedPlainOptions
 * @param {Function} args.setHighlightedSourceOptions
 * @returns void
 */
export const addIndividualSourceOptions = ({
    filterable,
    filteredSourcePlainOptions,
    highlightedSourcePlainOptions,
    maxSelections,
    onChange,
    selectedPlainOptions,
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
        ? highlightedSourcePlainOptions.filter(option =>
              Children.toArray(filteredSourcePlainOptions)
                  .map(({ props }) => props)
                  .find(filteredOption => isOption(filteredOption, option))
          )
        : highlightedSourcePlainOptions

    const newSelected = toggleOptions(
        selectedPlainOptions,
        filteredHighlightedSourceOptions,
        addOption
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
