import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonStrip } from './ButtonStrip.js'
import { Button } from '../index.js'

const Wrapper = fn => (
    <div
        style={{
            width: '450px',
            border: '1px solid #c4c9cc',
            padding: 8,
        }}
    >
        {fn()}
    </div>
)

storiesOf('Component/Core/ButtonStrip', module)
    .addDecorator(Wrapper)
    .add('Default', () => (
        <ButtonStrip>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
        </ButtonStrip>
    ))
    .add('Default - aligned middle', () => (
        <ButtonStrip middle>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
        </ButtonStrip>
    ))
    .add('Default - aligned right', () => (
        <ButtonStrip end>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
            <Button>Save</Button>
        </ButtonStrip>
    ))
