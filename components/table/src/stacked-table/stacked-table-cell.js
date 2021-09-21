import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { ContentWithTitle } from './content-with-title.js'

export const StackedTableCell = ({
    children,
    className,
    colSpan,
    column,
    dataTest,
    headerLabels,
    hideTitle,
    rowSpan,
    title,
}) => {
    const cellTitle = title || headerLabels[column] || ''
    const realTitle = hideTitle ? '' : cellTitle

    return (
        <td
            colSpan={colSpan}
            rowSpan={rowSpan}
            className={className}
            data-test={dataTest}
        >
            <ContentWithTitle title={realTitle}>{children}</ContentWithTitle>

            <style jsx>{`
                td {
                    border-bottom: 1px solid ${colors.grey300};
                    padding: 0 12px;
                    font-size: 14px;
                    width: 100%;
                    display: block;
                }

                td:last-child {
                    border-bottom: 0;
                }
            `}</style>
        </td>
    )
}

StackedTableCell.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    column: PropTypes.number,
    dataTest: PropTypes.string,
    headerLabels: PropTypes.arrayOf(PropTypes.string),
    hideTitle: PropTypes.bool,
    rowSpan: PropTypes.string,
    title: PropTypes.string,
}

StackedTableCell.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablecell',
    headerLabels: [],
}
