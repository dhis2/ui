import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {StackedTableBody.PropTypes}
 * @returns {React.Component}
 * @example import { StackedTableBody } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/stackedtable--default|Storybook}
 */
export const StackedTableBody = ({ children, className, dataTest }) => (
    <tbody className={className} data-tset={dataTest}>
        {children}
        <style jsx>{`
            tbody {
                display: block;
            }
        `}</style>
    </tbody>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * Should only be StackedTableCell or StackedTableCellHead
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
StackedTableBody.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTableBody.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablebody',
}
