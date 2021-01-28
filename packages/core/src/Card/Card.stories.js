import React from 'react'
import { Card } from './Card.js'

const Wrapper = fn => (
    <div style={{ width: '358px', height: '358px' }}>{fn()}</div>
)

export default {
    title: 'Card',
    component: Card,
    decorators: [Wrapper],
}

export const Default = () => <Card />
