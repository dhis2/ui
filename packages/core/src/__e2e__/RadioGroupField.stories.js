import { storiesOf } from '@storybook/react'
import React from 'react'
import { Radio, RadioGroupField } from '../index.js'

storiesOf('RadioGroupField', module).add('With label and required', () => (
    <RadioGroupField
        label="I am a required label"
        name="required"
        value="second"
        required
    >
        <Radio value="first" label="First" />
        <Radio value="second" label="Second" />
        <Radio value="third" label="Third" />
    </RadioGroupField>
))
