import { layoutStyles } from './Layout.styles'
import classNames from 'classnames'

export const Layout = ({ className, style, children }) => (
    <div className={classNames(className, 'layoutContainer')} style={style}>
        <style jsx>{layoutStyles}</style>
        {children}
    </div>
)
