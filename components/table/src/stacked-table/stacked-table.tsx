import React from 'react'
import { extractHeaderLabels } from './extract-header-labels.ts'
import { Provider } from './table-context.ts'
import { Table } from './table.tsx'

export interface StackedTableProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Labels for columns. Use an empty string for a column without a header. */
    headerLabels?: string[]
}

export const StackedTable: React.FC<StackedTableProps> = ({
    children,
    className,
    dataTest = 'dhis2-uicore-stackedtable',
    headerLabels,
}) => {
    const contextHeaderLabels = extractHeaderLabels(children)
    const context = {
        headerLabels: headerLabels || contextHeaderLabels,
    }

    return (
        <Provider value={context}>
            <Table className={className} dataTest={dataTest}>
                {children}
            </Table>
        </Provider>
    )
}
