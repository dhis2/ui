import React from 'react'
import { MultiSelectOption } from '../index.js'
import { MultiSelectField } from './index.js'

export default { title: 'MultiSelectField' }
export const WithLabel = () => (
    <MultiSelectField label="The label">
        <MultiSelectOption value="1" label="one" />
        <MultiSelectOption value="2" label="two" />
        <MultiSelectOption value="3" label="three" />
    </MultiSelectField>
)
export const WithHelpText = () => (
    <MultiSelectField helpText="The help text">
        <MultiSelectOption value="1" label="one" />
        <MultiSelectOption value="2" label="two" />
        <MultiSelectOption value="3" label="three" />
    </MultiSelectField>
)
export const WithValidationText = () => (
    <MultiSelectField validationText="The validation text">
        <MultiSelectOption value="1" label="one" />
        <MultiSelectOption value="2" label="two" />
        <MultiSelectOption value="3" label="three" />
    </MultiSelectField>
)
export const WithLabelAndRequiredStatus = () => (
    <MultiSelectField label="The label" required>
        <MultiSelectOption value="1" label="one" />
        <MultiSelectOption value="2" label="two" />
        <MultiSelectOption value="3" label="three" />
    </MultiSelectField>
)
export const WithClearableAndSelectedOption = () => (
    <MultiSelectField selected={['1']} clearable>
        <MultiSelectOption key="1" value="1" label="One" />
    </MultiSelectField>
)
export const WithFilterable = () => (
    <MultiSelectField filterable>
        <MultiSelectOption key="1" value="1" label="One" />
    </MultiSelectField>
)
export const WithLoading = () => <MultiSelectField loading />
export const WithoutOptions = () => <MultiSelectField />
