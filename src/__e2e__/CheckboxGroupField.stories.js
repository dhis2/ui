import { storiesOf } from '@storybook/react'
import React from 'react'
import { Checkbox, CheckboxGroupField } from '../index.js'

storiesOf('CheckboxGroupField', module).add('With label and required', () => (
    <CheckboxGroupField
        label="I am a required label"
        name="required"
        value={['second', 'third']}
        required
    >
        <Checkbox value="first" label="First" />
        <Checkbox value="second" label="Second" />
        <Checkbox value="third" label="Third" />
    </CheckboxGroupField>
))
