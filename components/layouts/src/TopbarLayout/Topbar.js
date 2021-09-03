import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { LayoutOverlay } from '../LayoutOverlay'
import { topbarStyles } from './TopbarLayout.styles'

export const Topbar = ({ className, style, children }) => (
    <LayoutOverlay
        className={classNames(
            className,
            topbarStyles.className,
            'topbarContainer'
        )}
        style={style}
    >
        {topbarStyles.styles}
        {children}
    </LayoutOverlay>
)

Topbar.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object),
    ]),
    style: PropTypes.instanceOf(Object),
}
