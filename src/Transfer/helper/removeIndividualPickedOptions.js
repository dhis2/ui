import { removeOption, toggleOptions } from '../common'

/**
 * @param {Object} args
 * @param {ReactElement} args.highlightedPickedReactOptions
 * @param {Function} args.setHighlightedPickedOptions
 * @param {Option[]} args.selectedPlainOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const removeIndividualPickedOptions = ({
    highlightedPickedReactOptions,
    onChange,
    selectedPlainOptions,
    setHighlightedPickedOptions,
}) => {
    const newSelected = toggleOptions(
        selectedPlainOptions,
        highlightedPickedReactOptions,
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
