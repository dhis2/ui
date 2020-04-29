import propTypes from '@dhis2/prop-types'
import React from 'react'

import { sharedPropTypes, spacers } from '@dhis2/ui-constants'
import { Label } from '../Label/Label.js'
import { Help } from '../Help/Help.js'
import { Box } from '../Box/Box.js'

/**
 * @module
 * @param {Field.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Field } from '@dhis2/ui'
 *
 * @example import { Field } from '@dhis2/ui-core'
 */
const Field = ({
    children,
    disabled,
    className,
    helpText,
    label,
    name,
    validationText,
    required,
    dataTest,
    valid,
    error,
    warning,
}) => (
    <Box className={className} dataTest={dataTest}>
        {label && (
            <Label
                dataTest={`${dataTest}-label`}
                required={required}
                disabled={disabled}
                htmlFor={name}
            >
                {label}
            </Label>
        )}

        <Box
            dataTest={`${dataTest}-content`}
            marginTop={label ? spacers.dp4 : 0}
        >
            {children}
        </Box>

        {helpText && <Help dataTest={`${dataTest}-help`}>{helpText}</Help>}

        {validationText && (
            <Help
                error={error}
                warning={warning}
                valid={valid}
                dataTest={`${dataTest}-validation`}
            >
                {validationText}
            </Help>
        )}
    </Box>
)

Field.defaultProps = {
    dataTest: 'dhis2-uicore-field',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @private
 *
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {boolean} [disabled]
 * @prop {string} [helpText]
 * @prop {string} [label]
 * @prop {string} [name]
 * @prop {string} [validationText]
 * @prop {boolean} [required]
 * @prop {string} [dataTest]
 * @prop {boolean} [valid] - `valid`, `warning`, and `error`, are mutually exclusive
 * @prop {boolean} [warning]
 * @prop {boolean} [error]
 */
Field.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    error: sharedPropTypes.statusPropType,
    helpText: propTypes.string,
    label: propTypes.string,
    name: propTypes.string,
    required: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,
    warning: sharedPropTypes.statusPropType,
}

export { Field }
