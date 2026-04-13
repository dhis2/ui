import { Box } from '@dhis2-ui/box'
import { Field } from '@dhis2-ui/field'
import React from 'react'
import i18n from '../locales/index.js'
import { MultiSelect } from '../multi-select/index.ts'

// TODO: translate
const translate = (
    prop: string | ((interpolationObject?: Record<string, unknown>) => string),
    interpolationObject?: Record<string, unknown>
): string => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

export interface MultiSelectFieldProps {
    children?: React.ReactNode
    className?: string
    clearText?: string | (() => string)
    clearable?: boolean
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    empty?: React.ReactNode | (() => string)
    error?: boolean
    filterPlaceholder?: React.ReactNode | (() => string)
    filterable?: boolean
    helpText?: string
    initialFocus?: boolean
    inputMaxHeight?: string
    inputWidth?: string
    label?: string
    loading?: boolean
    loadingText?: string | (() => string)
    maxHeight?: string
    noMatchText?: string | (() => string)
    placeholder?: string
    prefix?: string
    required?: boolean
    selected?: string[]
    tabIndex?: string
    valid?: boolean
    validationText?: string
    warning?: boolean
    onBlur?: (payload: { selected: string[] }, e: React.SyntheticEvent) => void
    onChange?: (data: { selected: string[] }, e: React.SyntheticEvent) => void
    onFocus?: (payload: { selected: string[] }, e: React.SyntheticEvent) => void
    onKeyDown?: (
        payload: { selected: string[] },
        e: React.SyntheticEvent
    ) => void
}

class MultiSelectField extends React.Component<MultiSelectFieldProps> {
    static defaultProps = {
        selected: [] as string[],
        dataTest: 'dhis2-uiwidgets-multiselectfield',

        clearText: () => i18n.t('Clear'),
        empty: () => i18n.t('No data found'),
        filterPlaceholder: () => i18n.t('Type to filter options'),
        loadingText: () => i18n.t('Loading options'),
        noMatchText: () => i18n.t('No options found'),
    }

    render() {
        const {
            className,
            onChange,
            onFocus,
            onKeyDown,
            onBlur,
            required,
            label,
            valid,
            error,
            disabled,
            warning,
            loading,
            selected = MultiSelectField.defaultProps.selected,
            tabIndex,
            helpText,
            validationText,
            maxHeight,
            inputMaxHeight,
            inputWidth,
            children,
            clearable,
            clearText = MultiSelectField.defaultProps.clearText,
            filterable,
            filterPlaceholder = MultiSelectField.defaultProps.filterPlaceholder,
            placeholder,
            prefix,
            empty = MultiSelectField.defaultProps.empty,
            loadingText = MultiSelectField.defaultProps.loadingText,
            noMatchText = MultiSelectField.defaultProps.noMatchText,
            initialFocus,
            dense,
            dataTest = MultiSelectField.defaultProps.dataTest,
        } = this.props

        return (
            <Field
                className={className}
                dataTest={dataTest}
                disabled={disabled}
                required={required}
                label={label}
                helpText={helpText}
                validationText={validationText}
                error={error}
                warning={warning}
                valid={valid}
            >
                <Box width={inputWidth} minWidth="100px">
                    <MultiSelect
                        selected={selected}
                        tabIndex={tabIndex}
                        maxHeight={maxHeight}
                        inputMaxHeight={inputMaxHeight}
                        onChange={onChange}
                        onFocus={onFocus}
                        onKeyDown={onKeyDown}
                        onBlur={onBlur}
                        loading={loading}
                        error={error}
                        warning={warning}
                        valid={valid}
                        disabled={disabled}
                        clearable={clearable}
                        clearText={translate(clearText) as string}
                        filterable={filterable}
                        filterPlaceholder={translate(
                            filterPlaceholder as string
                        )}
                        placeholder={placeholder}
                        prefix={prefix}
                        empty={translate(empty as string)}
                        loadingText={translate(loadingText) as string}
                        noMatchText={translate(noMatchText) as string}
                        initialFocus={initialFocus}
                        dense={dense}
                    >
                        {children}
                    </MultiSelect>
                </Box>
            </Field>
        )
    }
}

export { MultiSelectField }
