import React from 'react'
import { storiesOf } from '@storybook/react'
import { FieldSet } from '../index.js'

storiesOf('FieldSet', module).add('With children', () => (
    <FieldSet>I am a child</FieldSet>
))
