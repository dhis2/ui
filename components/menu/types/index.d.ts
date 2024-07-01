import * as React from 'react'

export interface FlyoutMenuProps {
    /**
     * Typically, but not limited to, `MenuItem` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Menu uses smaller dimensions
     */
    dense?: boolean
    maxHeight?: string
    maxWidth?: string
}

export const FlyoutMenu: React.FC<FlyoutMenuProps>

export interface MenuProps {
    /**
     * Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader`
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Applies `dense` property to all child components unless already specified
     */
    dense?: boolean
}

export const Menu: React.FC<MenuProps>

export interface MenuDividerProps {
    className?: string
    dataTest?: string
    dense?: boolean
}

export const MenuDivider: React.FC<MenuDividerProps>

export interface MenuItemProps {
    active?: boolean
    /**
     * Specifies if menu item is a checkbox
     */
    checkbox?: boolean
    /**
     * checkbox state for toggleable menu items
     */
    checked?: boolean
    chevron?: boolean
    /**
     * Nested menu items can become submenus.
     * See `showSubMenu` and `toggleSubMenu` props, and 'Children' demo
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    dense?: boolean
    destructive?: boolean
    disabled?: boolean
    /**
     * For using menu item as a link
     */
    href?: string
    /**
     * An icon for the left side of the menu item
     */
    icon?: React.ReactNode
    /**
     * Text in the menu item
     */
    label?: React.ReactNode
    /**
     * When true, nested menu items are shown in a Popper
     */
    showSubMenu?: boolean
    /**
     * A supporting element shown at the end of the menu item
     */
    suffix: React.ReactNode
    tabIndex?: number
    /**
     * For using menu item as a link
     */
    target?: string
    /**
     * On click, this function is called (without args)
     */
    toggleSubMenu?: () => void
    /**
     * Value associated with item. Passed as an argument to onClick handler.
     */
    value?: string
    /**
     * Click handler called with signature `({ value: string }, event)`
     */
    onClick?: (
        payload: { value: string | undefined },
        event: React.MouseEvent<HTMLAnchorElement>
    ) => void
}

export const MenuItem: React.FC<MenuItemProps>

export interface MenuSectionHeaderProps {
    className?: string
    dataTest?: string
    dense?: boolean
    hideDivider?: boolean
    label?: React.ReactNode
}

export const MenuSectionHeader: React.FC<MenuSectionHeaderProps>
