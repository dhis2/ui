import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileInputField } from '../index.js'

storiesOf('FileInputField', module).add('With label and required', () => (
    <FileInputField
        name="upload"
        label="upload something"
        buttonLabel="Upload file"
        required
    />
))
