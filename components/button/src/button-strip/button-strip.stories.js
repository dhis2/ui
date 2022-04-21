import React from 'react'
import { Button, SplitButton } from '../index.js'
import { ButtonStrip } from './index.js'

const description = `
A wrapper for buttons to add spacing and alignment.

\`\`\`js
import { ButtonStrip } from '@dhis2/ui'
\`\`\`
`

const Wrapper = (fn) => (
    <div
        style={{
            width: '100%',
            border: '1px solid #c4c9cc',
            padding: 8,
        }}
    >
        {fn()}
    </div>
)

const alignmentArgType = {
    table: {
        type: {
            summary: 'bool',
            detail: "'middle' and 'end' are mutually exclusive props",
        },
    },
    control: { type: 'boolean' },
}

export default {
    title: 'Button Strip',
    component: ButtonStrip,
    decorators: [Wrapper],
    parameters: { docs: { description: { component: description } } },
    argTypes: {
        middle: { ...alignmentArgType },
        end: { ...alignmentArgType },
    },
}

export const Default = (args) => (
    <ButtonStrip {...args}>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
        <SplitButton>Label?</SplitButton>
    </ButtonStrip>
)

export const DefaultAlignedMiddle = (args) => (
    <ButtonStrip {...args}>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
    </ButtonStrip>
)
DefaultAlignedMiddle.args = { middle: true }
DefaultAlignedMiddle.storyName = 'Default - aligned middle'

export const DefaultAlignedRight = (args) => (
    <ButtonStrip {...args}>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
        <Button>Save</Button>
    </ButtonStrip>
)
DefaultAlignedRight.args = { end: true }
DefaultAlignedRight.storyName = 'Default - aligned right'
