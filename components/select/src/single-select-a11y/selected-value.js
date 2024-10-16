import { IconChevronDown16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { SelectedValueClearButton } from './selected-value-clear-button.js'
import { SelectedValueContainer } from './selected-value-container.js'
import { SelectedValuePlaceholder } from './selected-value-placeholder.js'
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
    onClear,
    clearText,
    clearable,
    disabled,
    onClick,
    error,
    warning,
    valid,
    dense,
    autoFocus,
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

SelectedValue.propTypes = {
    clearText: PropTypes.string.isRequired,
    comboBoxId: PropTypes.string.isRequired,
    idPrefix: PropTypes.string.isRequired,
    valueLabel: PropTypes.string.isRequired,
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
