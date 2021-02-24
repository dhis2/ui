import propTypes from '@dhis2/prop-types'
import React from 'react'

/**
 * @module
 * @param {TableFoot.PropTypes} props
 * @returns {React.Component}
 * @example import { TableFoot } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableFoot = ({ children, className, dataTest, role }) => (
    <tfoot className={className} data-test={dataTest} role={role}>
        {children}
    </tfoot>
)

TableFoot.defaultProps = {
    dataTest: 'dhis2-uicore-tablefoot',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} [children]
 * @prop {string} [className]
 * @prop {string} [role]
 * @prop {string} [dataTest]
 */
TableFoot.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    role: propTypes.string,
}
