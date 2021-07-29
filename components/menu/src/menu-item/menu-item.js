import { useLayerContext } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { IconChevronRight24 } from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { FlyoutMenu } from '../index.js'
import styles from './menu-item.styles.js'

const isModifiedEvent = evt =>
    evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey

const createOnClickHandler = ({
    onClick,
    toggleSubMenu,
    isLink,
    value,
}) => evt => {
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
    dataTest,
    chevron,
    value,
    label,
    showSubMenu,
    toggleSubMenu,
}) => {
    const menuItemRef = useRef()
    const { node } = useLayerContext()

    return (
        <>
            <li
                className={cx(className, {
                    destructive,
                    disabled,
                    dense,
                    active: active || showSubMenu,
                    'with-chevron': chevron,
                })}
                ref={menuItemRef}
                data-test={dataTest}
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
                >
                    {icon && <span className="icon">{icon}</span>}

                    <span className="label">{label}</span>

                    {(chevron || children) && (
                        <span className="chevron">
                            <IconChevronRight24 />
                        </span>
                    )}
                </a>

                <style jsx>{styles}</style>
            </li>
            {children &&
                showSubMenu &&
                createPortal(
                    <Popper placement="right-start" reference={menuItemRef}>
                        <FlyoutMenu dense={dense}>{children}</FlyoutMenu>
                    </Popper>,
                    node
                )}
        </>
    )
}

MenuItem.defaultProps = {
    dataTest: 'dhis2-uicore-menuitem',
}

MenuItem.propTypes = {
    active: PropTypes.bool,
    chevron: PropTypes.bool,
    /**
     * Nested menu items can become submenus.
     * See `showSubMenu` and `toggleSubMenu` props, and 'Children' demo
     */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    destructive: PropTypes.bool,
    disabled: PropTypes.bool,
    /** For using menu item as a link */
    href: PropTypes.string,
    /** An icon for the left side of the menu item */
    icon: PropTypes.node,
    /** Text in the menu item */
    label: PropTypes.node,
    /** When true, nested menu items are shown in a Popper */
    showSubMenu: PropTypes.bool,
    /** For using menu item as a link */
    target: PropTypes.string,
    /** On click, this function is called (without args) */
    toggleSubMenu: PropTypes.func,
    /** Value associated with item. Passed as an argument to onClick handler. */
    value: PropTypes.string,
    /** Click handler called with signature `({ value: string }, event)` */
    onClick: PropTypes.func,
}

export { MenuItem }
