import { IconChevronDown16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { ClearButton } from './clear-button.js'
import { Container } from './container.js'
import { Placeholder } from './placeholder.js'
import { Prefix } from './prefix.js'

export function SelectedValue({
    clearText,
    comboBoxId,
    name,
    selectedLabel,
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
    inputMaxHeight,
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
    const dataTestPrefix = `${dataTest}-selectedvalue`

    return (
        <Container
            dataTest={`${dataTestPrefix}-container`}
            ref={comboBoxRef}
            comboBoxId={comboBoxId}
            autoFocus={autoFocus}
            dense={dense}
            disabled={disabled}
            error={error}
            expanded={expanded}
            labelledBy={labelledBy}
            name={name}
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
                <Prefix dataTest={`${dataTestPrefix}-prefix`} prefix={prefix} />
            )}

            <div className="selected-option-label">
                {!selectedLabel && !prefix && placeholder && (
                    <Placeholder
                        dataTest={`${dataTestPrefix}-placeholder`}
                        placeholder={placeholder}
                    />
                )}

                {selectedLabel}
            </div>

            {hasSelection && clearable && !disabled && (
                <div className="clear-button-container">
                    <ClearButton
                        clearText={clearText}
                        dataTest={`${dataTestPrefix}-clear`}
                        onClear={onClear}
                    />
                </div>
            )}

            <span
                className="toggle-icon"
                aria-label="Open select"
                onClick={() => {
                    comboBoxRef.current.focus()
                    onClick()
                }}
            >
                <IconChevronDown16 />
            </span>

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
        </Container>
    )
}

SelectedValue.propTypes = {
    clearText: PropTypes.string.isRequired,
    comboBoxId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selectedLabel: PropTypes.string.isRequired,
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
    inputMaxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
