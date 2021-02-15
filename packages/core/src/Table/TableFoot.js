import propTypes from '@dhis2/prop-types'
import React, { forwardRef } from 'react'

/**
 * @module
 * @param {TableFoot.PropTypes} props
 * @returns {React.Component}
 * @example import { TableFoot } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
 */
export const TableFoot = forwardRef(
    ({ children, className, dataTest, role }, ref) => (
        <tfoot className={className} data-test={dataTest} ref={ref} role={role}>
            {children}
        </tfoot>
    )
)

TableFoot.displayName = 'TableFoot'

TableFoot.defaultProps = {
    dataTest: 'dhis2-uicore-tablefoot',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} [children]
 * @prop {string} [className]
 * @prop {string} [role]
 * @prop {string} [dataTest=dhis2-uicore-tablefoot]
 */
TableFoot.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    role: propTypes.string,
}
