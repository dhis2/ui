import propTypes from '@dhis2/prop-types'
import React, { forwardRef } from 'react'

/**
 * @module
 * @param {TableBody.PropTypes} props
 * @returns {React.Component}
 * @example import { TableBody } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
 */
export const TableBody = forwardRef(
    ({ children, className, dataTest, role }, ref) => (
        <tbody className={className} data-test={dataTest} ref={ref} role={role}>
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
 * @prop {string} [role]
 * @prop {string} [dataTest=dhis2-uicore-tablebody]
 */
TableBody.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    role: propTypes.string,
}
