import PropTypes from 'prop-types'
import React from 'react'

export const TableBody = ({
    children,
    className,
    dataTest = 'dhis2-uicore-tablebody',
    role,
}) => (
    <tbody className={className} data-test={dataTest} role={role}>
        {children}
    </tbody>
)

TableBody.propTypes = {
    /** Should be `<TableRow>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
}
