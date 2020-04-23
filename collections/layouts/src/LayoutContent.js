import classNames from 'classnames'
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
