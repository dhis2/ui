import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { colors, theme } from '@dhis2/ui-constants'

export const SelectedValueContainer = forwardRef(function Container({
    children,
    error,
    warning,
    valid,
    disabled,
    dense,
    idPrefix,
    expanded,
    labelledBy,
    comboBoxId,
    tabIndex,
    onBlur,
    onClick,
    onFocus,
}, ref) {
    return (
        <div
            className={cx({ error, warning, valid, disabled, dense })}
            ref={ref}
            aria-controls={`listbox-${idPrefix}`}
            aria-expanded={expanded.toString()}
            aria-haspopup="listbox"
            aria-labelledby={labelledBy}
            id={comboBoxId}
            role="combobox"
            tabIndex={tabIndex}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={onClick}
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
})
