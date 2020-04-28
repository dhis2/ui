import React from 'react'
import { storiesOf } from '@storybook/react'

import { Checkbox, Radio, Switch } from '../index.js'

import { ToggleGroupField } from './ToggleGroupField.js'

storiesOf('Components/Core/ToggleGroupField', module)
    .add('With Checkbox', () => (
        <ToggleGroupField>
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </ToggleGroupField>
    ))

    .add('With Radio', () => (
        <ToggleGroupField>
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" checked />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </ToggleGroupField>
    ))

    .add('With Switch', () => (
        <ToggleGroupField>
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </ToggleGroupField>
    ))

    .add('With label', () => (
        <>
            <ToggleGroupField label="I am a label">
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
            <ToggleGroupField label="I am a required label" required>
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
        </>
    ))

    .add('Help and validation texts', () => (
        <>
            <ToggleGroupField label="I am a label" helpText="Please help me!">
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
            <ToggleGroupField
                label="I am a label"
                helpText="I am disabled"
                disabled
            >
                <Checkbox value="first" label="First" disabled />
                <Checkbox value="second" label="Second" disabled />
                <Checkbox value="third" label="Third" disabled />
            </ToggleGroupField>
            <ToggleGroupField
                label="I am a label"
                valid
                validationText="I am valid"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" checked />
                <Checkbox value="third" label="Third" checked />
            </ToggleGroupField>
            <ToggleGroupField
                label="I am a label"
                name="warning"
                warning
                validationText="I have a warning"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
            <ToggleGroupField
                label="I am a label"
                error
                validationText="I have an error"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
        </>
    ))
