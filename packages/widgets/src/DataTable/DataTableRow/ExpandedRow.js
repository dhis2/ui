import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import css from 'styled-jsx/css'
import { TableRow, TableDataCell } from '../TableElements/index.js'

const { className: cellClassName, styles } = css.resolve`
    :global(tr.expanded:hover) + :global(tr) > td {
        background-color: ${colors.grey100};
    }
    :global(tr.expanded:active) + :global(tr) > td {
        background-color: ${colors.grey200};
    }
    :global(tr.selected.expanded:hover) + tr > td {
        background-color: #cdeae8;
    }
`

export const ExpandedRow = ({
    children,
    className,
    colSpan,
    dataTest,
    selected,
    setIsHoveringExpandedContent,
}) => (
    <TableRow
        onMouseOver={() => setIsHoveringExpandedContent(true)}
        onMouseOut={() => setIsHoveringExpandedContent(false)}
        className={cx({
            [`${className}-expandedrow`]: !!className,
        })}
        selected={selected}
        dataTest={dataTest && `${dataTest}-expandedrow`}
    >
        <TableDataCell className={cellClassName} colSpan={colSpan}>
            {children}
            {styles}
        </TableDataCell>
    </TableRow>
)

ExpandedRow.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    dataTest: PropTypes.string,
    selected: PropTypes.bool,
    setIsHoveringExpandedContent: PropTypes.func,
}
