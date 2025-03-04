import { Checkbox } from '@dhis2-ui/checkbox'
import React from 'react'
import { FieldGroup } from './field-group.js'

export default { title: 'FieldGroup' }
export const WithLabelAndRequired = () => (
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
)
