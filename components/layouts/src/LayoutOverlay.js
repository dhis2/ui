import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { layoutOverlayStyles } from './Layout.styles'

export const LayoutOverlay = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={classNames(
                className,
                layoutOverlayStyles.className,
                'layoutOverlayContainer'
            )}
            {...props}
        >
            {layoutOverlayStyles.styles}
            {children}
        </div>
    )
)

LayoutOverlay.displayName = 'LayoutOverlay'

LayoutOverlay.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object),
    ]),
}
