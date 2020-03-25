import React, { forwardRef } from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

import { ChevronRight } from '../icons/Chevron.js'
import styles from './MenuItemContent/styles.js'

const subChevron = css.resolve`
    svg {
        margin: 0 -14px 0 auto;
        width: 18px;
        height: 18px;
        pointer-events: none;
        user-select: none;
    }
`

const createOnClickHandler = (onClick, value) => evt => {
    if (onClick) {
        evt.preventDefault()
        evt.stopPropagation()
        onClick({ value }, evt)
    }
}

const MenuItemContent = forwardRef(
    (
        {
            href,
            onClick,
            onMouseOver,
            onMouseOut,
            target,
            icon,
            label,
            value,
            className,
            destructive,
            disabled,
            dense,
            active,
            dataTest,
            showChevron,
        },
        ref
    ) => {
        const isClickable = href || onClick
        const LinkElement = isClickable ? 'a' : 'span'
        const linkElementProps = isClickable
            ? {
                  href,
                  onClick: createOnClickHandler(onClick, value),
              }
            : {}

        return (
            <li
                className={cx(className, {
                    destructive,
                    disabled,
                    dense,
                    active,
                })}
                ref={ref}
                data-test={dataTest}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            >
                <LinkElement
                    className="link"
                    target={target}
                    {...linkElementProps}
                >
                    {icon}
                    <div className="label">{label}</div>

                    {showChevron && (
                        <ChevronRight className={subChevron.className} />
                    )}
                    {subChevron.styles}
                </LinkElement>

                <style jsx>{styles}</style>
            </li>
        )
    }
)
MenuItemContent.displayName = 'MenuItemContent'

MenuItemContent.propTypes = {
    active: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    destructive: propTypes.bool,
    disabled: propTypes.bool,
    href: propTypes.string,
    icon: propTypes.element,
    label: propTypes.oneOfType([propTypes.string, propTypes.node]),
    showChevron: propTypes.bool,
    target: propTypes.string,
    value: propTypes.string,
    onClick: propTypes.func,
    onMouseOut: propTypes.func,
    onMouseOver: propTypes.func,
}

export { MenuItemContent }
