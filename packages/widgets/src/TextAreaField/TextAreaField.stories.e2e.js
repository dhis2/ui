import { storiesOf } from '@storybook/react'
import React from 'react'
import { TextAreaField } from './TextAreaField.js'

storiesOf('TextAreaField', module).add('With label and required', () => (
    <TextAreaField
        name="textarea"
        label="I am required and have an asterisk"
        required
    />
))
