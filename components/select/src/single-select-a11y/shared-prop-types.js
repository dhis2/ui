import PropTypes from 'prop-types'

export const optionsProp = PropTypes.arrayOf(
    PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        component: PropTypes.elementType,
        disabled: PropTypes.bool,
    })
)
