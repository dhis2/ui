import React from 'react'
import propTypes from '@dhis2/prop-types'

import { MenuItemContent } from './MenuItem/MenuItemContent'
import { SubMenu } from './MenuItem/SubMenu'

/**
 * @module
 * @param {MenuItem.PropTypes}
 * @returns {React.Component}
 *
 * @example import { MenuItem } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/menu--default|Storybook}
 */
const MenuItem = ({
    href,
    value,
    label,
    icon,
    children,
    active,
    destructive,
    disabled,
    dense,
    onClick,
    className,
    target,
    dataTest,
}) => {
    return !children ? (
        <MenuItemContent
            active={active}
            className={className}
            dataTest={dataTest}
            dense={dense}
            destructive={destructive}
            disabled={disabled}
            href={href}
            icon={icon}
            label={label}
            target={target}
            value={value}
            onClick={onClick}
        />
    ) : (
        <SubMenu
            active={active}
            className={className}
            dataTest={dataTest}
            dense={dense}
            destructive={destructive}
            disabled={disabled}
            icon={icon}
            label={label}
        >
            {children}
        </SubMenu>
    )
}

MenuItem.defaultProps = {
    dataTest: 'dhis2-uicore-menuitem',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string|Node} [label]
 * @prop {string} [value]
 * @prop {string} [href]
 * @prop {string} [target]
 * @prop {function} [onClick] - Click handler called with `value` as the sole argument
 * @prop {string} [className]
 * @prop {Element} [children]
 * @prop {Element} [icon]
 * @prop {boolean} [dense]
 * @prop {boolean} [active]
 * @prop {boolean} [destructive]
 * @prop {boolean} [disabled]
 * @prop {string} [dataTest]
 */
MenuItem.propTypes = {
    active: propTypes.bool,
    children: propTypes.element,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    destructive: propTypes.bool,
    disabled: propTypes.bool,
    href: propTypes.string,
    icon: propTypes.element,
    label: propTypes.oneOfType([propTypes.string, propTypes.node]),
    target: propTypes.string,
    value: propTypes.string,
    onClick: propTypes.func,
}

export { MenuItem }
