import { Checkbox } from '@dhis2-ui/checkbox'
import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import { resolve } from 'styled-jsx/css'

// Padding has to be set on the label, so that the entire area is clickable
const { styles, className: checkboxClassname } = resolve`
    padding: ${spacers.dp8} ${spacers.dp12};
`

/**
 * @module
 *
 * @param {MultiSelectOption.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { MultiSelectOption } from '@dhis2/ui-core'
 *
 */

const MultiSelectOption = ({
    label,
    active,
    disabled,
    onClick,
    className,
    dataTest,
    value,
}) => (
    <div
        className={cx(className, { disabled })}
        data-test={dataTest}
        data-value={value}
        data-label={label}
    >
        <Checkbox
            name={label}
            className={checkboxClassname}
            checked={active}
            label={label}
            onChange={onClick}
            disabled={disabled}
            dense
        />

        {styles}

        <style jsx>{`
            div:hover {
                background-color: ${colors.grey200};
            }

            div.disabled:hover {
                background-color: initial;
            }
        `}</style>
    </div>
)

MultiSelectOption.defaultProps = {
    dataTest: 'dhis2-uicore-multiselectoption',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} value
 * @prop {string} label
 * @prop {function} [onChange]
 * @prop {string} [className]
 * @prop {function} [onClick]
 * @prop {boolean} [active]
 * @prop {boolean} [disabled]
 * @prop {string} [dataTest]
 */
MultiSelectOption.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    active: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    onClick: propTypes.func,
}

export { MultiSelectOption }
