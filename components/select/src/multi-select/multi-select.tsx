import { spacers } from '@dhis2/ui-constants'
import { StatusIcon } from '@dhis2-ui/status-icon'
import React from 'react'
import { Loading as CommonLoading, Select } from '../select/index.ts'
import { FilterableMenu } from './filterable-menu.tsx'
import { Input } from './input.tsx'
import { Menu } from './menu.tsx'

export interface MultiSelectProps {
    children?: React.ReactNode
    className?: string
    clearText?: string
    clearable?: boolean
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    empty?: React.ReactNode
    error?: boolean
    filterPlaceholder?: string
    filterable?: boolean
    initialFocus?: boolean
    inputMaxHeight?: string
    loading?: boolean
    loadingText?: string
    maxHeight?: string
    noMatchText?: string
    placeholder?: string
    prefix?: string
    selected?: string[]
    tabIndex?: string
    valid?: boolean
    warning?: boolean
    onBlur?: (payload: { selected: string[] }, e: React.SyntheticEvent) => void
    onChange?: (data: { selected: string[] }, e: React.SyntheticEvent) => void
    onFocus?: (payload: { selected: string[] }, e: React.FocusEvent) => void
    onKeyDown?: (
        payload: { selected: string[] },
        e: React.KeyboardEvent
    ) => void
}

// stable object reference
const staticArr: string[] = []
const MultiSelect = ({
    className,
    selected = staticArr,
    tabIndex,
    maxHeight,
    inputMaxHeight,
    onChange,
    onFocus,
    onKeyDown,
    onBlur,
    loading,
    error,
    warning,
    valid,
    disabled,
    children,
    clearable,
    clearText,
    filterable,
    filterPlaceholder,
    placeholder,
    prefix,
    empty,
    loadingText,
    noMatchText,
    initialFocus,
    dense,
    dataTest = 'dhis2-uicore-multiselect',
}: MultiSelectProps) => {
    // If the select is filterable, use a filterable menu
    const menu = filterable ? (
        <FilterableMenu
            dataTest={dataTest}
            empty={empty}
            noMatchText={noMatchText || ''}
            placeholder={filterPlaceholder}
        />
    ) : (
        <Menu empty={empty} dataTest={dataTest} />
    )

    return (
        <div className="root" data-test={dataTest}>
            <div className="root-input">
                <Select
                    className={className}
                    selected={selected}
                    input={
                        <Input
                            clearable={clearable}
                            clearText={clearText}
                            dataTest={dataTest}
                            placeholder={placeholder}
                            prefix={prefix}
                            inputMaxHeight={inputMaxHeight}
                        />
                    }
                    menu={menu}
                    tabIndex={tabIndex}
                    maxHeight={maxHeight}
                    onChange={onChange as never}
                    onFocus={onFocus as never}
                    onKeyDown={onKeyDown as never}
                    onBlur={onBlur as never}
                    error={error}
                    warning={warning}
                    valid={valid}
                    disabled={disabled}
                    initialFocus={initialFocus}
                    dense={dense}
                >
                    {children}
                    {loading && (
                        <CommonLoading
                            message={loadingText}
                            dataTest={`${dataTest}-loading`}
                        />
                    )}
                </Select>
            </div>
            <StatusIcon error={error} valid={valid} warning={warning} />

            <style jsx>{`
                .root {
                    align-items: center;
                    display: flex;
                    gap: ${spacers.dp8};
                }

                .root-input {
                    flex: 1;
                }
            `}</style>
        </div>
    )
}

export { MultiSelect }
