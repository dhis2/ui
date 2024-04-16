import React from 'react'
import { CheckboxField } from './index.js'

export default { title: 'CheckboxField' }
export const WithLabelAndRequired = () => (
    <CheckboxField
        name="Ex"
        label="CheckboxField"
        required
        value="checked"
    />
)
export const WithHelpText = () => (
    <CheckboxField
        name="Ex"
        label="CheckboxField"
        value="checked"
        helpText="Help text"
    />
)
export const WithLabel = () => (
    <CheckboxField name="Ex" label="The label" value="checked" />
)
export const WithValidationText = () => (
    <CheckboxField
        name="Ex"
        label="The label"
        value="checked"
        validationText="Validation text"
    />
)
