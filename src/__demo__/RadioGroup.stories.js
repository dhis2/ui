import { storiesOf } from '@storybook/react'
import React from 'react'

import { Radio, RadioGroup } from '../index.js'

const logger = ({ name, value, checked }) =>
    console.info(`name: ${name}, value: ${value}, checked: ${checked}`)

storiesOf('RadioGroup', module)
    .add('Default', () => (
        <RadioGroup onChange={logger} name="test" value="second">
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </RadioGroup>
    ))

    .add('Disabled', () => (
        <RadioGroup onChange={logger} name="test" value="second" disabled>
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </RadioGroup>
    ))

    .add('Valid', () => (
        <RadioGroup onChange={logger} name="test" value="second" valid>
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </RadioGroup>
    ))

    .add('Warning', () => (
        <RadioGroup onChange={logger} name="test" value="second" warning>
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </RadioGroup>
    ))

    .add('Error', () => (
        <RadioGroup onChange={logger} name="test" value="second" error>
            <Radio value="first" label="First" />
            <Radio value="second" label="Second" />
            <Radio value="third" label="Third" />
            <Radio value="fourth" label="Fourth" />
        </RadioGroup>
    ))
