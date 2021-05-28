import { MultiSelectOption } from '@dhis2-ui/select'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { MultiSelectField } from './multi-select-field.js'

storiesOf('MultiSelectField', module)
    .add('With label', () => (
        <MultiSelectField label="The label">
            <MultiSelectOption value="1" label="one" />
            <MultiSelectOption value="2" label="two" />
            <MultiSelectOption value="3" label="three" />
        </MultiSelectField>
    ))
    .add('With help text', () => (
        <MultiSelectField helpText="The help text">
            <MultiSelectOption value="1" label="one" />
            <MultiSelectOption value="2" label="two" />
            <MultiSelectOption value="3" label="three" />
        </MultiSelectField>
    ))
    .add('With validation text', () => (
        <MultiSelectField validationText="The validation text">
            <MultiSelectOption value="1" label="one" />
            <MultiSelectOption value="2" label="two" />
            <MultiSelectOption value="3" label="three" />
        </MultiSelectField>
    ))
    .add('With label and required status', () => (
        <MultiSelectField label="The label" required>
            <MultiSelectOption value="1" label="one" />
            <MultiSelectOption value="2" label="two" />
            <MultiSelectOption value="3" label="three" />
        </MultiSelectField>
    ))
    .add('With clearable and selected option', () => (
        <MultiSelectField selected={['1']} clearable>
            <MultiSelectOption key="1" value="1" label="One" />
        </MultiSelectField>
    ))
    .add('With filterable', () => (
        <MultiSelectField filterable>
            <MultiSelectOption key="1" value="1" label="One" />
        </MultiSelectField>
    ))
    .add('With loading', () => <MultiSelectField loading />)
    .add('Without options', () => <MultiSelectField />)
