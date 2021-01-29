import React from 'react'
import { Button, SplitButton } from '../index.js'
import { ButtonStrip } from './ButtonStrip.js'

const Wrapper = fn => (
    <div
        style={{
            display: 'inline-block',
            border: '1px solid #c4c9cc',
            padding: 8,
        }}
    >
        {fn()}
    </div>
)

export default {
    title: 'Actions/Buttons/Button Strip',
    component: ButtonStrip,
    decorators: [Wrapper],
}

export const Default = () => (
    <ButtonStrip>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
        <SplitButton>Label?</SplitButton>
    </ButtonStrip>
)

export const DefaultAlignedMiddle = () => (
    <ButtonStrip middle>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
    </ButtonStrip>
)

DefaultAlignedMiddle.story = {
    name: 'Default - aligned middle',
}

export const DefaultAlignedRight = () => (
    <ButtonStrip end>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
    </ButtonStrip>
)

DefaultAlignedRight.story = {
    name: 'Default - aligned right',
}
