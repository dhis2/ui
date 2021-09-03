import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Layout } from '../Layout'
import { LayoutContent } from '../LayoutContent'
import { sidebarLayoutStyles } from './SidebarLayout.styles'

export const SidebarLayout = ({
    className,
    style,
    children,
    side,
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

SidebarLayout.defaultProps = {
    side: 'left',
}

SidebarLayout.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object),
    ]),
    side: PropTypes.string,
    style: PropTypes.instanceOf(Object),
}
