import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

/**
 * @module
 * @param {TableFoot.PropTypes} props
 * @returns {React.Component}
 * @example import { TableFoot } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--default|Storybook}
 */
export const TableFoot = forwardRef(
    ({ children, className, dataTest, role, ...props }, ref) => (
        <tfoot
            {...props}
            className={className}
            data-test={dataTest}
            ref={ref}
            role={role}
        >
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
 * @prop {string} [dataTest=dhis2-uicore-tablefoot]
 * @prop {role} [dataTest=dhis2-uicore-tablefoot]
 */
TableFoot.propTypes = {
    /** Should be `<TableRow>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
}
