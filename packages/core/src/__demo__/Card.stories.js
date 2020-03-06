import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card } from '../index.js'

const Wrapper = fn => (
    <div style={{ width: '358px', height: '358px' }}>{fn()}</div>
)

storiesOf('Card', module)
    .addDecorator(Wrapper)
    .add('Default', () => <Card />)
