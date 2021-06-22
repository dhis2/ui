import PropTypes from 'prop-types'
import React from 'react'

export const TableHead = ({ children, className, dataTest, role }) => (
    <thead className={className} data-test={dataTest} role={role}>
        {children}
    </thead>
)

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
