import { colors, theme } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Content } from './content.js'
import { Icon } from './icon.js'
import { Remove } from './remove.js'

const DEFAULT_INLINE_MARGIN = '4'

const Chip = ({
    selected,
    dense,
    disabled,
    dragging,
    overflow,
    className,
    children,
    onRemove,
    onClick,
    icon,
    dataTest,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginInlineStart,
    marginInlineEnd,
    component: Component,
    href,
    to,
}) => {
    const handleKeyDown = (event) => {
        if (!onRemove) {
            return
        }
        if (event.key === 'Backspace' || event.key === 'Delete') {
            onRemove({}, event)
        }
    }

    const chipProps = {
        onClick: (e) => {
            if (!disabled && onClick) {
                onClick({}, e)
            }
        },
        onKeyDown: handleKeyDown,
        className: cx('chip', className, {
            selected,
            dense,
            disabled,
            dragging,
        }),
        'data-test': dataTest,
        tabIndex: -1,
        role: 'option',
        'aria-selected': selected ? 'true' : 'false',
        'aria-disabled': disabled ? 'true' : 'false',
    }

    const content = (
        <>
            <Icon icon={icon} dataTest={`${dataTest}-icon`} />
            <Content overflow={overflow}>{children}</Content>
            <Remove onRemove={onRemove} dataTest={`${dataTest}-remove`} />
        </>
    )

    const chipElement =
        Component === 'a' ? (
            <Component {...chipProps} href={href} to={to}>
                {content}
            </Component>
        ) : (
            <span {...chipProps}>{content}</span>
        )

    return (
        <>
            {chipElement}
            <style jsx>{`
                :global(.chip) {
                    display: inline-flex;
                    align-items: center;
                    height: 32px;
                    border-radius: 16px;
                    background-color: ${colors.grey200};
                    font-size: 14px;
                    line-height: 16px;
                    cursor: pointer;
                    user-select: none;
                    color: ${colors.grey900};
                    text-decoration: none;
                    ${marginBottom && `margin-bottom: ${marginBottom}px;`}
                    margin-inline-start: ${marginInlineStart ??
                    marginLeft ??
                    DEFAULT_INLINE_MARGIN}px;
                    margin-inline-end: ${marginInlineEnd ??
                    marginRight ??
                    DEFAULT_INLINE_MARGIN}px;
                    ${marginTop && `margin-top: ${marginTop}px`}
                }

                :global(.chip.dense) {
                    height: 24px;
                    font-size: 13px;
                    line-height: 15px;
                }

                :global(.chip:hover) {
                    background-color: ${colors.grey300};
                }

                :global(.chip.selected) {
                    background-color: ${theme.secondary600};
                    font-weight: 500;
                }

                :global(.chip.selected:hover) {
                    background-color: #00695c;
                }

                :global(.chip.selected),
                :global(.chip.selected .icon),
                :global(.chip.selected .remove-icon) {
                    color: ${colors.white};
                }

                :global(.chip.disabled) {
                    cursor: not-allowed;
                    opacity: 0.3;
                }

                :global(.chip.disabled .remove-icon) {
                    pointer-events: none;
                }

                :global(.chip.dragging) {
                    box-shadow:
                        0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                }
            `}</style>
        </>
    )
}

Chip.defaultProps = {
    dataTest: 'dhis2-uicore-chip',
    marginBottom: 4,
    marginTop: 4,
}

Chip.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    component: PropTypes.oneOf(['a', 'span']),
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    dragging: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.element,
    marginBottom: PropTypes.number,
    marginInlineEnd: PropTypes.number,
    marginInlineStart: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    marginTop: PropTypes.number,
    overflow: PropTypes.bool,
    selected: PropTypes.bool,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
}

export { Chip }
