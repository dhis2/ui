import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import React from 'react'
import { addColNumToChildren } from './add-col-num-to-children.js'
import { supplyHeaderLabelsToChildren } from './supply-header-labels-to-children.js'
import { Consumer } from './table-context.js'

/**
 * @module
 * @param {StackedTableRow.PropTypes}
 * @returns {React.Component}
 * @example import { StackedTableRow } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/stackedtable--default|Storybook}
 */
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * Has to be instance of StackedTableCell or StackedTableCellHead
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
StackedTableRow.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTableRow.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablerow',
}
