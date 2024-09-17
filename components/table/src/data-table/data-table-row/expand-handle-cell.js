import { IconChevronDown24, IconChevronUp24 } from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import { TableDataCell } from '../table-elements/index.js'

const pointer = css.resolve`
    td {
        cursor: pointer;
    }
`

export const ExpandHandleCell = ({ expanded, onClick }) => (
    <TableDataCell
        className={cx(pointer.className, { expanded })}
        onClick={() => onClick({ expanded: !expanded })}
        width="48px"
    >
        {expanded ? <IconChevronUp24 /> : <IconChevronDown24 />}
        {pointer.styles}
    </TableDataCell>
)

ExpandHandleCell.propTypes = {
    expanded: PropTypes.bool,
    onClick: PropTypes.func,
}
