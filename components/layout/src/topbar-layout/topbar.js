import classNames from 'classnames'
import { LayoutOverlay } from '../index.js'
import { topbarStyles } from './topbar-layout.styles.js'

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
