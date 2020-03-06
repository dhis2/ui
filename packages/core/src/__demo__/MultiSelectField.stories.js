import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelectField, MultiSelectOption } from '../index.js'

const defaultProps = {
    label: 'Default label',
    selected: [{ value: '1', label: 'one' }],
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

storiesOf('Component/Widget/MultiSelectField', module)
    .add('Default', () => (
        <MultiSelectField {...defaultProps}>{options}</MultiSelectField>
    ))
    .add('With Help text', () => (
        <MultiSelectField {...defaultProps} helpText="A helpful text.">
            {options}
        </MultiSelectField>
    ))
    .add('Status: Valid', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Totally valid"
            valid
        >
            {options}
        </MultiSelectField>
    ))
    .add('Status: Warning', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="Hm, not quite, I warn thee!"
            warning
        >
            {options}
        </MultiSelectField>
    ))
    .add('Status: Error', () => (
        <MultiSelectField
            {...defaultProps}
            helpText="A helpful text."
            validationText="NO! TOTALLY WRONG!"
            error
        >
            {options}
        </MultiSelectField>
    ))
    .add('Required', () => (
        <MultiSelectField {...defaultProps} required>
            {options}
        </MultiSelectField>
    ))
    .add('Input width', () => (
        <MultiSelectField
            inputWidth="200px"
            {...defaultProps}
            label="A very long label indeed, well at least longer than the input field to show how it looks and works and stuff"
            required
        >
            {options}
        </MultiSelectField>
    ))
