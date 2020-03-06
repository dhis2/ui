import React from 'react'
import { storiesOf } from '@storybook/react'
import { ComponentCover } from '../index.js'

storiesOf('ComponentCover', module).add('With children', () => (
    <ComponentCover>I am a child</ComponentCover>
))
