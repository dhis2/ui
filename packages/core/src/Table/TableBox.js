import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'
import { Box } from '../Box/Box.js'

const { className: tableClassName, styles } = css.resolve`
    div {
        border-right: 1px solid ${colors.grey300};
        box-sizing: border-box;
    }
    div > :global(table) :global(tr) :global(td:last-child),
    div > :global(table) :global(tr) :global(th:last-child) {
        border-right: none;
    }
`

/**
 * @module
 * @param {TableBox.PropTypes} props
 * @returns {React.Component}
 * @example import { TableBox } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableBox = ({ className, children, dataTest, ...props }) => (
    <Box
        className={cx(className, tableClassName)}
        dataTest={dataTest}
        {...props}
    >
        {children}
        {styles}
    </Box>
)

TableBox.propTypes = {
    dataTest: 'dhis2-uicore-tablebox',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-tablebox]
 */
TableBox.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}
