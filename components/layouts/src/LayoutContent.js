import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { layoutContentStyles } from './Layout.styles'

export const LayoutContent = ({ className, style, children }) => (
    <div
        className={classNames(
            className,
            layoutContentStyles.className,
            'layoutContentContainer'
        )}
        style={style}
    >
        {layoutContentStyles.styles}
        {children}
    </div>
)

LayoutContent.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object),
    ]),
    style: PropTypes.instanceOf(Object),
}
