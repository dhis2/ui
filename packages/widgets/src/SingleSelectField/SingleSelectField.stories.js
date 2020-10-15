import { SingleSelectOption } from '@dhis2/ui-core'
import { storiesOf } from '@storybook/react'
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

storiesOf('SingleSelectField', module)
    .add('Default', () => (
        <SingleSelectField {...defaultProps}>{options}</SingleSelectField>
    ))
    .add('With Help text', () => (
        <SingleSelectField {...defaultProps} helpText="A helpful text.">
            {options}
        </SingleSelectField>
    ))
    .add('Status: Valid', () => (
        <SingleSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Totally valid"
            valid
        >
            {options}
        </SingleSelectField>
    ))
    .add('Status: Warning', () => (
        <SingleSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Hm, not quite, I warn thee!"
            warning
        >
            {options}
        </SingleSelectField>
    ))
    .add('Status: Error', () => (
        <SingleSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="NO! TOTALLY WRONG!"
            error
        >
            {options}
        </SingleSelectField>
    ))
    .add('Required', () => (
        <SingleSelectField {...defaultProps} required>
            {options}
        </SingleSelectField>
    ))
    .add('Input width', () => (
        <SingleSelectField
            inputWidth="200px"
            {...defaultProps}
            label="A very long label indeed, well at least longer than the input field to show how it looks and works and stuff"
            required
        >
            {options}
        </SingleSelectField>
    ))
    .add('Default: clearText', () => (
        <SingleSelectField selected="1" clearable>
            <SingleSelectOption
                key="1"
                value="1"
                label="Not translated, just for showing clear button"
            />
        </SingleSelectField>
    ))
    .add('Default: filterPlaceholder and noMatchText', () => (
        <SingleSelectField filterable />
    ))
    .add('Default: loadingText', () => <SingleSelectField loading />)
    .add('Default: empty', () => <SingleSelectField />)
