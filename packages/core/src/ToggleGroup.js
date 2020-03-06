import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import { Children, cloneElement } from 'react'

import { statusPropType } from './common-prop-types.js'
import { Spacer } from './ToggleGroup/Spacer.js'

const ToggleGroup = ({
    children,
    value,
    onChange,
    name,
    disabled,
    valid,
    warning,
    error,
    dense,
    className,
    dataTest,
}) => (
    <div data-test={dataTest}>
        {Children.map(children, child => (
            <Spacer dense={child.props.dense || dense}>
                {cloneElement(child, {
                    name,
                    onChange: child.props.onChange || onChange,
                    checked: Array.isArray(value)
                        ? value.indexOf(child.props.value) !== -1
                        : child.props.value === value,
                    disabled: child.props.disabled || disabled,
                    valid: child.props.valid || valid,
                    warning: child.props.warning || warning,
                    error: child.props.error || error,
                    dense: child.props.dense || dense,
                    className: cx(child.props.className, className),
                })}
            </Spacer>
        ))}
    </div>
)

ToggleGroup.defaultProps = {
    dataTest: 'dhis2-uicore-togglegroup',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @private
 *
 * @prop {Node} [children]
 * @prop {function} [onChange]
 * @prop {string} [name]
 * @prop {string|Array.<String>} [value]
 * @prop {string} [className]
 * @prop {boolean} [disabled]
 * @prop {boolean} [valid] - `valid`, `warning`, `error`, `loading`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 * @prop {boolean} [dense]
 * @prop {string} [dataTest]
 */
ToggleGroup.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    name: propTypes.string,
    valid: statusPropType,
    value: propTypes.oneOfType([
        propTypes.string,
        propTypes.arrayOf(propTypes.string),
    ]),
    warning: statusPropType,
    onChange: propTypes.func,
}

export { ToggleGroup }
