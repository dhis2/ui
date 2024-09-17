import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { addColNumToChildren } from './add-col-num-to-children.js'
import { supplyHeaderLabelsToChildren } from './supply-header-labels-to-children.js'
import { Consumer } from './table-context.js'

export const StackedTableRow = ({ children, className, dataTest }) => (
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

StackedTableRow.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

StackedTableRow.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablerow',
}
