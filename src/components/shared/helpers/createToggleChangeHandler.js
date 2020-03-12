// If the input has a value (checkedValue prop) the form value is: checkedValue || null
// Otherwise the form-value is: true || false
const getToggleValue = ({ checked, value }) => {
    if (value) {
        return checked ? value : null
    }
    return checked
}

const createToggleChangeHandler = input => payload =>
    input.onChange(getToggleValue(payload))

export { createToggleChangeHandler }
