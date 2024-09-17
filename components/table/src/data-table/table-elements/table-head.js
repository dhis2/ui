import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

export const TableHead = forwardRef(
    ({ children, className, dataTest, role, ...props }, ref) => (
        <thead
            {...props}
            className={className}
            data-test={dataTest}
            ref={ref}
            role={role}
        >
            {children}
        </thead>
    )
)

TableHead.displayName = 'TableHead'

TableHead.defaultProps = {
    dataTest: 'dhis2-uicore-tablehead',
}

TableHead.propTypes = {
    /** Should be `<TableRowHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
}
