import { IconChevronDown24, IconChevronUp24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import { TableCell } from '../TableCell.js'

const tableCell = css.resolve`
    td {
        cursor: pointer;
    }
`

export const ExpandToggleCell = ({ isExpanded, onClick }) => (
    <TableCell className={tableCell.className} onClick={onClick}>
        {isExpanded ? <IconChevronUp24 /> : <IconChevronDown24 />}
        {tableCell.styles}
    </TableCell>
)

ExpandToggleCell.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}
