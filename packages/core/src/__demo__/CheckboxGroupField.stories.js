import { storiesOf } from '@storybook/react'
import React from 'react'

import { Checkbox, CheckboxGroupField } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('CheckboxGroupField', module)
    .add('Default', () => (
        <CheckboxGroupField
            onChange={logger}
            name="default"
            value={['second', 'third']}
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </CheckboxGroupField>
    ))

    .add('With label', () => (
        <>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value={['second', 'third']}
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
            <CheckboxGroupField
                label="I am a required label"
                onChange={logger}
                name="required"
                value={['second', 'third']}
                required
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
        </>
    ))

    .add('Dense', () => (
        <CheckboxGroupField
            label="I am a label"
            onChange={logger}
            name="default"
            value={['second', 'third']}
            dense
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </CheckboxGroupField>
    ))

    .add('States', () => (
        <>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value={['second', 'third']}
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="disabled"
                value={['second', 'third']}
                disabled
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="valid"
                value={['second', 'third']}
                valid
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="warning"
                value={['second', 'third']}
                warning
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="error"
                value={['second', 'third']}
                error
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
        </>
    ))

    .add('Help and validation texts', () => (
        <>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value={['second', 'third']}
                helpText="Please help me!"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="disabled"
                value={['second', 'third']}
                disabled
                helpText="I am disabled"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="valid"
                value={['second', 'third']}
                valid
                validationText="I am valid"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="warning"
                value={['second', 'third']}
                warning
                validationText="I have a warning"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
            <CheckboxGroupField
                label="I am a label"
                onChange={logger}
                name="error"
                value={['second', 'third']}
                error
                validationText="I have an error"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </CheckboxGroupField>
        </>
    ))
