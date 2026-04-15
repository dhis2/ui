import cx from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'

const tableCellHeadStyles = css`
    th {
        border-bottom: 1px solid #e8edf2;
        font-size: 14px;
        line-height: 18px;
        padding: 13px 12px;
        height: 45px;
    }

    th:dir(rtl) {
        text-align: right;
    }

    .dense {
        padding: 9px 12px;
        height: 36px;
    }
`

export interface TableCellHeadProps {
    children?: React.ReactNode
    className?: string
    colSpan?: string
    dataTest?: string
    /** Uses less padding and height for information-dense layouts */
    dense?: boolean
    role?: string
    rowSpan?: string
}

export const TableCellHead: React.FC<TableCellHeadProps> = ({
    role,
    colSpan,
    rowSpan,
    dense,
    children,
    className,
    dataTest = 'dhis2-uicore-tablecellhead',
}) => (
    <th
        colSpan={colSpan ? Number(colSpan) : undefined}
        rowSpan={rowSpan ? Number(rowSpan) : undefined}
        className={cx({ dense }, className)}
        data-test={dataTest}
        role={role}
    >
        {children}

        <style jsx>{tableCellHeadStyles}</style>
    </th>
)
