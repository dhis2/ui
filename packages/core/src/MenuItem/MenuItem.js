import propTypes from '@dhis2/prop-types'
import { ChevronRight } from '@dhis2/ui-icons'
import cx from 'classnames'
import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { FlyoutMenu } from '../FlyoutMenu/FlyoutMenu.js'
import { useLayerContext } from '../Layer/Layer.js'
import { Popper } from '../Popper/Popper.js'
import styles from './MenuItem.styles.js'

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
    active: propTypes.bool,
    chevron: propTypes.bool,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    destructive: propTypes.bool,
    disabled: propTypes.bool,
    href: propTypes.string,
    icon: propTypes.node,
    label: propTypes.node,
    showSubMenu: propTypes.bool,
    target: propTypes.string,
    toggleSubMenu: propTypes.func,
    value: propTypes.string,
    onClick: propTypes.func,
}

export { MenuItem }
