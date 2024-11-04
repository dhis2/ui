import { IconChevronDown16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { SelectedValueClearButton } from './selected-value-clear-button.js'
import { SelectedValueContainer } from './selected-value-container.js'
import { SelectedValuePlaceholder } from './selected-value-placeholder.js'
import { SelectedValuePrefix } from './selected-value-prefix.js'

export function SelectedValue({
    clearText,
    comboBoxId,
    idPrefix,
    valueLabel,
    onKeyDown,
    autoFocus,
    clearable,
    comboBoxRef,
    dataTest,
    dense,
    disabled,
    error,
    expanded,
    hasSelection,
    labelledBy,
    placeholder,
    prefix,
    tabIndex,
    valid,
    warning,
    onBlur,
    onClear,
    onClick,
    onFocus,
}) {
    // @TODO
    const inputMaxHeight = '300px'
    const dataTestPrefix = `${dataTest}-selectedvalue`

    return (
        <SelectedValueContainer
            dataTest={`${dataTestPrefix}-container`}
            ref={comboBoxRef}
            comboBoxId={comboBoxId}
            idPrefix={idPrefix}
            autoFocus={autoFocus}
            dense={dense}
            disabled={disabled}
            error={error}
            expanded={expanded}
            labelledBy={labelledBy}
            placeholder={placeholder}
            tabIndex={tabIndex}
            valid={valid}
            warning={warning}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
        >
            {prefix && (
                <SelectedValuePrefix
                    dataTest={`${dataTestPrefix}-prefix`}
                    prefix={prefix}
                />
            )}

            <div className="selected-option-label">
                {!valueLabel && !prefix && (
                    <SelectedValuePlaceholder
                        dataTest={`${dataTestPrefix}-placeholder`}
                        placeholder={placeholder}
                    />
                )}

                {valueLabel}
            </div>

            {hasSelection && clearable && !disabled && (
                <div className="clear-button-container">
                    <SelectedValueClearButton
                        clearText={clearText}
                        dataTest={`${dataTestPrefix}-clear`}
                        onClear={onClear}
                    />
                </div>
            )}

            <button
                className="toggle-icon"
                aria-label="Open select"
                onClick={(e) => {
                    e.stopPropagation()
                    comboBoxRef.current.focus()
                    onClick()
                }}
            >
                <IconChevronDown16 />
            </button>

            <style jsx>{`
                .selected-option-label {
                    overflow-y: auto;
                    max-height: ${inputMaxHeight};
                    flex: 1;
                }

                .clear-button-container {
                    margin-inline-start: auto;
                }

                .toggle-icon {
                    display: block;
                    background: none;
                    padding: 0;
                    border: 0;
                }
            `}</style>
        </SelectedValueContainer>
    )
}

SelectedValue.propTypes = {
    clearText: PropTypes.string.isRequired,
    comboBoxId: PropTypes.string.isRequired,
    idPrefix: PropTypes.string.isRequired,
    valueLabel: PropTypes.string.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
    clearable: PropTypes.bool,
    comboBoxRef: PropTypes.shape({
        current: PropTypes.instanceOf(HTMLElement),
    }),
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    expanded: PropTypes.bool,
    hasSelection: PropTypes.bool,
    labelledBy: PropTypes.string,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    tabIndex: PropTypes.string,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
    onBlur: PropTypes.func,
    onClear: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
}
