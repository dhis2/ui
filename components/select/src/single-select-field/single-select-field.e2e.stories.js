import React from 'react'
import { SingleSelectOption } from '../index.js'
import { SingleSelectField } from './index.js'

export default { title: 'SingleSelectField' }
export const WithLabel = () => (
    <SingleSelectField label="The label">
        <SingleSelectOption value="1" label="one" />
        <SingleSelectOption value="2" label="two" />
        <SingleSelectOption value="3" label="three" />
    </SingleSelectField>
)
export const WithHelpText = () => (
    <SingleSelectField helpText="The help text">
        <SingleSelectOption value="1" label="one" />
        <SingleSelectOption value="2" label="two" />
        <SingleSelectOption value="3" label="three" />
    </SingleSelectField>
)
export const WithValidationText = () => (
    <SingleSelectField validationText="The validation text">
        <SingleSelectOption value="1" label="one" />
        <SingleSelectOption value="2" label="two" />
        <SingleSelectOption value="3" label="three" />
    </SingleSelectField>
)
export const WithLabelAndRequiredStatus = () => (
    <SingleSelectField label="The label" required>
        <SingleSelectOption value="1" label="one" />
        <SingleSelectOption value="2" label="two" />
        <SingleSelectOption value="3" label="three" />
    </SingleSelectField>
)
export const WithClearableAndSelectedOption = () => (
    <SingleSelectField selected="1" clearable>
        <SingleSelectOption key="1" value="1" label="One" />
    </SingleSelectField>
)
export const WithFilterable = () => (
    <SingleSelectField filterable>
        <SingleSelectOption key="1" value="1" label="One" />
    </SingleSelectField>
)
export const WithLoading = () => <SingleSelectField loading />
export const WithoutOptions = () => <SingleSelectField />
