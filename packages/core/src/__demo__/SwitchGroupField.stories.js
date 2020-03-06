import { storiesOf } from '@storybook/react'
import React from 'react'

import { Switch, SwitchGroupField } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('SwitchGroupField', module)
    .add('Default', () => (
        <SwitchGroupField
            onChange={logger}
            name="default"
            value={['second', 'third']}
        >
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
        </SwitchGroupField>
    ))

    .add('With label', () => (
        <>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value={['second', 'third']}
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
            <SwitchGroupField
                label="I am a required label"
                onChange={logger}
                name="required"
                value={['second', 'third']}
                required
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
        </>
    ))

    .add('Dense', () => (
        <SwitchGroupField
            label="I am a label"
            onChange={logger}
            name="default"
            value={['second', 'third']}
            dense
        >
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
        </SwitchGroupField>
    ))

    .add('States', () => (
        <>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value={['second', 'third']}
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="disabled"
                value={['second', 'third']}
                disabled
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="valid"
                value={['second', 'third']}
                valid
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="warning"
                value={['second', 'third']}
                warning
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="error"
                value={['second', 'third']}
                error
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
        </>
    ))

    .add('Help and validation texts', () => (
        <>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value={['second', 'third']}
                helpText="Please help me!"
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="disabled"
                value={['second', 'third']}
                disabled
                helpText="I am disabled"
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="valid"
                value={['second', 'third']}
                valid
                validationText="I am valid"
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="warning"
                value={['second', 'third']}
                warning
                validationText="I have a warning"
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
            <SwitchGroupField
                label="I am a label"
                onChange={logger}
                name="error"
                value={['second', 'third']}
                error
                validationText="I have an error"
            >
                <Switch value="first" label="First" />
                <Switch value="second" label="Second" />
                <Switch value="third" label="Third" />
            </SwitchGroupField>
        </>
    ))
