import classNames from 'classnames'
import { Layout } from '../Layout'
import { topbarLayoutStyles } from './TopbarLayout.styles'
import { LayoutContent } from '../LayoutContent'

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
