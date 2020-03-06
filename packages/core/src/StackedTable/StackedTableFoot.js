import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {StackedTableFoot.PropTypes}
 * @returns {React.Component}
 * @example import { StackedTableFoot } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/stackedtable--default|Storybook}
 */
export const StackedTableFoot = ({ children, className, dataTest }) => (
    <tfoot className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            tfoot {
                display: block;
                margin-top: 32px;
            }
        `}</style>
    </tfoot>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [children]
 * Has to be instance of StackedTableRow
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
StackedTableFoot.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

StackedTableFoot.defaultProps = {
    dataTest: 'dhis2-uicore-stackedtablefoot',
}
