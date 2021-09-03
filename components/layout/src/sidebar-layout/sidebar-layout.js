import classNames from 'classnames'
import { Layout, LayoutContent } from '../index.js'
import { sidebarLayoutStyles } from './sidebar-layout.styles.js'

export const SidebarLayout = ({
    className,
    style,
    children,
    side = 'left',
}) => (
    <Layout
        className={classNames(
            className,
            sidebarLayoutStyles.className,
            'sidebarLayoutContainer',
            `sidebarSide-${side}`
        )}
        style={style}
    >
        {sidebarLayoutStyles.styles}
        {children[0] && React.cloneElement(children[0], { side })}
        <LayoutContent>{children[1]}</LayoutContent>
    </Layout>
)
