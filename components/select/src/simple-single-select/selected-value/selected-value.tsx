import { IconChevronDown16 } from '@dhis2/ui-icons'
import React from 'react'
import { Filter } from '../menu/filter.tsx'
import { ClearButton } from './clear-button.tsx'
import { Container } from './container.tsx'
import { Placeholder } from './placeholder.tsx'
import { Prefix } from './prefix.tsx'

export interface SelectedValueProps {
    clearText: string
    comboBoxId: string
    filterRef: React.RefObject<HTMLInputElement>
    name: string
    selectedLabel: string
    onKeyDown: (e: React.KeyboardEvent) => void
    autoFocus?: boolean
    clearable?: boolean
    comboBoxRef?: React.RefObject<HTMLDivElement>
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    error?: boolean
    expanded?: boolean
    filterLabel?: string
    filterPlaceholder?: string
    filterValue?: string
    filterable?: boolean
    hasSelection?: boolean
    inputMaxHeight?: string | number
    labelledBy?: string
    placeholder?: string
    prefix?: string
    tabIndex?: string
    valid?: boolean
    warning?: boolean
    onBlur?: (e: React.FocusEvent) => void
    onClear?: () => void
    onClick?: () => void
    onFilterChange?: (value: string) => void
    onFilterInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent) => void
}

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
    filterLabel,
    filterPlaceholder,
    filterRef,
    filterable,
    filterValue,
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
    onFilterChange,
    onFilterInputKeyDown,
    onFocus,
}: SelectedValueProps) {
    const dataTestPrefix = `${dataTest}-selectedvalue`
    const showFilter = filterable && expanded

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

            {showFilter ? (
                <Filter
                    inputRef={filterRef}
                    ariaControls={`${name}-listbox`}
                    dataTest={`${dataTestPrefix}-filter`}
                    label={filterLabel}
                    placeholder={filterPlaceholder}
                    value={filterValue || ''}
                    onChange={onFilterChange || (() => undefined)}
                    onKeyDown={onFilterInputKeyDown}
                />
            ) : (
                <div className="selected-option-label" tabIndex={-1}>
                    {!selectedLabel && !prefix && placeholder && (
                        <Placeholder
                            dataTest={`${dataTestPrefix}-placeholder`}
                            placeholder={placeholder}
                        />
                    )}

                    {selectedLabel}
                </div>
            )}

            {hasSelection && clearable && !disabled && (
                <div className="clear-button-container">
                    <ClearButton
                        clearText={clearText}
                        dataTest={`${dataTestPrefix}-clear`}
                        onClear={onClear || (() => undefined)}
                    />
                </div>
            )}

            <span
                className="toggle-icon"
                aria-label="Open select"
                onClick={() => {
                    comboBoxRef?.current?.focus()
                    onClick?.()
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
