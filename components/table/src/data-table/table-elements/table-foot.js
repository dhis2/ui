import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

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

TableFoot.propTypes = {
    /** Should be `<TableRow>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
}
