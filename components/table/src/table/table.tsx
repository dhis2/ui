import React from 'react'
import css from 'styled-jsx/css'
import { Provider } from './table-context.ts'

const tableStyles = css`
    table {
        border: 1px solid #e8edf2;
        background-color: #ffffff;
        min-width: 100%;
        text-align: left;
        border-collapse: collapse;
        vertical-align: top;
    }
`

export interface TableProps {
    /** Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
    /** Remove the default striping on alternating rows */
    suppressZebraStriping?: boolean
}

export const Table: React.FC<TableProps> = ({
    role,
    children,
    className,
    dataTest = 'dhis2-uicore-table',
    suppressZebraStriping,
}) => (
    <Provider value={{ suppressZebraStriping }}>
        <table className={className} data-test={dataTest} role={role}>
            {children}

            <style jsx>{tableStyles}</style>
        </table>
    </Provider>
)
