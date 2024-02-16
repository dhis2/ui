import PropTypes from 'prop-types'
import React, { Children, cloneElement, isValidElement } from 'react'

const Menu = ({ children, className, dataTest, dense }) => (
    <ul className={className} data-test={dataTest} tabIndex={0} role="menu">
        {Children.map(
            children,
            (child, index) =>
                isValidElement(child)
                    ? cloneElement(child, {
                          dense:
                              typeof child.props.dense === 'boolean'
                                  ? child.props.dense
                                  : dense,
                          hideDivider:
                              typeof child.props.hideDivider !== 'boolean' &&
                              index === 0
                                  ? true
                                  : child.props.hideDivider,
                      })
                    : child // to do: role = menuitem
        )}

        <style jsx>{`
            ul {
                display: block;
                position: relative;
                width: 100%;
                margin: 0;

                padding: 0;
                user-select: none;
            }
        `}</style>
    </ul>
)

Menu.defaultProps = {
    dataTest: 'dhis2-uicore-menulist',
}

Menu.propTypes = {
    /** Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader` */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Applies `dense` property to all child components unless already specified */
    dense: PropTypes.bool,
}

export { Menu }
