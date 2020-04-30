import { addOption, removeOption } from '../common'

/**
 * @param {Object} args
 * @param {number} args.maxSelections
 * @param {Function} args.onChange
 * @param {Option[]} args.selectedPlainOptions
 * @param {Function} args.setHighlightedSourceOptions
 * @param {Function} args.setHighlightedPickedOptions
 * @returns void
 */
export const createDoubleClickHandlers = ({
    maxSelections,
    onChange,
    selectedPlainOptions,
    setHighlightedPickedOptions,
    setHighlightedSourceOptions,
}) => {
    const selectSingleOption = ({ option }) => {
        const newSelected = addOption(selectedPlainOptions, option)
        setHighlightedSourceOptions([])
        onChange({ selected: newSelected.slice(-1 * maxSelections) })
    }

    const deselectSingleOption = ({ option }) => {
        const newSelected = removeOption(selectedPlainOptions, option)
        setHighlightedPickedOptions([])
        onChange({ selected: newSelected })
    }

    return { selectSingleOption, deselectSingleOption }
}
