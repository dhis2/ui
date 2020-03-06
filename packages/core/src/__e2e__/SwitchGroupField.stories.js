import { storiesOf } from '@storybook/react'
import React from 'react'
import { Switch, SwitchGroupField } from '../index.js'

storiesOf('SwitchGroupField', module).add('With label and required', () => (
    <SwitchGroupField
        label="I am a required label"
        name="required"
        value={['second', 'third']}
        required
    >
        <Switch value="first" label="First" />
        <Switch value="second" label="Second" />
        <Switch value="third" label="Third" />
    </SwitchGroupField>
))
