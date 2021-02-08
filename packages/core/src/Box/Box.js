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
    marginTop,
    children,
    dataTest,
    className,
}) => (
    <div data-test={dataTest} className={className}>
        {children}
        <style jsx>{`
            div {
                ${marginTop ? `margin-top: ${marginTop};` : ''}
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
 * @prop {node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest=dhis2-uicore-box]
 * @prop {string} [height]
 * @prop {string} [marginTop]
 * @prop {string} [maxHeight]
 * @prop {string} [maxWidth]
 * @prop {string} [minHeight]
 * @prop {string} [minWidth]
 * @prop {string} [overflow]
 * @prop {string} [width]
 */
Box.propTypes = {
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
