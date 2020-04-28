import React from 'react'
import { storiesOf } from '@storybook/react'

import { Checkbox, Radio, Switch } from '../index.js'

import { FieldSetField } from './FieldSetField.js'

storiesOf('Components/Core/FieldSetField', module)
    .add('With Checkbox', () => (
        <FieldSetField>
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </FieldSetField>
    ))

    .add('With Radio', () => (
        <FieldSetField>
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" checked />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </FieldSetField>
    ))

    .add('With Switch', () => (
        <FieldSetField>
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </FieldSetField>
    ))

    .add('With label', () => (
        <>
            <FieldSetField legendText="I am a legend">
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldSetField>
            <FieldSetField legendText="I am a required field" required>
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldSetField>
        </>
    ))

    .add('Help and validation texts', () => (
        <>
            <FieldSetField legendText="I am a field" helpText="Please help me!">
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldSetField>
            <FieldSetField
                legendText="I am a legend"
                helpText="I am disabled"
                disabled
            >
                <Checkbox value="first" label="First" disabled />
                <Checkbox value="second" label="Second" disabled />
                <Checkbox value="third" label="Third" disabled />
            </FieldSetField>
            <FieldSetField
                legendText="I am a legend"
                valid
                validationText="I am valid"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" checked />
                <Checkbox value="third" label="Third" checked />
            </FieldSetField>
            <FieldSetField
                legendText="I am a legend"
                name="warning"
                warning
                validationText="I have a warning"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldSetField>
            <FieldSetField
                legendText="I am a legend"
                error
                validationText="I have an error"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </FieldSetField>
        </>
    ))
