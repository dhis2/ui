/**
 * @param {Object} args
 * @param {Function} args.setHighlightedPickedOptions
 * @param {Function} args.onChange
 * @returns {void}
 */
export const removeAllPickedOptions = ({
    setHighlightedPickedOptions,
    onChange,
}) => {
    setHighlightedPickedOptions([])
    onChange({ selected: [] })
}
