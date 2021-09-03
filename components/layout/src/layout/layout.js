import classNames from 'classnames'
import { layoutStyles } from './layout.styles.js'

export const Layout = ({ className, style, children }) => (
    <div className={classNames(className, 'layoutContainer')} style={style}>
        <style jsx>{layoutStyles}</style>
        {children}
    </div>
)
