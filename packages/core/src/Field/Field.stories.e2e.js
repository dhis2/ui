import { storiesOf } from '@storybook/react'
import React from 'react'
import { Field } from './Field.js'

storiesOf('Field', module).add('With children', () => (
    <Field>I am a child</Field>
))
