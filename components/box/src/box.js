import PropTypes from 'prop-types'
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

Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    height: PropTypes.string,
    marginTop: PropTypes.string,
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string,
    minHeight: PropTypes.string,
    minWidth: PropTypes.string,
    overflow: PropTypes.string,
    width: PropTypes.string,
}
