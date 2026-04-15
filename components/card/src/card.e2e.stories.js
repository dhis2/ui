import React from 'react'
import { Card } from './card.tsx'

export default { title: 'Card' }
export const WithChildren = () => (
    <Card>
        <span>I am a child</span>
        <span>I am a child</span>
        <span>I am a child</span>
    </Card>
)
