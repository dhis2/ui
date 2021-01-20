import React from 'react'
import { Table } from './Table.js'
import { TableBody } from './TableBody.js'
import { TableCell } from './TableCell.js'
import { TableCellHead } from './TableCellHead.js'
import { TableHead } from './TableHead.js'
import { TableRow } from './TableRow.js'

export default {
    title: 'Table',
    component: Table,
}

export const FixedHeaderAndColumns = () => (
    <Table
        layout="fixed"
        width="1000px"
        scrollWidth="500px"
        scrollHeight="400px"
    >
        <TableHead>
            <TableRow>
                <TableCellHead fixed top="0" left="0" width="120px">
                    Header fixed-left 1
                </TableCellHead>
                <TableCellHead fixed top="0" left="120px">
                    Header fixed-left 2
                </TableCellHead>
                <TableCellHead fixed top="0">
                    Header fixed
                </TableCellHead>
                <TableCellHead fixed top="0">
                    Header fixed
                </TableCellHead>
                <TableCellHead fixed top="0">
                    Header fixed
                </TableCellHead>
                <TableCellHead fixed top="0">
                    Header fixed
                </TableCellHead>
                <TableCellHead fixed top="0">
                    Header fixed
                </TableCellHead>
                <TableCellHead fixed top="0">
                    Header fixed
                </TableCellHead>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>scrolling top-left</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>scrolling top-right</TableCell>
            </TableRow>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell fixed left="0" width="120px">
                    fixed
                </TableCell>
                <TableCell fixed left="120px">
                    fixed
                </TableCell>
                <TableCell>scrolling bottom-left</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>...</TableCell>
                <TableCell>scrolling bottom-right</TableCell>
            </TableRow>
        </TableBody>
    </Table>
)
