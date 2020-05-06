import { addOption, toggleOptions } from '../common/index.js'

/**
 * @param {Object} args
 * @param {Object[]} args.sourceReactOptions
 * @param {Object[]} args.selectedOptions
 * @param {Function} args.onChange
 * @param {Function} arg.setHighlightedSourceOptions
 * @returns {void}
 */
export const addAllSelectableSourceOptions = ({
    sourceOptions,
    onChange,
    selectedOptions,
    setHighlightedSourceOptions,
}) => {
    const enabledSourceOptions = sourceOptions.filter(
        ({ disabled }) => !disabled
    )
    const newSelected = toggleOptions(
        selectedOptions,
        enabledSourceOptions,
        addOption
    )

    setHighlightedSourceOptions([])

    // If we ever allow maxSelection to be any value
    // other than 1 and Infinity, we need to think
    // about how this should behave:
    //
    // Either we hide this button when it's not "Infinity",
    // or we have to decide whether we want to take the first
    // nth options or the last
    onChange({ selected: newSelected })
}
