import PropTypes from 'prop-types'

const toggleGroupOptionsProp = PropTypes.arrayOf(
    PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })
)

const inputPropType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
})
const inputArgType = {
    table: {
        type: {
            summary:
                '{ name: string (required), onChange: func (required), value: any, onBlur: func, onFocus: func }',
        },
    },
}

const metaPropType = PropTypes.shape({
    error: PropTypes.string,
    invalid: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    validating: PropTypes.bool,
})
const metaArgType = {
    table: {
        type: {
            summary:
                '{ error: string, invalid: bool, touched: bool, valid: bool, validating: bool }',
        },
    },
}

export {
    toggleGroupOptionsProp,
    inputPropType,
    inputArgType,
    metaPropType,
    metaArgType,
}
