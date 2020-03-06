import React from 'react'
import { storiesOf } from '@storybook/react'
import { SingleSelectField, SingleSelectOption } from '../index.js'

storiesOf('SingleSelectField', module)
    .add('With label', () => (
        <SingleSelectField label="The label">
            <SingleSelectOption value="1" label="one" />
            <SingleSelectOption value="2" label="two" />
            <SingleSelectOption value="3" label="three" />
        </SingleSelectField>
    ))
    .add('With help text', () => (
        <SingleSelectField helpText="The help text">
            <SingleSelectOption value="1" label="one" />
            <SingleSelectOption value="2" label="two" />
            <SingleSelectOption value="3" label="three" />
        </SingleSelectField>
    ))
    .add('With validation text', () => (
        <SingleSelectField validationText="The validation text">
            <SingleSelectOption value="1" label="one" />
            <SingleSelectOption value="2" label="two" />
            <SingleSelectOption value="3" label="three" />
        </SingleSelectField>
    ))
    .add('With label and required status', () => (
        <SingleSelectField label="The label" required>
            <SingleSelectOption value="1" label="one" />
            <SingleSelectOption value="2" label="two" />
            <SingleSelectOption value="3" label="three" />
        </SingleSelectField>
    ))
