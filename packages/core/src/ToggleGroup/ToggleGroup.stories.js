import { storiesOf } from '@storybook/react'
import React from 'react'

import { ToggleGroup } from './ToggleGroup.js'
import { Checkbox, Radio, Switch } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('Component/Core/ToggleGroup', module)
    .add('Default', () => (
        <ToggleGroup onChange={logger} name="test" value={['second', 'fourth']}>
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </ToggleGroup>
    ))

    .add('With Radio', () => (
        <ToggleGroup onChange={logger} name="test" value="second">
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </ToggleGroup>
    ))

    .add('With Switch', () => (
        <ToggleGroup onChange={logger} name="test" value={['second', 'fourth']}>
            <Switch value="first" label="First" />
            <Switch value="second" label="Second" />
            <Switch value="third" label="Third" />
            <Switch value="fourth" label="Fourth" />
        </ToggleGroup>
    ))

    .add('Disabled', () => (
        <ToggleGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            disabled
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </ToggleGroup>
    ))

    .add('Valid', () => (
        <ToggleGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            valid
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </ToggleGroup>
    ))

    .add('Warning', () => (
        <ToggleGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            warning
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </ToggleGroup>
    ))

    .add('Error', () => (
        <ToggleGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            error
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </ToggleGroup>
    ))
