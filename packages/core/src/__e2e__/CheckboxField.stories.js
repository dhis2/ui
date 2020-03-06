import { storiesOf } from '@storybook/react'
import React from 'react'
import { CheckboxField } from '../index.js'

storiesOf('CheckboxField', module)
    .add('With label and required', () => (
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            required
            value="checked"
        />
    ))
    .add('With help text', () => (
        <CheckboxField
            name="Ex"
            label="CheckboxField"
            value="checked"
            helpText="Help text"
        />
    ))
    .add('With label', () => (
        <CheckboxField name="Ex" label="The label" value="checked" />
    ))
    .add('With validation text', () => (
        <CheckboxField
            name="Ex"
            label="The label"
            value="checked"
            validationText="Validation text"
        />
    ))
