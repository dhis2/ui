import { storiesOf } from '@storybook/react'
import React from 'react'

import { Checkbox, CheckboxGroup } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('CheckboxGroup', module)
    .add('Default', () => (
        <CheckboxGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </CheckboxGroup>
    ))

    .add('Disabled', () => (
        <CheckboxGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            disabled
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </CheckboxGroup>
    ))

    .add('Valid', () => (
        <CheckboxGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            valid
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </CheckboxGroup>
    ))

    .add('Warning', () => (
        <CheckboxGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            warning
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </CheckboxGroup>
    ))

    .add('Error', () => (
        <CheckboxGroup
            onChange={logger}
            name="test"
            value={['second', 'fourth']}
            error
        >
            <Checkbox value="first" label="First" />
            <Checkbox value="second" label="Second" />
            <Checkbox value="third" label="Third" />
            <Checkbox value="fourth" label="Fourth" />
        </CheckboxGroup>
    ))
