/**
 * @param {Object} args
 * @param {number} args.maxSelections
 * @param {string[]} args.selected
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
        const newSelected = selected.includes(option.value)
            ? selected
            : [...selected, option.value]

        setHighlightedSourceOptions([])
        onChange({ selected: newSelected.slice(-1 * maxSelections) })
    }

    const deselectSingleOption = ({ option }) => {
        const newSelected = selected.filter(
            curSelected => curSelected !== option.value
        )

        setHighlightedPickedOptions([])
        onChange({ selected: newSelected })
    }

    return { selectSingleOption, deselectSingleOption }
}
