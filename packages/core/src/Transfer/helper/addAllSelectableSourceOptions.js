import { addOption, toggleOptions } from '../common'
import { getPlainOptionsFromReactOptions } from './getPlainOptionsFromReactOptions'

/**
 * @param {Object} args
 * @param {ReactElement} args.sourceReactOptions
 * @param {Option[]} args.selectedPlainOptions
 * @param {Function} args.onChange
 * @param {Function} arg.setHighlightedSourceOptions
 * @returns {void}
 */
export const addAllSelectableSourceOptions = ({
    sourceReactOptions,
    onChange,
    selectedPlainOptions,
    setHighlightedSourceOptions,
}) => {
    const all = getPlainOptionsFromReactOptions(sourceReactOptions)
    const allEnabled = all.filter(({ disabled }) => !disabled)
    const newSelected = toggleOptions(
        selectedPlainOptions,
        allEnabled,
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
