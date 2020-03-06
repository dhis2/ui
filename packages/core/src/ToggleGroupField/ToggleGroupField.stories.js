import { storiesOf } from '@storybook/react'
import React from 'react'

import { ToggleGroupField } from './ToggleGroupField.js'
import { Checkbox, Radio, Switch } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('Component/Widget/ToggleGroupField', module)
    .add('Default', () => (
        <ToggleGroupField
            onChange={logger}
            name="default"
            value={['second', 'third']}
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </ToggleGroupField>
    ))

    .add('With Radio', () => (
        <ToggleGroupField onChange={logger} name="test" value="second">
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </ToggleGroupField>
    ))

    .add('With Switch', () => (
        <ToggleGroupField
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
        >
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </ToggleGroupField>
    ))

    .add('With label', () => (
        <>
            <ToggleGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value={['second', 'third']}
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
            <ToggleGroupField
                label="I am a required label"
                onChange={logger}
                name="required"
                value={['second', 'third']}
                required
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
        </>
    ))

    .add('Dense', () => (
        <ToggleGroupField
            label="I am a label"
            onChange={logger}
            name="default"
            value={['second', 'third']}
            dense
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
        </ToggleGroupField>
    ))

    .add('States', () => (
        <>
            <ToggleGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value={['second', 'third']}
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
            <ToggleGroupField
                label="I am a label"
                onChange={logger}
                name="disabled"
                value={['second', 'third']}
                disabled
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
            <ToggleGroupField
                label="I am a label"
                onChange={logger}
                name="valid"
                value={['second', 'third']}
                valid
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
            <ToggleGroupField
                label="I am a label"
                onChange={logger}
                name="warning"
                value={['second', 'third']}
                warning
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
            <ToggleGroupField
                label="I am a label"
                onChange={logger}
                name="error"
                value={['second', 'third']}
                error
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
        </>
    ))

    .add('Help and validation texts', () => (
        <>
            <ToggleGroupField
                label="I am a label"
                onChange={logger}
                name="default"
                value={['second', 'third']}
                helpText="Please help me!"
            >
                <Checkbox value="first" label="First" />
                <Checkbox value="second" label="Second" />
                <Checkbox value="third" label="Third" />
            </ToggleGroupField>
            <ToggleGroupField
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
            </ToggleGroupField>
            <ToggleGroupField
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
            </ToggleGroupField>
            <ToggleGroupField
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
            </ToggleGroupField>
            <ToggleGroupField
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
            </ToggleGroupField>
        </>
    ))
