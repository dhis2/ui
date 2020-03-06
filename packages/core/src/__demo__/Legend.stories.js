import React from 'react'
import { storiesOf } from '@storybook/react'
import { Legend } from '../index.js'

storiesOf('Legend', module)
    .add('Default', () => (
        <Legend>I am wrapped in a legend which has some styling</Legend>
    ))
    .add('Required', () => (
        <Legend required>
            I am wrapped in a legend which has some styling
        </Legend>
    ))
