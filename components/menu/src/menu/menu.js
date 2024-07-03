import PropTypes from 'prop-types'
import React, { Children, cloneElement, isValidElement } from 'react'
import { hasMenuItemRole } from './helpers.js'
import { useMenuNavigation } from './use-menu.js'

const Menu = ({ children, className, dataTest, dense }) => {
    const { menuRef, focusedIndex } = useMenuNavigation(children)

    const childrenToRender = Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
            return child
        }
        const tabIndex = index === focusedIndex ? 0 : -1

        const childProps = {
            ...child.props,
        }

        if (typeof child.type === 'string') {
            // remove non-native props from native HTML elements
            delete childProps.hideDivider
            delete childProps.dense
            delete childProps.active

            // all ul children must be li elements
            // add tabindex for focus to those elements that are/contain a menuitem
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
            // assign non-native props to custom elements
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
