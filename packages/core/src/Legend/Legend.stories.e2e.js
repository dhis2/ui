import { storiesOf } from '@storybook/react'
import React from 'react'
import { Legend } from './Legend.js'

storiesOf('Legend', module)
    .add('With content and required', () => (
        <Legend required>
            I am wrapped in a legend which has some styling
        </Legend>
    ))
    .add('With children', () => <Legend>I am a child</Legend>)
