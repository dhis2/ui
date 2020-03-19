import React from 'react'
import { storiesOf } from '@storybook/react'

import { Checkbox } from '@dhis2/ui-core'

import { ToggleGroupField } from './ToggleGroupField.js'

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
