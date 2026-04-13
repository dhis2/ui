import cx from 'classnames'
import React, { useContext } from 'react'
import css from 'styled-jsx/css'
import { TableContext } from './table-context.ts'

const tableRowStyles = css`
    .zebraStriping:nth-child(even) {
        background: #fbfcfd;
    }
`

export interface TableRowProps {
    /** Should be `<TableCell>` or `<TableCellHead>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
    /** Disables the default row striping for this row */
    suppressZebraStriping?: boolean
}

export const TableRow: React.FC<TableRowProps> = ({
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
