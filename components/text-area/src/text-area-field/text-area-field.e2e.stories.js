import React from 'react'
import { TextAreaField } from './index.ts'

export default { title: 'TextAreaField' }
export const WithLabelAndRequired = () => (
    <TextAreaField
        name="textarea"
        label="I am required and have an asterisk"
        required
    />
)
