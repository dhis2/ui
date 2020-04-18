import { topbarStyles } from './TopbarLayout.styles'
import classNames from 'classnames'
import { LayoutOverlay } from '../LayoutOverlay'

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
