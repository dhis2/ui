import classNames from 'classnames'
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
