import { IconDragHandle24 } from '@dhis2/ui-icons'
import React from 'react'
import { TableDataCell } from '../table-elements/index.ts'

export const DragHandleCell: React.FC = () => (
    <TableDataCell width="48px">
        <IconDragHandle24 />
    </TableDataCell>
)
