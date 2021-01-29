import { SingleSelectOption } from '@dhis2/ui-core'
import React from 'react'
import { SingleSelectField } from './SingleSelectField.js'

const defaultProps = {
    label: 'Default label',
    selected: '1',
    onChange: selected =>
        alert(`Selected changed to: ${JSON.stringify(selected, null, 2)}`),
}

const options = [
    <SingleSelectOption key="1" value="1" label="one" />,
    <SingleSelectOption key="2" value="2" label="two" />,
    <SingleSelectOption key="3" value="3" label="three" />,
    <SingleSelectOption key="4" value="4" label="four" />,
    <SingleSelectOption key="5" value="5" label="five" />,
    <SingleSelectOption key="6" value="6" label="six" />,
    <SingleSelectOption key="7" value="7" label="seven" />,
    <SingleSelectOption key="8" value="8" label="eight" />,
    <SingleSelectOption key="9" value="9" label="nine" />,
    <SingleSelectOption key="10" value="10" label="ten" />,
]

export default {
    title: 'Forms/Single Select/Single Select Field',
    component: SingleSelectField,
}

export const Default = () => (
    <SingleSelectField {...defaultProps}>{options}</SingleSelectField>
)

export const WithHelpText = () => (
    <SingleSelectField {...defaultProps} helpText="A helpful text.">
        {options}
    </SingleSelectField>
)

WithHelpText.story = {
    name: 'With Help text',
}

export const StatusValid = () => (
    <SingleSelectField
        {...defaultProps}
        helpText="A helpful text."
        validationText="Totally valid"
        valid
    >
        {options}
    </SingleSelectField>
)

StatusValid.story = {
    name: 'Status: Valid',
}

export const StatusWarning = () => (
    <SingleSelectField
        {...defaultProps}
        helpText="A helpful text."
        validationText="Hm, not quite, I warn thee!"
        warning
    >
        {options}
    </SingleSelectField>
)

StatusWarning.story = {
    name: 'Status: Warning',
}

export const StatusError = () => (
    <SingleSelectField
        {...defaultProps}
        helpText="A helpful text."
        validationText="NO! TOTALLY WRONG!"
        error
    >
        {options}
    </SingleSelectField>
)

StatusError.story = {
    name: 'Status: Error',
}

export const Required = () => (
    <SingleSelectField {...defaultProps} required>
        {options}
    </SingleSelectField>
)

export const InputWidth = () => (
    <SingleSelectField
        inputWidth="200px"
        {...defaultProps}
        label="A very long label indeed, well at least longer than the input field to show how it looks and works and stuff"
        required
    >
        {options}
    </SingleSelectField>
)

InputWidth.story = {
    name: 'Input width',
}

export const DefaultClearText = () => (
    <SingleSelectField selected="1" clearable>
        <SingleSelectOption
            key="1"
            value="1"
            label="Not translated, just for showing clear button"
        />
    </SingleSelectField>
)

DefaultClearText.story = {
    name: 'Default: clearText',
}

export const DefaultFilterPlaceholderAndNoMatchText = () => (
    <SingleSelectField filterable />
)

DefaultFilterPlaceholderAndNoMatchText.story = {
    name: 'Default: filterPlaceholder and noMatchText',
}

export const DefaultLoadingText = () => <SingleSelectField loading />

DefaultLoadingText.story = {
    name: 'Default: loadingText',
}

export const DefaultEmpty = () => <SingleSelectField />

DefaultEmpty.story = {
    name: 'Default: empty',
}
