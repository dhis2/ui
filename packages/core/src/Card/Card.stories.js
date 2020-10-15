import { storiesOf } from '@storybook/react'
import React from 'react'
import { Card } from './Card.js'

const Wrapper = fn => (
    <div style={{ width: '358px', height: '358px' }}>{fn()}</div>
)

storiesOf('Card', module)
    .addDecorator(Wrapper)
    .add('Default', () => <Card />)
