import { storiesOf } from '@storybook/react'
import React from 'react'
import { FileInputField } from './file-input-field.js'

storiesOf('FileInputField', module)
    .add('With label and required', () => (
        <FileInputField
            name="upload"
            label="upload something"
            buttonLabel="Upload file"
            required
        />
    ))
    .add('Default', () => (
        <FileInputField name="upload" label="upload something" />
    ))
