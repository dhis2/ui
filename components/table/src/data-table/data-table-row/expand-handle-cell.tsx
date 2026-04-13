import { IconChevronDown24, IconChevronUp24 } from '@dhis2/ui-icons'
import cx from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'
import { TableDataCell } from '../table-elements/index.ts'

const pointer = css.resolve`
    td {
        cursor: pointer;
    }
`

export interface ExpandHandleCellProps {
    expanded?: boolean
    onClick?: (payload: { expanded: boolean }) => void
}

export const ExpandHandleCell: React.FC<ExpandHandleCellProps> = ({
    expanded,
    onClick,
}) => (
    <TableDataCell
        className={cx(pointer.className, { expanded })}
        onClick={() => onClick?.({ expanded: !expanded })}
        width="48px"
    >
        {expanded ? <IconChevronUp24 /> : <IconChevronDown24 />}
        {pointer.styles}
    </TableDataCell>
)
