import React from 'react'
import { Table } from './Table.js'
import { TableBody } from './TableBody.js'
import { TableDataCell } from './TableDataCell.js'
import { TableHead } from './TableHead.js'
import { TableHeaderCell } from './TableHeaderCell.js'
import { TableRow } from './TableRow.js'
import { TableScrollBox } from './TableScrollBox.js'

export default {
    title: 'Table',
    component: Table,
}

export const FixedHeaderAndColumns = () => (
    <TableScrollBox maxHeight="350px" maxWidth="500px">
        <Table layout="fixed" borderless width="1000px">
            <TableHead>
                <TableRow>
                    <TableHeaderCell fixed top="0" left="0" width="120px">
                        Header fixed-left 1
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0" left="120px">
                        Header fixed-left 2
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Header fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Header fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Header fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Header fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Header fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Header fixed
                    </TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>scrolling top-left</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>scrolling top-right</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        fixed
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        fixed
                    </TableHeaderCell>
                    <TableDataCell>scrolling bottom-left</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>...</TableDataCell>
                    <TableDataCell>scrolling bottom-right</TableDataCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableScrollBox>
)
