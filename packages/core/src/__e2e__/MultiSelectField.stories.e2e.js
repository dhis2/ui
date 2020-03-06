import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelectField, MultiSelectOption } from '../index.js'

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
