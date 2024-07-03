import PropTypes from 'prop-types'
import React, { Children, cloneElement, isValidElement, useMemo } from 'react'
import { hasMenuItemRole } from './helpers.js'
import { useMenuNavigation } from './use-menu.js'

const Menu = ({ children, className, dataTest, dense }) => {
    const { menuRef, focusedIndex } = useMenuNavigation(children)

    const memoizedChildren = useMemo(() => children, [children])

    const childrenToRender = useMemo(() => {
        console.log('Memoised function called') // should only be called once
        return Children.map(memoizedChildren, (child, index) => {
            if (!isValidElement(child)) {
                return child
            }
            const tabIndex = index === focusedIndex ? 0 : -1

            const childProps = {
                ...child.props,
            }

            // this check is based on the type of child.
            // if it is a native HTML element, like li, a, span, only apply its child props
            // if it is a functional (React) component, it applies custom props, like dense, hideDivider, etc
            if (typeof child.type === 'string') {
                // if the native HTML element child is not li, then wrap it in an li tag
                // apply the tabindex prop if a child has the menuitem role to make it focusable
                if (child.type === 'li') {
                    return hasMenuItemRole(child.props.children[0])
                        ? cloneElement(child, { ...childProps, tabIndex })
                        : cloneElement(child, childProps)
                } else {
                    return (
                        <li tabIndex={hasMenuItemRole(child) ? tabIndex : null}>
                            {cloneElement(child, childProps)}
                        </li>
                    )
                }
            } else {
                childProps.dense =
                    typeof child.props.dense === 'boolean'
                        ? child.props.dense
                        : dense
                childProps.hideDivider =
                    typeof child.props.hideDivider !== 'boolean' && index === 0
                        ? true
                        : child.props.hideDivider
                return cloneElement(child, { ...childProps, tabIndex })
            }
        })
    }, [memoizedChildren, dense, focusedIndex])

    return (
        <ul
            className={className}
            data-test={dataTest}
            role="menu"
            ref={menuRef}
            tabIndex={0}
        >
            {childrenToRender}
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
