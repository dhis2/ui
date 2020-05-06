/**
 * @param {Object} args
 * @param {string[]} args.highlightedOptions
 * @param {Object} args.option
 * @param {Function} args.setHighlightedOption
 * @returns {void}
 */
export const toggleReplace = ({
    option,
    highlightedOptions,
    setHighlightedOptions,
}) => {
    if (highlightedOptions.length > 1) {
        setHighlightedOptions([option.value])
    } else {
        const optionIndex = highlightedOptions.findIndex(
            highlightedOption => highlightedOption === option.value
        )

        if (optionIndex === -1) {
            setHighlightedOptions([option.value])
        } else {
            setHighlightedOptions([])
        }
    }
}
