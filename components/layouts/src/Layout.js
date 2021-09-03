import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { layoutStyles } from './Layout.styles'

export const Layout = ({ className, style, children }) => (
    <div className={classNames(className, 'layoutContainer')} style={style}>
        <style jsx>{layoutStyles}</style>
        {children}
    </div>
)

Layout.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object),
    ]),
    style: PropTypes.instanceOf(Object),
}
