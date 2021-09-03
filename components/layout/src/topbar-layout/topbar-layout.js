import classNames from 'classnames'
import { Layout, LayoutContent } from '../index.js'
import { topbarLayoutStyles } from './topbar-layout.styles.js'

export const TopbarLayout = ({ className, style, children }) => (
    <Layout
        className={classNames(
            className,
            topbarLayoutStyles.className,
            'topbarLayoutContainer'
        )}
        style={style}
    >
        {topbarLayoutStyles.styles}
        {children[0]}
        <LayoutContent>{children[1]}</LayoutContent>
    </Layout>
)
