import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextAreaField } from '../index.js'

storiesOf('TextAreaField', module).add('With label and required', () => (
    <TextAreaField
        name="textarea"
        label="I am required and have an asterisk"
        required
    />
))
