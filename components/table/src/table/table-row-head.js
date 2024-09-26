import PropTypes from 'prop-types'
import React from 'react'
import { TableRow } from './table-row.js'

export const TableRowHead = ({
    role,
    children,
    className,
    dataTest = 'dhis2-uicore-tablerowhead',
    suppressZebraStriping,
}) => (
    <TableRow
        className={className}
        dataTest={dataTest}
        suppressZebraStriping={suppressZebraStriping}
        role={role}
    >
        {children}
    </TableRow>
)

TableRowHead.propTypes = {
    /** Should be `<TableCellHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
    /** Disables the default row striping for this row */
    suppressZebraStriping: PropTypes.bool,
}
