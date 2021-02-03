import propTypes from '@dhis2/prop-types'
import React from 'react'

/**
 * @module
 * @param {TableBody.PropTypes} props
 * @returns {React.Component}
 * @example import { TableBody } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableBody = ({ children, className, dataTest, role }) => (
    <tbody className={className} data-test={dataTest} role={role}>
        {children}
    </tbody>
)

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
