import React from 'react'
import { SwitchField } from './index.ts'

export default { title: 'SwitchField' }
export const WithLabelAndRequired = () => (
    <SwitchField name="Ex" label="SwitchField" required value="checked" />
)
