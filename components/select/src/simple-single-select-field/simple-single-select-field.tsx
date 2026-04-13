import { Field } from '@dhis2-ui/field'
import React from 'react'
import { SimpleSingleSelect } from '../simple-single-select/index.ts'
import { OptionType } from '../simple-single-select/shared-prop-types.ts'

export interface SimpleSingleSelectFieldProps {
    label: string
    name: string
    options: OptionType[]
    onChange: (value: string) => void
    autoFocus?: boolean
    className?: string
    clearText?: string
    clearable?: boolean
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    empty?: React.ReactNode
    error?: boolean
    filterHelpText?: string
    filterLabel?: string
    filterPlaceholder?: string
    filterValue?: string
    filterable?: boolean
    helpText?: string
    loading?: boolean
    menuLoadingText?: string
    menuMaxHeight?: string
    noMatchText?: string
    optionComponent?: React.ElementType
    optionUpdateStrategy?: 'off' | 'polite' | 'assertive'
    placeholder?: string
    prefix?: string
    required?: boolean
    tabIndex?: string | number
    valid?: boolean
    validationText?: string
    value?: string
    valueLabel?: string
    warning?: boolean
    onBlur?: (e: React.FocusEvent) => void
    onEndReached?: () => void
    onFilterChange?: (value: string) => void
    onFocus?: (e: React.FocusEvent) => void
}

export function SimpleSingleSelectField(props: SimpleSingleSelectFieldProps) {
    const {
        className,
        dataTest,
        disabled,
        error,
        helpText,
        label,
        name,
        onChange,
        options,
        required,
        valid,
        validationText,
        value,
        valueLabel,
        warning,
    } = props
    const labelId = `${name}-label`

    const selectedOption = options.find((opt) => opt.value === value)
    const selected =
        value != null && value !== ''
            ? {
                  value,
                  label: selectedOption?.label ?? valueLabel ?? '',
              }
            : undefined

    const handleChange = (option: { value: string; label: string }) => {
        onChange(option?.value ?? '')
    }

    const handleClear = () => {
        onChange('')
    }

    return (
        <Field
            className={className}
            dataTest={dataTest}
            disabled={disabled}
            required={required}
            name={name}
            label={label}
            helpText={helpText}
            validationText={validationText}
            error={error}
            warning={warning}
            valid={valid}
        >
            <SimpleSingleSelect
                {...props}
                labelledBy={labelId}
                selected={selected}
                onChange={handleChange}
                onClear={handleClear}
            />
        </Field>
    )
}
