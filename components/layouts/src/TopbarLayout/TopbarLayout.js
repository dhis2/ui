import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Layout } from '../Layout'
import { LayoutContent } from '../LayoutContent'
import { topbarLayoutStyles } from './TopbarLayout.styles'

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

TopbarLayout.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object),
    ]),
    style: PropTypes.instanceOf(Object),
}
