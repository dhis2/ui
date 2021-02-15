import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'
import { Box } from '../Box/Box.js'

const { className: tableClassName, styles } = css.resolve`
    div {
        border: 1px solid ${colors.grey300};
        border-top: none;
        box-sizing: border-box;
    }
    div > :global(table) {
        border: none;
    }
`

/**
 * @module
 * @param {TableScrollBox.PropTypes} props
 * @returns {React.Component}
 * @example import { TableScrollBox } from '@dhis2/ui'
 * @see Live demo: {@link /demo/?path=/story/table--fixed-header|Storybook}
 */
export const TableScrollBox = ({
    children,
    className,
    dataTest,
    height,
    marginTop,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    overflow,
    width,
}) => (
    <Box
        className={cx(className, tableClassName)}
        dataTest={dataTest}
        height={height}
        marginTop={marginTop}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        minHeight={minHeight}
        minWidth={minWidth}
        overflow={overflow}
        width={width}
    >
        {children}
        {styles}
    </Box>
)

TableScrollBox.propTypes = {
    dataTest: 'dhis2-uicore-tablescrollbox',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-tablescrollbox]
 * @prop {string} [height]
 * @prop {string} [marginTop]
 * @prop {string} [maxHeight]
 * @prop {string} [maxWidth]
 * @prop {string} [minHeight]
 * @prop {string} [minWidth]
 * @prop {string} [overflow]
 * @prop {string} [width]
 */
TableScrollBox.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    height: propTypes.string,
    marginTop: propTypes.string,
    maxHeight: propTypes.string,
    maxWidth: propTypes.string,
    minHeight: propTypes.string,
    minWidth: propTypes.string,
    overflow: propTypes.string,
    width: propTypes.string,
}
