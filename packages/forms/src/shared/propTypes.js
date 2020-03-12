import propTypes from '@dhis2/prop-types'

const toggleGroupOptionsProp = propTypes.arrayOf(
    propTypes.shape({
        label: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
    })
)

const inputPropType = propTypes.shape({
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    value: propTypes.any,
    onBlur: propTypes.func,
    onFocus: propTypes.func,
})

const metaPropType = propTypes.shape({
    error: propTypes.string,
    invalid: propTypes.bool,
    touched: propTypes.bool,
    valid: propTypes.bool,
    validating: propTypes.bool,
})

export { toggleGroupOptionsProp, inputPropType, metaPropType }
