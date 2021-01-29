import React from 'react'
import { Help } from './Help.js'

export default {
    title: 'Forms/Help',
    component: Help,
}

export const Default = () => <Help>Allow me to be of assistance</Help>

export const StatusWarning = () => (
    <Help warning>Allow me to be of assistance</Help>
)

StatusWarning.story = {
    name: 'Status: Warning',
}

export const StatusValid = () => <Help valid>Allow me to be of assistance</Help>

StatusValid.story = {
    name: 'Status: Valid',
}

export const StatusError = () => <Help error>Allow me to be of assistance</Help>

StatusError.story = {
    name: 'Status: Error',
}

export const TextOverflow = () => (
    <div style={{ width: 200 }}>
        <Help>I take up more space than my container</Help>
    </div>
)

TextOverflow.story = {
    name: 'Text overflow',
}
