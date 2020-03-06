import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card } from './Card.js'

const Wrapper = fn => (
    <div style={{ width: '358px', height: '358px' }}>{fn()}</div>
)

storiesOf('Component/Core/Card', module)
    .addDecorator(Wrapper)
    .add('Default', () => <Card />)
