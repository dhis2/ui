import { storiesOf } from '@storybook/react'
import React from 'react'
import { FieldSet } from './field-set.js'

storiesOf('FieldSet', module).add('With children', () => (
    <FieldSet>I am a child</FieldSet>
))
