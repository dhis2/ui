import { storiesOf } from '@storybook/react'
import React from 'react'

import { Radio, RadioGroupField } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('RadioGroupField', module)
    .add('Default', () => (
        <RadioGroupField onChange={logger} name="default" value="second">
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
            <Radio value="third" label="Third" />
        </RadioGroupField>
    ))

    .add('With label', () => (
        <>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value="second"
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
            <RadioGroupField
                label="I am a required label"
                onChange={logger}
                name="required"
                value="second"
                required
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
        </>
    ))

    .add('Dense', () => (
        <RadioGroupField
            label="I am a label"
            onChange={logger}
            name="default"
            value="second"
            dense
        >
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
            <Radio value="third" label="Third" />
        </RadioGroupField>
    ))

    .add('States', () => (
        <>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value="second"
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="disabled"
                value="second"
                disabled
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="valid"
                value="second"
                valid
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="warning"
                value="second"
                warning
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="error"
                value="second"
                error
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
        </>
    ))

    .add('Help and validation texts', () => (
        <>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value="second"
                helpText="Please help me!"
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="disabled"
                value="second"
                disabled
                helpText="I am disabled"
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="valid"
                value="second"
                valid
                validationText="I am valid"
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="warning"
                value="second"
                warning
                validationText="I have a warning"
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
            <RadioGroupField
                label="I am a label"
                onChange={logger}
                name="error"
                value="second"
                error
                validationText="I have an error"
            >
                <Radio value="first" label="First" />
                <Radio value="second" label="Second" />
                <Radio value="third" label="Third" />
            </RadioGroupField>
        </>
    ))
