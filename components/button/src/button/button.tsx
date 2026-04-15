import { CircularLoader } from '@dhis2-ui/loader'
import cx from 'classnames'
import React, { useEffect, useRef } from 'react'
import styles from './button.styles.ts'

interface ButtonCallbackPayload {
    value?: string
    name?: string
}

export interface ButtonProps {
    /** Component to render inside the button */
    children?: React.ReactNode
    /** A className that will be passed to the `<button>` element */
    className?: string
    /**
     * A string that will be applied as a `data-test` attribute on the button element
     * for identification during testing
     */
    dataTest?: string
    /**
     * Applies 'destructive' button appearance, implying a dangerous action.
     */
    destructive?: boolean
    /** Applies a greyed-out appearance and makes the button non-interactive */
    disabled?: boolean
    /** An icon element to display inside the button */
    icon?: React.ReactElement
    /** Use this variant to capture the initial focus on the page. */
    initialFocus?: boolean
    /** Makes the button large. Mutually exclusive with `small` */
    large?: boolean
    /** Sets the button into a loading state */
    loading?: boolean
    /**
     * Sets `name` attribute on button element.
     * Gets passed as part of the first argument to callbacks (see `onClick`).
     */
    name?: string
    /**
     * Applies 'primary' button appearance, implying the most important action.
     */
    primary?: boolean
    /**
     * Applies 'secondary' button appearance.
     */
    secondary?: boolean
    /** Makes the button small. Mutually exclusive with `large` prop */
    small?: boolean
    /** Tab index for focusing the button with a keyboard */
    tabIndex?: string
    /** Changes appearance of button to an on/off state */
    toggled?: boolean
    /** Sets `type` attribute on `<button>` element */
    type?: 'submit' | 'reset' | 'button'
    /**
     * Value associated with the button.
     * Gets passed as part of the first argument to callbacks (see `onClick`).
     */
    value?: string
    /**
     * Callback to trigger on de-focus (blur).
     * Called with same args as `onClick`
     */
    onBlur?: (
        payload: ButtonCallbackPayload,
        event: React.FocusEvent<HTMLButtonElement>
    ) => void
    /**
     * Callback to trigger on click.
     * Called with args `({ value, name }, event)`
     */
    onClick?: (
        payload: ButtonCallbackPayload,
        event: React.MouseEvent<HTMLButtonElement>
    ) => void
    /** Callback to trigger on focus. Called with same args as `onClick` */
    onFocus?: (
        payload: ButtonCallbackPayload,
        event: React.FocusEvent<HTMLButtonElement>
    ) => void
    /** Callback to trigger on key-down. Called with same args as `onClick` */
    onKeyDown?: (
        payload: ButtonCallbackPayload,
        event: React.KeyboardEvent<HTMLButtonElement>
    ) => void
    [key: string]: unknown
}

export const Button = ({
    children,
    className,
    dataTest = 'dhis2-uicore-button',
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
    type = 'button',
    value,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    loading,
    ...otherProps
}: ButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (initialFocus && ref.current) {
            ref.current.focus()
        }
    }, [initialFocus, ref.current])

    const { 'aria-label': ariaLabel, title } = otherProps as Record<
        string,
        unknown
    >

    if (!children && !title && !ariaLabel) {
        console.debug(
            'Button component has no children but is missing title and ariaLabel attribute.'
        )
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
        onClick && onClick({ value, name }, event)
    const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) =>
        onBlur && onBlur({ value, name }, event)
    const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) =>
        onFocus && onFocus({ value, name }, event)
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) =>
        onKeyDown && onKeyDown({ value, name }, event)

    const iconOnly = icon && !children
    const buttonClassName = cx(className, {
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
        <button
            ref={ref}
            name={name}
            className={buttonClassName}
            data-test={dataTest}
            disabled={disabled || loading}
            tabIndex={tabIndex as unknown as number}
            type={type}
            onBlur={handleBlur}
            onClick={handleClick}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            {...otherProps}
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
            <style jsx>{styles}</style>
        </button>
    )
}
