import classNames from 'classnames'
import { layoutContentStyles } from './layout.styles.js'

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
