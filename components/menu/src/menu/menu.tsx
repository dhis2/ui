import React, { Children, cloneElement, isValidElement, useMemo } from 'react'
import { hasMenuItemRole } from './helpers.ts'
import { useMenuNavigation } from './use-menu.ts'

export interface MenuProps {
    /** Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader` */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Applies `dense` property to all child components unless already specified */
    dense?: boolean
}

const Menu = ({
    children,
    className,
    dataTest = 'dhis2-uicore-menulist',
    dense,
}: MenuProps) => {
    const { menuRef, focusedIndex } = useMenuNavigation(children)

    const childrenToRender = useMemo(
        () =>
            Children.map(children, (child, index) => {
                if (!isValidElement(child)) {
                    return child
                }
                const tabIndex = index === focusedIndex ? 0 : -1

                const childProps: Record<string, unknown> = {
                    ...child.props,
                }

                // this check is based on the type of child.
                // if it is a native HTML element, like li, a, span, only apply its child props
                // if it is a functional (React) component, it applies custom props, like dense, hideDivider, etc
                const typedChild = child as React.ReactElement<
                    Record<string, unknown>
                >

                if (typeof child.type === 'string') {
                    // if the native HTML element child is not li, then wrap it in an li tag
                    // apply the tabindex prop if a child has the menuitem role to make it focusable
                    if (child.type === 'li') {
                        return hasMenuItemRole(
                            (childProps as { children?: React.ReactElement[] })
                                .children?.[0] as React.ReactElement
                        )
                            ? cloneElement(typedChild, {
                                  ...childProps,
                                  tabIndex,
                              })
                            : cloneElement(typedChild, childProps)
                    } else {
                        return (
                            <li
                                tabIndex={
                                    hasMenuItemRole(child as React.ReactElement)
                                        ? tabIndex
                                        : undefined
                                }
                            >
                                {cloneElement(typedChild, childProps)}
                            </li>
                        )
                    }
                } else {
                    childProps.dense =
                        typeof typedChild.props.dense === 'boolean'
                            ? typedChild.props.dense
                            : dense
                    childProps.hideDivider =
                        typeof typedChild.props.hideDivider !== 'boolean' &&
                        index === 0
                            ? true
                            : typedChild.props.hideDivider
                    return cloneElement(typedChild, {
                        ...childProps,
                        tabIndex,
                    })
                }
            }),
        [children, dense, focusedIndex]
    )

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

export { Menu }
