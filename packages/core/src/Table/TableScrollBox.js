import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'
import { Box } from '../Box/Box.js'

const { className: tableClassName, styles } = css.resolve`
    div {
        border: 1px solid ${colors.grey300};
        box-sizing: border-box;
    }
    div > :global(table) :global(tr) :global(td:first-child),
    div > :global(table) :global(tr) :global(th:first-child) {
        border-left: none;
    }
    div > :global(table) :global(tr) :global(td:last-child),
    div > :global(table) :global(tr) :global(th:last-child) {
        border-right: none;
    }
    div > :global(table) > :global(tr:first-child) :global(th),
    div
        > :global(table)
        > :global(thead)
        > :global(tr:first-child)
        :global(th) {
        border-top: none;
    }
    div > :global(table) > :global(tr:last-child) :global(td),
    div > :global(table) > :global(tfoot) > :global(tr:last-child) :global(td) {
        border-bottom: none;
    }
`

/**
 * @module
 * @param {TableScrollBox.PropTypes} props
 * @returns {React.Component}
 * @example import { TableScrollBox } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const TableScrollBox = ({ className, children, dataTest, ...props }) => (
    <Box
        className={cx(className, tableClassName)}
        dataTest={dataTest}
        {...props}
    >
        {children}
        {styles}
    </Box>
)

TableScrollBox.propTypes = {
    dataTest: 'dhis2-uicore-tablebox',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {TableRow|Array.<TableRow>} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-tablebox]
 */
TableScrollBox.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}
