import { addOption, removeOption } from '../common'

/**
 * @param {Object} args
 * @param {number} args.maxSelections
 * @param {Object[]} args.selected
 * @param {Function} args.onChange
 * @param {Function} args.setHighlightedSourceOptions
 * @param {Function} args.setHighlightedPickedOptions
 * @returns void
 */
export const createDoubleClickHandlers = ({
    maxSelections,
    onChange,
    selected,
    setHighlightedPickedOptions,
    setHighlightedSourceOptions,
}) => {
    const selectSingleOption = ({ option }) => {
        const newSelected = addOption(selected, option)
        setHighlightedSourceOptions([])
        onChange({ selected: newSelected.slice(-1 * maxSelections) })
    }

    const deselectSingleOption = ({ option }) => {
        const newSelected = removeOption(selected, option)
        setHighlightedPickedOptions([])
        onChange({ selected: newSelected })
    }

    return { selectSingleOption, deselectSingleOption }
}
