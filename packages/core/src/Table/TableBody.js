import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {TableBody.PropTypes} props
 * @returns {React.Component}
 * @example import { TableBody } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableBody = ({ children, className, dataTest }) => (
    <tbody className={className} data-test={dataTest}>
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
 * @prop {string} [dataTest]
 */
TableBody.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}
