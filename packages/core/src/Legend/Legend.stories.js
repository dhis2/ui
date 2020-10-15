import { storiesOf } from '@storybook/react'
import React from 'react'
import { Legend } from './Legend.js'

storiesOf('Legend', module)
    .add('Default', () => (
        <Legend>I am wrapped in a legend which has some styling</Legend>
    ))
    .add('Required', () => (
        <Legend required>
            I am wrapped in a legend which has some styling
        </Legend>
    ))
