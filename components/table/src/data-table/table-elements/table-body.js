import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

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

TableBody.propTypes = {
    /** Should be `<TableRow>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
}
