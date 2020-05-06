import { findOption, findOptionIndex } from '../../common/index.js'

/**
 * @param {Object} args
 * @param {number} args.maxSelections
 * @param {Object[]} args.highlightedOptions
 * @param {Object[]} args.options
 * @param {Object} args.option
 * @param {Object} args.lastClicked
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
        setHighlightedOptions([option])
    } else {
        let from, to

        const clickedOptionIndex = findOptionIndex(options, option)
        const lastClickedSourceOptionWithoutRangeModeIndex = lastClicked
            ? findOptionIndex(options, lastClicked)
            : -1

        if (lastClickedSourceOptionWithoutRangeModeIndex !== -1) {
            from = lastClickedSourceOptionWithoutRangeModeIndex
            to = clickedOptionIndex
        } else {
            /**
             * A filter-change has removed the most recently highlighted option
             */
            const firstHighlightedInList = options.findIndex(option =>
                findOption(highlightedOptions, option)
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

        setHighlightedOptions(newHighlightedSourceOptions)
    }
}
