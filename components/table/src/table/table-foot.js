import PropTypes from 'prop-types'
import React from 'react'

export const TableFoot = ({
    children,
    className,
    dataTest = 'dhis2-uicore-tablefoot',
    role,
}) => (
    <tfoot className={className} data-test={dataTest} role={role}>
        {children}
    </tfoot>
)

TableFoot.propTypes = {
    /** Should be `<TableRow>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
}
