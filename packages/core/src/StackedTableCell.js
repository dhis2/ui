import React from 'react'
import propTypes from 'prop-types'

import { ContentWithTitle } from './StackedTableCell/ContentWithTitle.js'
import { colors } from '@dhis2/ui-constants'

/**
 * @module
 * @param {StackedTableCell.PropTypes}
 * @returns {React.Component}
 * @example import { StackedTableCell } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/stackedtable--default|Storybook}
 */
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [colSpan]
 * @prop {number} [column]
 * @prop {string} [dataTest]
 * @prop {boolean} [hideTitle]
 * @prop {boolean} [rowSpan]
 * @prop {string} [title]
 */
StackedTableCell.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    colSpan: propTypes.string,
    column: propTypes.number,
    dataTest: propTypes.string,
    headerLabels: propTypes.arrayOf(propTypes.string),
    hideTitle: propTypes.bool,
    rowSpan: propTypes.string,
    title: propTypes.string,
}

StackedTableCell.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablecell',
    headerLabels: [],
}
