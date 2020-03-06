import { storiesOf } from '@storybook/react'
import React from 'react'
import { ToggleGroupField } from './ToggleGroupField.js'
import { Checkbox } from '../index.js'

storiesOf('ToggleGroupField', module).add('With label and required', () => (
    <ToggleGroupField
        label="I am a required label"
        name="required"
        value={['second', 'third']}
        required
    >
        <Checkbox value="first" label="First" />
        <Checkbox value="second" label="Second" />
        <Checkbox value="third" label="Third" />
    </ToggleGroupField>
))
