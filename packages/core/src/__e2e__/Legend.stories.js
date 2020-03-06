import React from 'react'
import { storiesOf } from '@storybook/react'
import { Legend } from '../index.js'

storiesOf('Legend', module)
    .add('With content and required', () => (
        <Legend required>
            I am wrapped in a legend which has some styling
        </Legend>
    ))
    .add('With children', () => <Legend>I am a child</Legend>)
