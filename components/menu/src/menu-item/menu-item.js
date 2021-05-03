import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { FlyoutMenu } from '@dhis2/ui-flyout-menu'
import { Popper } from '@dhis2/ui-popper'
import { useLayerContext } from '@dhis2/ui-layer'
import styles from './menu-item.styles.js'

// TODO: replace with ui-icons
function ChevronRight({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}
ChevronRight.propTypes = {
    className: propTypes.string,
}


const createOnClickHandler = (onClick, toggleSubMenu, value) => evt => {
    if (onClick || toggleSubMenu) {
        evt.preventDefault()
        evt.stopPropagation()

        onClick && onClick({ value }, evt)
        toggleSubMenu && toggleSubMenu()
    }
}
/**
 * @module
 * @param {MenuItem.PropTypes}
 * @returns {React.Component}
 *
 * @example import { MenuItem } from '@dhis2/ui
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/components-core-menulist--default|Storybook}
 */
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
                            ? createOnClickHandler(
                                  onClick,
                                  toggleSubMenu,
                                  value
                              )
                            : undefined
                    }
                >
                    {icon && <span className="icon">{icon}</span>}

                    <span className="label">{label}</span>

                    {(chevron || children) && (
                        <span className="chevron">
                            <ChevronRight />
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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {boolean} [active]
 * @prop {boolean} [chevron]
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest='dhis2-uicore-menuitem']
 * @prop {boolean} [dense]
 * @prop {boolean} [destructive]
 * @prop {boolean} [disabled]
 * @prop {string} [href]
 * @prop {Node} [icon]
 * @prop {Node} [label]
 * @prop {boolean} [showSubMenu]
 * @prop {string} [target]
 * @prop {function} [toggleSubMenu]
 * @prop {string} [value]
 * @prop {function} [onClick] - Click handler called with `value` in the payload
 */
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
