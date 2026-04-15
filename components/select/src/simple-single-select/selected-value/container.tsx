import { colors, theme } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { forwardRef, useCallback, useEffect } from 'react'

export interface ContainerProps {
    children: React.ReactNode
    comboBoxId: string
    name: string
    onKeyDown: (e: React.KeyboardEvent) => void
    autoFocus?: boolean
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    error?: boolean
    expanded?: boolean
    labelledBy?: string
    placeholder?: string
    tabIndex?: string
    valid?: boolean
    warning?: boolean
    onBlur?: (e: React.FocusEvent) => void
    onClick?: (...args: unknown[]) => void
    onFocus?: (e: React.FocusEvent) => void
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    function Container(
        {
            children,
            comboBoxId,
            autoFocus,
            dataTest,
            dense,
            disabled,
            error,
            expanded,
            labelledBy,
            name,
            placeholder,
            tabIndex,
            valid,
            warning,
            onBlur,
            onClick: _onClick,
            onFocus,
            onKeyDown,
        },
        ref
    ) {
        // Using useEffect so we have access to the ref, which will be set before
        // the first call to the useEffect's callback
        useEffect(
            () => {
                if (autoFocus) {
                    ;(ref as React.RefObject<HTMLDivElement>).current?.focus()
                }
            },
            // We want to run this only once:
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
        )

        const onClick = useCallback(
            (...args: unknown[]) => {
                if (!disabled) {
                    _onClick?.(...args)
                }
            },
            [disabled, _onClick]
        )

        return (
            <div
                className={cx({ error, warning, valid, disabled, dense })}
                data-test={dataTest}
                ref={ref}
                aria-controls={`${name}-listbox`}
                aria-expanded={expanded ? true : false}
                aria-haspopup="listbox"
                aria-labelledby={labelledBy}
                aria-placeholder={placeholder}
                id={comboBoxId}
                role="combobox"
                tabIndex={tabIndex as unknown as number}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
                onKeyDown={(e) => {
                    e.stopPropagation()
                    onKeyDown(e)
                }}
            >
                {children}

                <style jsx>{`
                    div {
                        background-color: white;
                        border-radius: 3px;
                        border: 1px solid ${colors.grey500};
                        box-sizing: border-box;
                        min-height: 40px;
                        padding-block: 6px;
                        padding-inline: 12px;
                        box-shadow: inset 0 0 1px 0 rgba(48, 54, 60, 0.1);
                        display: flex;
                        align-items: center;
                        color: ${colors.grey900};
                        font-size: 14px;
                        line-height: 16px;
                    }

                    div:not(.disabled):focus,
                    div:not(.disabled):active {
                        outline: none;
                        box-shadow: inset 0 0 0 2px ${theme.focus};
                        border-color: ${theme.focus};
                    }

                    div.valid {
                        border-color: ${theme.valid};
                    }

                    div.warning {
                        border-color: ${theme.warning};
                    }

                    div.error {
                        border-color: ${theme.error};
                    }

                    div.disabled {
                        background-color: ${colors.grey100};
                        border-color: ${colors.grey500};
                        color: ${theme.disabled};
                        cursor: not-allowed;
                    }

                    div.dense {
                        padding-block: 2px;
                        padding-inline: 8px;
                        min-height: 32px;
                    }
                `}</style>
            </div>
        )
    }
)
