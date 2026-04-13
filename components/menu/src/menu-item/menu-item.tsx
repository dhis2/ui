import { IconChevronRight24 } from '@dhis2/ui-icons'
import { Popper } from '@dhis2-ui/popper'
import { Portal } from '@dhis2-ui/portal'
import cx from 'classnames'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { FlyoutMenu } from '../flyout-menu/index.ts'
import styles from './menu-item.styles.ts'

export interface MenuItemProps {
    active?: boolean
    /**
     * By default, the label prop is used for the aria-label attribute on the
     * underlying HTML element. If this prop is defined, it will be used as the
     * aria-label instead
     */
    ariaLabel?: string
    checkbox?: boolean
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
    /** For using menu item as a link */
    href?: string
    /** An icon for the left side of the menu item */
    icon?: React.ReactNode
    /** Text in the menu item. If it's a string, will be used as aria-label */
    label?: React.ReactNode
    /** When true, nested menu items are shown in a Popper */
    showSubMenu?: boolean
    /** A supporting element shown at the end of the menu item */
    suffix?: React.ReactNode
    tabIndex?: number
    /** For using menu item as a link */
    target?: string
    /** On click, this function is called (without args) */
    toggleSubMenu?: () => void
    /** Value associated with item. Passed as an argument to onClick handler. */
    value?: string
    /** Click handler called with signature `({ value: string }, event)` */
    onClick?: (
        payload: { value?: string },
        event: React.MouseEvent<HTMLAnchorElement>
    ) => void
}

const isModifiedEvent = (evt: React.MouseEvent) =>
    evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey

const createOnClickHandler =
    ({
        onClick,
        toggleSubMenu,
        isLink,
        value,
    }: {
        onClick?: MenuItemProps['onClick']
        toggleSubMenu?: () => void
        isLink: boolean
        value?: string
    }) =>
    (evt: React.MouseEvent<HTMLAnchorElement>) => {
        if ((isLink && isModifiedEvent(evt)) || !(onClick || toggleSubMenu)) {
            return
        }
        evt.preventDefault()
        evt.stopPropagation()

        onClick && onClick({ value }, evt)
        toggleSubMenu && toggleSubMenu()
    }

const MenuItem = ({
    href,
    onClick,
    children,
    target,
    icon,
    className,
    destructive,
    disabled,
    dense,
    active,
    dataTest = 'dhis2-uicore-menuitem',
    chevron,
    value,
    label,
    ariaLabel,
    showSubMenu,
    toggleSubMenu,
    suffix,
    checkbox,
    checked,
    tabIndex,
}: MenuItemProps) => {
    const menuItemRef = useRef<HTMLLIElement>(null)
    const [openSubMenus, setOpenSubMenus] = useState<NodeListOf<Element>>(
        document.querySelectorAll('[data-submenu-open=true]')
    )

    useEffect(() => {
        // track open submenus
        setOpenSubMenus(document.querySelectorAll('[data-submenu-open=true]'))
    }, [])

    useEffect(() => {
        if (!menuItemRef.current) {
            return
        }

        const menuItem = menuItemRef.current

        const handleKeyDown = (event: KeyboardEvent) => {
            const firstChild = (event.target as HTMLElement)
                .children[0] as HTMLElement | undefined
            const hasSubMenu = firstChild?.getAttribute('aria-haspopup')
            switch (event.key) {
                // for submenus
                case 'ArrowRight':
                    event.preventDefault()
                    if (hasSubMenu) {
                        firstChild?.click()
                    }
                    break
                case 'ArrowLeft':
                case 'Escape': // close flyout menu
                    event.preventDefault()
                    ;(
                        openSubMenus[openSubMenus.length - 1] as HTMLElement
                    )?.focus()
                    ;(
                        (
                            openSubMenus[openSubMenus.length - 1] as HTMLElement
                        )?.children[0] as HTMLElement
                    )?.click()
                    break
            }
        }

        menuItem.addEventListener('keydown', handleKeyDown)

        return () => {
            menuItem.removeEventListener('keydown', handleKeyDown)
        }
    }, [openSubMenus])

    const resolvedAriaLabel = useMemo(() => {
        if (typeof label !== 'string' && ariaLabel === undefined) {
            console.debug(
                'The label prop on MenuItem is not a string; a value for the ariaLabel prop should be provided'
            )
        }

        return ariaLabel ?? (typeof label === 'string' ? label : undefined)
    }, [ariaLabel, label])

    return (
        <>
            <li
                className={cx(className, {
                    destructive,
                    disabled,
                    dense,
                    active: active || showSubMenu,
                    'with-chevron': children || chevron,
                })}
                ref={menuItemRef}
                data-test={dataTest}
                role="presentation"
                tabIndex={tabIndex}
                data-submenu-open={children && showSubMenu}
            >
                <a
                    target={target}
                    href={!disabled && href ? href : undefined}
                    onClick={
                        !disabled
                            ? createOnClickHandler({
                                  onClick,
                                  toggleSubMenu,
                                  isLink: !!href,
                                  value,
                              })
                            : undefined
                    }
                    role={checkbox ? 'menuitemcheckbox' : 'menuitem'}
                    aria-checked={checkbox ? checked : undefined}
                    aria-disabled={disabled}
                    aria-haspopup={children ? 'menu' : undefined}
                    aria-expanded={showSubMenu}
                    aria-label={resolvedAriaLabel}
                >
                    {icon && <span className="icon">{icon}</span>}

                    <span className="label">{label}</span>

                    {suffix && <span className="suffix">{suffix}</span>}

                    {(chevron || children) && (
                        <span className="chevron">
                            <IconChevronRight24 />
                        </span>
                    )}
                </a>

                <style jsx>{styles}</style>
            </li>
            {children && showSubMenu && (
                <Portal>
                    <Popper placement="right-start" reference={menuItemRef}>
                        <FlyoutMenu dense={dense}>{children}</FlyoutMenu>
                    </Popper>
                </Portal>
            )}
        </>
    )
}

export { MenuItem }
