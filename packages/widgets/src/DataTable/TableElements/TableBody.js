import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

/**
 * @module
 * @param {TableBody.PropTypes} props
 * @returns {React.Component}
 * @example import { TableBody } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
 */
export const TableBody = forwardRef(
    ({ children, className, dataTest, role, ...props }, ref) => (
        <tbody
            {...props}
            className={className}
            data-test={dataTest}
            ref={ref}
            role={role}
        >
            {children}
        </tbody>
    )
)
TableBody.displayName = 'TableBody'

TableBody.defaultProps = {
    dataTest: 'dhis2-uicore-tablebody',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-tablebody]
 * @prop {string} [role]
 */
TableBody.propTypes = {
    /** Should be `<TableRow>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
}
