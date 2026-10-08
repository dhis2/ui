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
    const selectSingleOption = ({ value }) => {
        const newSelected = selected.includes(value)
            ? selected
            : [...selected, value]

        setHighlightedSourceOptions([])
        onChange({ selected: newSelected.slice(-1 * maxSelections) })
    }

    const deselectSingleOption = ({ value }) => {
        const newSelected = selected.filter(
            (curSelected) => curSelected !== value
        )

        setHighlightedPickedOptions([])
        onChange({ selected: newSelected })
    }

    return { selectSingleOption, deselectSingleOption }
}
