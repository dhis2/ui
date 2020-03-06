import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ToggleGroup } from './ToggleGroup.js'
import { statusPropType } from './common-prop-types.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {SwitchGroup.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SwitchGroup } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/switch.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/switchgroup--default|Storybook}
 */

const SwitchGroup = ({
    children,
    onChange,
    name,
    value,
    className,
    disabled,
    valid,
    warning,
    error,
    dense,
    dataTest,
}) => (
    <ToggleGroup
        onChange={onChange}
        name={name}
        value={value}
        className={className}
        disabled={disabled}
        valid={valid}
        warning={warning}
        error={error}
        dense={dense}
        dataTest={dataTest}
    >
        {children}
    </ToggleGroup>
)

SwitchGroup.defaultProps = {
    dataTest: 'dhis2-uicore-switchgroup',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Array.<Switch>} [children]
 * @prop {function} [onChange]
 * @prop {string} name
 *
 * @prop {Array.<String>} [value]
 * @prop {string} [className]
 *
 * @prop {boolean} [disabled]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error` are
 * mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 *
 * @prop {boolean} [dense]
 * @prop {string} [dataTest]
 */
SwitchGroup.propTypes = {
    children: propTypes.arrayOf(propTypes.element),
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    name: propTypes.string,
    valid: statusPropType,
    value: propTypes.arrayOf(propTypes.string),
    warning: statusPropType,
    onChange: propTypes.func,
}

export { SwitchGroup }
