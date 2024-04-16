import React from 'react'
import { FileInputField } from './file-input-field.js'

export default { title: 'FileInputField' }
export const WithLabelAndRequired = () => (
    <FileInputField
        name="upload"
        label="upload something"
        buttonLabel="Upload file"
        required
    />
)
export const Default = () => <FileInputField name="upload" label="upload something" />
