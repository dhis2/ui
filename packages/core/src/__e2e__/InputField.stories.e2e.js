import { storiesOf } from '@storybook/react'
import React from 'react'
import { InputField } from '../index.js'

storiesOf('InputField', module).add('With label and required', () => (
    <InputField label="Default label" name="Default" required />
))
