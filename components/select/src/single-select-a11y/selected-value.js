import { IconChevronDown16 } from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { colors, spacers, theme } from '@dhis2/ui-constants'
import { SelectedValueClearButton } from './selected-value-clear-button.js'
import { SelectedValuePlaceholder } from './selected-value-placeholder.js'
import { SelectedValueContainer } from './selected-value-container.js'
import { SelectedValuePrefix } from './selected-value-prefix.js'

export function SelectedValue({
    comboBoxRef,
    idPrefix,
    expanded,
    labelledBy,
    comboBoxId,
    tabIndex,
    onBlur,
    onFocus,
    hasSelection,
    valueLabel,
    prefix,
    dataTest,
    placeholder,
    options,
    onClear,
    clearText,
    clearable,
    disabled,
    onClick,
    error,
    warning,
    valid,
    dense,
}) {
    // @TODO
    const inputMaxHeight = '300px'
    const showPlaceholder = !valueLabel && !prefix
    const showClearButton = hasSelection && clearable && !disabled

    return (
        <SelectedValueContainer
            idPrefix={idPrefix}
            expanded={expanded}
            ref={comboBoxRef}
            labelledBy={labelledBy}
            comboBoxId={comboBoxId}
            tabIndex={tabIndex}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={onClick}
            error={error}
            warning={warning}
            valid={valid}
            disabled={disabled}
            dense={dense}
        >
            {prefix && (
                <SelectedValuePrefix
                    prefix={prefix}
                    dataTest={`${dataTest}-prefix`}
                />
            )}

            <div className="selected-option-label">
                {!valueLabel && !prefix && (
                    <SelectedValuePlaceholder
                        placeholder={placeholder}
                        dataTest={`${dataTest}-placeholder`}
                    />
                )}

                {valueLabel}
            </div>

            {showClearButton && (
                <div className="clear-button-container">
                    <SelectedValueClearButton
                        onClear={onClear}
                        clearText={clearText}
                        dataTest={`${dataTest}-clear`}
                    />
                </div>
            )}

            <div className="root-right">
                <IconChevronDown16 />
            </div>

            <style jsx>{`
                .selected-option-label {
                    overflow-y: auto;
                    max-height: ${inputMaxHeight};
                    flex: 1;
                }

                .clear-button-container {
                    margin-inline-start: auto;
                }
            `}</style>
        </SelectedValueContainer>
    )
}
