import { findOptionIndex } from '../../common/index.js'

/**
 * @param {Object} args
 * @param {number} args.maxSelections
 * @param {string[]} args.highlightedOptions
 * @param {Object[]} args.options
 * @param {Object} args.option
 * @param {string} args.lastClicked
 * @param {Function} args.setHighlightedOption
 * @returns {void}
 */
export const toggleRange = ({
    highlightedOptions,
    options,
    option,
    setHighlightedOptions,
    lastClicked,
    maxSelections,
}) => {
    if (highlightedOptions.length === 0) {
        setHighlightedOptions([option.value])
    } else {
        let from, to

        const clickedOptionIndex = findOptionIndex(options, option)
        const lastClickedSourceOptionWithoutRangeModeIndex = lastClicked
            ? options.findIndex(curOption => curOption.value === lastClicked)
            : -1

        if (lastClickedSourceOptionWithoutRangeModeIndex !== -1) {
            from = lastClickedSourceOptionWithoutRangeModeIndex
            to = clickedOptionIndex
        } else {
            /**
             * A filter-change has removed the most recently highlighted option
             */
            const firstHighlightedInList = options.findIndex(option =>
                highlightedOptions.find(
                    highlightedOption => highlightedOption === option.value
                )
            )

            from = firstHighlightedInList
            to = clickedOptionIndex
        }

        // this is so we can also selected
        // a range of options above "from" option.
        // -> Just how slice works ;)
        const lower = Math.min(from, to)
        const higher = Math.max(from, to)
        const newHighlightedSourceOptions = options
            .slice(lower, higher + 1)
            .filter(option => !option.disabled)
            .slice(maxSelections * -1)
            .map(({ value }) => value)

        setHighlightedOptions(newHighlightedSourceOptions)
    }
}
