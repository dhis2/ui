import { removeOption, toggleOptions } from '../common.js'

/**
 * @param {Object} args
 * @param {Object[]} args.highlightedPickedReactOptions
 * @param {Object[]} args.selectedOptions
 * @param {Function} args.setHighlightedPickedOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const removeIndividualPickedOptions = ({
    highlightedPickedOptions,
    onChange,
    selectedOptions,
    setHighlightedPickedOptions,
}) => {
    const newSelected = toggleOptions(
        selectedOptions,
        highlightedPickedOptions,
        removeOption
    )

    setHighlightedPickedOptions([])

    /**
     * as the maximum amount of selected items
     * is already restricted through the selection mechanism,
     * there's no need to handle `maxSelection` here
     */
    onChange({ selected: newSelected })
}
