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
const inputArgType = {
    table: {
        type: {
            summary:
                '{ name: string (required), onChange: func (required), value: any, onBlur: func, onFocus: func }',
        },
    },
    control: { type: 'object' },
}

const metaPropType = propTypes.shape({
    error: propTypes.string,
    invalid: propTypes.bool,
    touched: propTypes.bool,
    valid: propTypes.bool,
    validating: propTypes.bool,
})
const metaArgType = {
    table: {
        type: {
            summary:
                '{ error: string, invalid: bool, touched: bool, valid: bool, validating: bool }',
        },
    },
    control: { type: 'object' },
}

export {
    toggleGroupOptionsProp,
    inputPropType,
    inputArgType,
    metaPropType,
    metaArgType,
}
