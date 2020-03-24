import propTypes from '@dhis2/prop-types'
import React from 'react'

/**
 * @module
 *
 * @param {Box.PropTypes} props
 * @returns {React.Component}
 */
export const Box = ({
    overflow,
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    children,
    dataTest,
}) => (
    <div data-test={dataTest}>
        {children}
        <style jsx>{`
            div {
                ${height ? `height: ${height};` : ''}
                ${minHeight ? `min-height: ${minHeight};` : ''}
                ${maxHeight ? `max-height: ${maxHeight};` : ''}
                ${width ? `width: ${width};` : ''}
                ${minWidth ? `min-width: ${minWidth};` : ''}
                ${maxWidth ? `max-width: ${maxWidth};` : ''}
                ${overflow ? `overflow: ${overflow};` : ''}
            }
        `}</style>
    </div>
)

Box.defaultProps = {
    dataTest: 'dhis2-uicore-box',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [height]
 * @prop {string} [minHeight]
 * @prop {string} [maxHeight]
 * @prop {string} [width]
 * @prop {string} [minWidth]
 * @prop {string} [maxWidth]
 * @prop {string} [dataTest]
 */
Box.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
    height: propTypes.string,
    maxHeight: propTypes.string,
    maxWidth: propTypes.string,
    minHeight: propTypes.string,
    minWidth: propTypes.string,
    overflow: propTypes.string,
    width: propTypes.string,
}
