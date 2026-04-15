import { colors } from '@dhis2/ui-constants'
import React from 'react'
import { addColNumToChildren } from './add-col-num-to-children.ts'
import { supplyHeaderLabelsToChildren } from './supply-header-labels-to-children.ts'
import { Consumer } from './table-context.ts'

export interface StackedTableRowProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableRow: React.FC<StackedTableRowProps> = ({
    children,
    className,
    dataTest = 'dhis2-uicore-stackedtablerow',
}) => (
    <tr className={className} data-test={dataTest}>
        <Consumer>
            {({ headerLabels }) =>
                supplyHeaderLabelsToChildren(
                    headerLabels,
                    addColNumToChildren(children)
                )
            }
        </Consumer>

        <style jsx>{`
            tr {
                min-height: 45px;
                display: block;
                border: 1px solid ${colors.grey300};
            }

            tr:nth-child(even) {
                background: ${colors.white};
            }

            :global(thead) > tr,
            :global(tbody) > tr {
                min-height: 36px;
            }

            tr + tr {
                margin-top: 32px;
            }
        `}</style>
    </tr>
)
