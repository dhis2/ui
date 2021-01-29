import React from 'react'
import { Legend } from './Legend.js'

export default {
    title: 'Forms/Field Set/Legend',
    component: Legend,
}

export const Default = () => (
    <Legend>I am wrapped in a legend which has some styling</Legend>
)

export const Required = () => (
    <Legend required>I am wrapped in a legend which has some styling</Legend>
)
