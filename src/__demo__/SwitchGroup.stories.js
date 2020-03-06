import { storiesOf } from '@storybook/react'
import React from 'react'

import { Switch, SwitchGroup } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('SwitchGroup', module)
    .add('Default', () => (
        <SwitchGroup onChange={logger} name="test" value={['second', 'fourth']}>
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </SwitchGroup>
    ))

    .add('Disabled', () => (
        <SwitchGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            disabled
        >
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </SwitchGroup>
    ))

    .add('Valid', () => (
        <SwitchGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            valid
        >
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </SwitchGroup>
    ))

    .add('Warning', () => (
        <SwitchGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            warning
        >
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </SwitchGroup>
    ))

    .add('Error', () => (
        <SwitchGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            error
        >
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </SwitchGroup>
    ))
