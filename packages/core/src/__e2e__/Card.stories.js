import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card } from '../index.js'

storiesOf('Card', module).add('With children', () => (
    <Card>
        <span>I am a child</span>
        <span>I am a child</span>
        <span>I am a child</span>
    </Card>
))
