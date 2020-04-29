import '../types.js'

/**
 * @param {ReactElement} reactOption
 * @returns {Option} plainOption
 */
export const getPlainOptionFromReactOption = reactOption => ({
    label: reactOption.props.label,
    value: reactOption.props.value,
    disabled: reactOption.props.disabled,
    ...(reactOption.props.additionalData || {}),
})
