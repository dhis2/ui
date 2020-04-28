import propTypes from '@dhis2/prop-types'
import React from 'react'

import { sharedPropTypes, spacers } from '@dhis2/ui-constants'
import { FieldSet } from '../FieldSet/FieldSet.js'
import { Legend } from '../Legend/Legend.js'
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
    className,
    label,
    helpText,
    validationText,
    required,
    dataTest,
    valid,
    error,
    warning,
}) => (
    <FieldSet classname={className} dataTest={dataTest}>
        {label && <Legend required={required}>{label}</Legend>}

        <Box marginTop={spacers.dp4}>{children}</Box>

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
    </FieldSet>
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
 *
 * @prop {string} [label]
 * @prop {string} [helpText]
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
    error: sharedPropTypes.statusPropType,
    helpText: propTypes.string,
    label: propTypes.string,
    required: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,
    warning: sharedPropTypes.statusPropType,
}

export { Field }
