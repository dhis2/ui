import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import css from 'styled-jsx/css'
import { TableContext } from './table-context.js'

const tableRowStyles = css`
    .zebraStriping:nth-child(even) {
        background: #fbfcfd;
    }
`

export const TableRow = ({
    role,
    children,
    className,
    dataTest = 'dhis2-uicore-tablerow',
    suppressZebraStriping,
    ...rest
}) => {
    const { suppressZebraStriping: suppressZebraStripingFromContext } =
        useContext(TableContext)

    const zebraStriping =
        typeof suppressZebraStriping !== 'undefined'
            ? !suppressZebraStriping
            : !suppressZebraStripingFromContext

    return (
        <tr
            className={cx(className, { zebraStriping })}
            data-test={dataTest}
            role={role}
            {...rest}
        >
            {children}

            <style jsx>{tableRowStyles}</style>
        </tr>
    )
}

TableRow.propTypes = {
    /** Should be `<TableCell>` or `<TableCellHead>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    role: PropTypes.string,
    /** Disables the default row striping for this row */
    suppressZebraStriping: PropTypes.bool,
}
