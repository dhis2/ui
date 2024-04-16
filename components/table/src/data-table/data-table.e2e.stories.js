import React from 'react'
import { DataTableBody } from './data-table-body.js'
import { DataTableCell } from './data-table-cell.js'
import { DataTableColumnHeader } from './data-table-column-header/data-table-column-header.js'
import { DataTableHead } from './data-table-head.js'
import { DataTableRow } from './data-table-row/data-table-row.js'
import { DataTable } from './data-table.js'

export default {
    title: 'DataTable',
    component: DataTable,
}

export const FixedHeaderAndColumns = () => (
    <DataTable
        layout="fixed"
        width="1000px"
        scrollWidth="500px"
        scrollHeight="400px"
    >
        <DataTableHead>
            <DataTableRow>
                <DataTableColumnHeader fixed top="0" left="0" width="120px">
                    Header fixed-left 1
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0" left="120px">
                    Header fixed-left 2
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Header fixed
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Header fixed
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Header fixed
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Header fixed
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Header fixed
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Header fixed
                </DataTableColumnHeader>
            </DataTableRow>
        </DataTableHead>
        <DataTableBody>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>scrolling top-left</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>scrolling top-right</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    fixed
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    fixed
                </DataTableCell>
                <DataTableCell>scrolling bottom-left</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>...</DataTableCell>
                <DataTableCell>scrolling bottom-right</DataTableCell>
            </DataTableRow>
        </DataTableBody>
    </DataTable>
)
