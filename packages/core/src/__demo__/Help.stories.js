import React from 'react'
import { storiesOf } from '@storybook/react'
import { Help } from '../index.js'

storiesOf('Help', module)
    .add('Default', () => <Help>Allow me to be of assistance</Help>)

    .add('Status: Warning', () => (
        <Help warning>Allow me to be of assistance</Help>
    ))
    .add('Status: Valid', () => <Help valid>Allow me to be of assistance</Help>)
    .add('Status: Error', () => <Help error>Allow me to be of assistance</Help>)
    .add('Text overflow', () => (
        <div style={{ width: 200 }}>
            <Help>I take up more space than my container</Help>
        </div>
    ))
