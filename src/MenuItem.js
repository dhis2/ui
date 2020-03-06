import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { ChevronRight } from './icons/Chevron.js'
import styles from './MenuItem/styles.js'

const subChevron = css.resolve`
    svg {
        margin: 0 -14px 0 auto;
        width: 18px;
        height: 18px;
        pointer-events: none;
        user-select: none;
    }
`

const subMenu = css.resolve`
    div {
        display: none;
        position: absolute;
        top: 0;
        left: 100%;
        white-space: nowrap;
    }

    li:hover > :global(span) > :global(div) {
        display: block;
    }
`

const SubMenu = ({ children, className }) => (
    <div className={className}>{children}</div>
)

SubMenu.propTypes = {
    children: propTypes.element,
    className: propTypes.string,
}

const createOnClickHandler = (onClick, value) => evt => {
    if (onClick) {
        evt.preventDefault()
        evt.stopPropagation()
        onClick({ value }, evt)
    }
}

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
    const hasMenu = !!children
    const isClickable = href || onClick
    const LinkElement = isClickable ? 'a' : 'span'
    const linkElementProps = {}

    if (isClickable) {
        linkElementProps.href = href
        linkElementProps.onClick = createOnClickHandler(onClick, value)
    }

    return (
        <li
            className={cx(className, subMenu.className, {
                destructive,
                disabled,
                dense,
                active,
            })}
            data-test={dataTest}
        >
            <LinkElement className="link" {...linkElementProps} target={target}>
                {icon}
                <div className="label">{label}</div>

                {hasMenu && <ChevronRight className={subChevron.className} />}
                {subChevron.styles}

                {hasMenu && (
                    <SubMenu className={subMenu.className}>{children}</SubMenu>
                )}
                {subMenu.styles}
            </LinkElement>

            <style jsx>{styles}</style>
        </li>
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
