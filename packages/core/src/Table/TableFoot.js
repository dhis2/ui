import PropTypes from 'prop-types'
import React from 'react'

/**
 * @module
 * @param {TableFoot.PropTypes} props
 * @returns {React.Component}
 * @example import { TableFoot } from '@dhis2/ui-core'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableFoot = ({ children, className, dataTest }) => (
    <tfoot className={className} data-test={dataTest}>
        {children}
    </tfoot>
)

TableFoot.defaultProps = {
    dataTest: 'dhis2-uicore-tablefoot',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
TableFoot.propTypes = {
    /** Should be `<TableRow>` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}
