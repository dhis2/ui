import React from 'react'
import { Legend } from './legend.js'

export default { title: 'Legend' }
export const WithContentAndRequired = () => (
    <Legend required>
        I am wrapped in a legend which has some styling
    </Legend>
)
export const WithChildren = () => <Legend>I am a child</Legend>
