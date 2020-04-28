import React from 'react'
import { storiesOf } from '@storybook/react'

import { Checkbox } from '@dhis2/ui-core'

import { FieldSetField } from './FieldSetField.js'

storiesOf('FieldSetField', module).add('With label and required', () => (
    <FieldSetField
        legendText="I am a required label"
        name="required"
        value={['second', 'third']}
        required
    >
        <Checkbox value="first" label="First" />
        <Checkbox value="second" label="Second" />
        <Checkbox value="third" label="Third" />
    </FieldSetField>
))
