import PropTypes from 'prop-types'
import React, { Children, cloneElement, isValidElement } from 'react'
import { useMenuNavigation } from './use-menu.js'

const Menu = ({ children, className, dataTest, dense }) => {
    const { menuRef, focusedIndex } = useMenuNavigation(children)
    return (
        <ul
            className={className}
            data-test={dataTest}
            role="menu"
            ref={menuRef}
            tabIndex={0}
        >
            {Children.map(children, (child, index) => {
                if (!isValidElement(child)) {
                    return child
                }
                const tabIndex = index === focusedIndex ? 0 : -1

                const childProps = {
                    tabIndex,
                    ...child.props,
                }
                // remove non native props from native elements
                if (typeof child.type === 'string') {
                    delete childProps.hideDivider
                    delete childProps.dense
                    delete childProps.active
                } else {
                    // assign non native props to custom elements
                    childProps.active = index === focusedIndex
                    childProps.dense =
                        typeof child.props.dense === 'boolean'
                            ? child.props.dense
                            : dense
                    childProps.hideDivider =
                        typeof child.props.hideDivider !== 'boolean' &&
                        index === 0
                            ? true
                            : child.props.hideDivider
                }
                return cloneElement(child, childProps)
            })}

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
}

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
