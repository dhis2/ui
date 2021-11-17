import { CircularLoader } from '@dhis2-ui/loader'
import { sharedPropTypes, colors, theme, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import css from 'styled-jsx/css'
import { ButtonBase } from '../button-base/index.js'

const { className: resolvedClassName, styles } = css.resolve`
    button {
        display: inline-flex;
        position: relative;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-weight: 400;
        letter-spacing: 0.5px;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.15s cubic-bezier(0.4, 0, 0.6, 1);
        user-select: none;
        color: ${colors.grey900};

        /*medium*/
        height: 36px;
        padding: 0 ${spacers.dp12};
        font-size: 14px;
        line-height: 16px;

        /*basic*/
        border: 1px solid ${colors.grey500};
        background-color: #f9fafb;
    }

    button:disabled {
        cursor: not-allowed;
    }

    button:focus {
        outline: 3px solid ${theme.focus};
        outline-offset: 2px;
        transition: none;
    }

    /* Prevent focus styles on active and disabled buttons */
    button:active:focus,
    button:disabled:focus {
        outline: none;
    }

    button:hover {
        border-color: ${colors.grey500};
        background-color: ${colors.grey200};
    }

    button:active,
    button:active:focus {
        border-color: ${colors.grey500};
        background-color: ${colors.grey200};
        box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1) inset;
    }

    button:focus {
        background-color: #f9fafb;
    }

    button:disabled {
        border-color: ${colors.grey400};
        background-color: #f9fafb;
        box-shadow: none;
        color: ${theme.disabled};
        fill: ${theme.disabled};
    }

    .small {
        height: 28px;
        padding: 0 8px;
        font-size: 14px;
        line-height: 16px;
    }

    .large {
        height: 43px;
        padding: 0 ${spacers.dp24};
        font-size: 16px;
        letter-spacing: 0.57px;
        line-height: 19px;
    }

    .primary {
        border-color: ${theme.primary800};
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #2b61b3;
        color: ${colors.white};
        fill: ${colors.white};
        font-weight: 500;
    }

    .primary:hover {
        border-color: ${theme.primary800};
        background: linear-gradient(180deg, #054fa3 0%, #034793 100%);
        background-color: #21539f;
    }

    .primary:active,
    .primary:active:focus {
        background: linear-gradient(180deg, #054fa3 0%, #034793 100%);
        background-color: #1c4a90;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .primary:focus {
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #285dac;
    }

    .primary:disabled {
        border-color: #93a6bd;
        background: #b3c6de;
        box-shadow: none;
        color: ${colors.white};
        fill: ${colors.white};
    }

    .secondary {
        border-color: ${colors.grey400};
        background-color: transparent;
    }

    .secondary:hover {
        border-color: ${colors.grey400};
        background-color: rgba(160, 173, 186, 0.08);
    }

    .secondary:active,
    .secondary:active:focus {
        background-color: rgba(160, 173, 186, 0.2);
        box-shadow: none;
    }

    .secondary:focus {
        background-color: transparent;
    }

    .secondary:disabled {
        border-color: ${colors.grey400};
        background-color: transparent;
        box-shadow: none;
        color: ${theme.disabled};
        fill: ${theme.disabled};
    }

    .destructive {
        border-color: #a10b0b;
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #b9242b;
        color: ${colors.white};
        fill: ${colors.white};
        font-weight: 500;
    }

    .destructive:hover {
        border-color: #a10b0b;
        background: linear-gradient(180deg, #b81c1c 0%, #b80c0b 100%);
        background-color: #ac0f1a;
    }

    .destructive:active,
    .destructive:active:focus {
        background: linear-gradient(180deg, #b81c1c 0%, #b80c0b 100%);
        background-color: #ac101b;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .destructive:focus {
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #b72229;
    }

    .destructive:disabled {
        border-color: #c59898;
        background: #d6a8a8;
        box-shadow: none;
        color: ${colors.white};
        fill: ${colors.white};
    }

    .icon-only {
        padding: 0 0 0 5px;
    }

    .button-icon {
        margin-right: 6px;
        color: inherit;
        fill: inherit;
        font-size: 26px;
        vertical-align: middle;
        pointer-events: none;
    }

    .icon-only .button-icon {
        margin-right: 5px;
    }

    .small.icon-only {
        padding: 0 0 0 1px;
    }

    .small .button-icon {
        margin-right: 2px;
    }

    .small.icon-only .button-icon {
        margin-right: 1px;
    }

    .toggled {
        background: ${colors.grey700};
        border: 1px solid ${colors.grey900};
        color: ${colors.grey050};
        fill: ${colors.grey050};
    }

    .toggled:focus {
        background: ${colors.grey800};
    }

    .toggled:hover {
        background: ${colors.grey800};
        border-color: ${colors.grey900};
    }

    .toggled:active,
    .toggled:active:focus {
        background: ${colors.grey900};
        border-color: ${colors.grey900};
    }

    .toggled:disabled {
        background: ${colors.grey500};
        border-color: ${colors.grey600};
        color: ${colors.grey050};
        fill: ${colors.grey050};
    }

    .loader {
        width: 16px;
        height: 16px;
        margin-right: 8px;
    }

    .loader + .button-icon {
        display: none;
    }

    .icon-only .loader {
        margin: 0 8px 0 4px;
    }
    .small.icon-only .loader {
        margin: 0 4px;
    }
`

export const Button = ({
    children,
    className,
    dataTest,
    destructive,
    disabled,
    icon,
    initialFocus,
    large,
    name,
    primary,
    secondary,
    small,
    tabIndex,
    toggled,
    type,
    value,
    onBlur,
    onClick,
    onFocus,
    loading,
}) => {
    const ref = useRef()

    useEffect(() => {
        if (initialFocus && ref.current) {
            ref.current.focus()
        }
    }, [initialFocus, ref.current])

    const handleClick = (event) => onClick && onClick({ value, name }, event)
    const handleBlur = (event) => onBlur && onBlur({ value, name }, event)
    const handleFocus = (event) => onFocus && onFocus({ value, name }, event)

    const iconOnly = icon && !children
    const buttonClassName = cx(className, resolvedClassName, {
        primary,
        secondary,
        destructive,
        small,
        large,
        'icon-only': iconOnly,
        toggled,
        loading: loading,
    })

    return (
        <ButtonBase
            ref={ref}
            name={name}
            className={buttonClassName}
            dataTest={dataTest}
            disabled={disabled || loading}
            tabIndex={tabIndex}
            type={type}
            onBlur={handleBlur}
            onClick={handleClick}
            onFocus={handleFocus}
        >
            {loading && (
                <span className="loader">
                    {destructive || primary ? (
                        <CircularLoader extrasmall invert />
                    ) : (
                        <CircularLoader extrasmall />
                    )}
                </span>
            )}
            {icon && <span className="button-icon">{icon}</span>}
            {children}
            {styles}
        </ButtonBase>
    )
}

Button.defaultProps = {
    type: 'button',
    dataTest: 'dhis2-uicore-button',
}

Button.propTypes = {
    /** Component to render inside the button */
    children: PropTypes.node,
    /** A className that will be passed to the `<button>` element */
    className: PropTypes.string,
    /**
     * A string that will be applied as a `data-test` attribute on the button element
     * for identification during testing
     */
    dataTest: PropTypes.string,
    /**
     * Indicates that the button makes potentially dangerous
     * deletions or data changes.
     * Mutually exclusive with `primary` and `secondary` props
     */
    destructive: sharedPropTypes.buttonVariantPropType,
    /** Applies a greyed-out appearance and makes the button non-interactive  */
    disabled: PropTypes.bool,
    /** An icon element to display inside the button */
    icon: PropTypes.element,
    /** Use this variant to capture the initial focus on the page. */
    initialFocus: PropTypes.bool,
    /** Makes the button large. Mutually exclusive with `small` */
    large: sharedPropTypes.sizePropType,
    /** Sets the button into a loading state */
    loading: PropTypes.bool,
    /**
     * Sets `name` attribute on button element.
     * Gets passed as part of the first argument to callbacks (see `onClick`).
     */
    name: PropTypes.string,
    /**
     * Applies 'primary' button appearance.
     * Mutually exclusive with `destructive` and `secondary` props
     */
    primary: sharedPropTypes.buttonVariantPropType,
    /**
     * Applies 'secondary' button appearance.
     * Mutually exclusive with `primary` and `destructive` props
     */
    secondary: sharedPropTypes.buttonVariantPropType,
    /** Makes the button small. Mutually exclusive with `large` prop */
    small: sharedPropTypes.sizePropType,
    /** Tab index for focusing the button with a keyboard */
    tabIndex: PropTypes.string,
    /** Changes appearance of button to an on/off state */
    toggled: PropTypes.bool,
    /** Sets `type` attribute on `<button>` element */
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    /**
     * Value associated with the button.
     * Gets passed as part of the first argument to callbacks (see `onClick`).
     */
    value: PropTypes.string,
    /**
     * Callback to trigger on de-focus (blur).
     * Called with same args as `onClick`
     * */
    onBlur: PropTypes.func,
    /**
     * Callback to trigger on click.
     * Called with args `({ value, name }, event)`
     * */
    onClick: PropTypes.func,
    /** Callback to trigger on focus. Called with same args as `onClick` */
    onFocus: PropTypes.func,
}
