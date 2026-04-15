import cx from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'

const tableCellStyles = css`
    td {
        border-bottom: 1px solid #e8edf2;
        font-size: 14px;
        line-height: 18px;
        padding: 13px 12px;
        height: 45px;
    }

    td:dir(rtl) {
        text-align: right;
    }

    .dense {
        padding: 9px 12px;
        height: 36px;
    }
`

export interface TableCellProps {
    children?: React.ReactNode
    className?: string
    colSpan?: string
    dataTest?: string
    /** Usees less padding and height for information-dense layouts */
    dense?: boolean
    role?: string
    rowSpan?: string
}

export const TableCell: React.FC<TableCellProps> = ({
    role,
    className,
    children,
    colSpan,
    rowSpan,
    dense,
    dataTest = 'dhis2-uicore-tablecell',
}) => (
    <td
        colSpan={colSpan ? Number(colSpan) : undefined}
        rowSpan={rowSpan ? Number(rowSpan) : undefined}
        className={cx({ dense }, className)}
        data-test={dataTest}
        role={role}
    >
        {children}

        <style jsx>{tableCellStyles}</style>
    </td>
)
