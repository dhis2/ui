import { MultiSelectOption } from '@dhis2/ui-core'
import React from 'react'
import { MultiSelectField } from './MultiSelectField.js'

const defaultProps = {
    label: 'Default label',
    selected: ['1'],
    onChange: selected =>
        alert(`Selected changed to: ${JSON.stringify(selected, null, 2)}`),
}

const options = [
    <MultiSelectOption key="1" value="1" label="one" />,
    <MultiSelectOption key="2" value="2" label="two" />,
    <MultiSelectOption key="3" value="3" label="three" />,
    <MultiSelectOption key="4" value="4" label="four" />,
    <MultiSelectOption key="5" value="5" label="five" />,
    <MultiSelectOption key="6" value="6" label="six" />,
    <MultiSelectOption key="7" value="7" label="seven" />,
    <MultiSelectOption key="8" value="8" label="eight" />,
    <MultiSelectOption key="9" value="9" label="nine" />,
    <MultiSelectOption key="10" value="10" label="ten" />,
]

export default {
    title: 'Forms/Multi Select/Multi Select Field',
    component: MultiSelectField,
}

export const Default = () => (
    <MultiSelectField {...defaultProps}>{options}</MultiSelectField>
)

export const WithHelpText = () => (
    <MultiSelectField {...defaultProps} helpText="A helpful text.">
        {options}
    </MultiSelectField>
)

WithHelpText.story = {
    name: 'With Help text',
}

export const StatusValid = () => (
    <MultiSelectField
        {...defaultProps}
        helpText="A helpful text."
        validationText="Totally valid"
        valid
    >
        {options}
    </MultiSelectField>
)

StatusValid.story = {
    name: 'Status: Valid',
}

export const StatusWarning = () => (
    <MultiSelectField
        {...defaultProps}
        helpText="A helpful text."
        validationText="Hm, not quite, I warn thee!"
        warning
    >
        {options}
    </MultiSelectField>
)

StatusWarning.story = {
    name: 'Status: Warning',
}

export const StatusError = () => (
    <MultiSelectField
        {...defaultProps}
        helpText="A helpful text."
        validationText="NO! TOTALLY WRONG!"
        error
    >
        {options}
    </MultiSelectField>
)

StatusError.story = {
    name: 'Status: Error',
}

export const Required = () => (
    <MultiSelectField {...defaultProps} required>
        {options}
    </MultiSelectField>
)

export const InputWidth = () => (
    <MultiSelectField
        inputWidth="200px"
        {...defaultProps}
        label="A very long label indeed, well at least longer than the input field to show how it looks and works and stuff"
        required
    >
        {options}
    </MultiSelectField>
)

InputWidth.story = {
    name: 'Input width',
}

export const DefaultClearText = () => (
    <MultiSelectField selected={['1']} clearable>
        <MultiSelectOption
            key="1"
            value="1"
            label="Not translated, just for showing clear button"
        />
    </MultiSelectField>
)

DefaultClearText.story = {
    name: 'Default: clearText',
}

export const DefaultFilterPlaceholderAndNoMatchText = () => (
    <MultiSelectField filterable />
)

DefaultFilterPlaceholderAndNoMatchText.story = {
    name: 'Default: filterPlaceholder and noMatchText',
}

export const DefaultLoadingText = () => <MultiSelectField loading />

DefaultLoadingText.story = {
    name: 'Default: loadingText',
}

export const DefaultEmpty = () => <MultiSelectField />

DefaultEmpty.story = {
    name: 'Default: empty',
}
