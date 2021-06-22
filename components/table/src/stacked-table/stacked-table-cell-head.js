import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import React from 'react'

export const StackedTableCellHead = ({
    children,
    className,
    colSpan,
    dataTest,
    rowSpan,
}) => (
    <th
        colSpan={colSpan}
        rowSpan={rowSpan}
        className={className}
        data-test={dataTest}
    >
        {children && <div>{children}</div>}

        <style jsx>{`
            th {
                border-bottom: 1px solid ${colors.grey300};
                padding: 0 12px;
            }

            div {
                min-height: 36px;
            }
        `}</style>
    </th>
)

StackedTableCellHead.propTypes = {
    children: propTypes.string,
    className: propTypes.string,
    colSpan: propTypes.string,
    dataTest: propTypes.string,
    rowSpan: propTypes.string,
}

StackedTableCellHead.defaultProps = {
    children: '',
    dataTest: 'dhis2-uicore-stackedtablecellhead',
}
