import { Checkbox } from '@dhis2/ui-core'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { FieldGroup } from './FieldGroup.js'

storiesOf('FieldGroup', module).add('With label and required', () => (
    <FieldGroup
        label="I am a required label"
        name="required"
        value={['second', 'third']}
        required
    >
        <Checkbox value="first" label="First" />
        <Checkbox value="second" label="Second" />
        <Checkbox value="third" label="Third" />
    </FieldGroup>
))
