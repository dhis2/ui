import React from 'react'
import { storiesOf } from '@storybook/react'
import { ComponentCover } from './ComponentCover.js'
import { CircularLoader, Card } from '../index.js'

storiesOf('Utility/ComponentCover', module)
    .add('CircularLoader', () => (
        <div style={{ width: '400px', height: '400px' }}>
            <ComponentCover>
                <CircularLoader />
            </ComponentCover>

            <h1>Text behind the cover</h1>
            <p>Lorem ipsum</p>
        </div>
    ))

    .add('Modal', () => (
        <div style={{ width: '400px', height: '400px', background: 'purple' }}>
            <ComponentCover>
                <div style={{ width: '200px', height: '200px' }}>
                    <Card>Some text.</Card>
                </div>
            </ComponentCover>

            <h1>Text behind the cover</h1>
            <p>Lorem ipsum</p>
        </div>
    ))
