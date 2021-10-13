import React from 'react'
import { Box } from './box.js'

const description = `
A box for creating some layout on the page.

\`\`\`js
import { Box } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Layout/Box',
    component: Box,
    parameters: { docs: { description: { component: description } } },
}

const Template = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = { children: 'I am a child in a Box.' }

export const Height = Template.bind({})
Height.args = {
    ...Default.args,
    height: '250px',
}

export const MaxHeight = Template.bind({})
MaxHeight.args = {
    children: (
        <p style={{ height: '500px' }}>I am a tall child in a low Box.</p>
    ),
    maxHeight: '250px',
}

export const MinHeight = Template.bind({})
MinHeight.args = { ...Default.args, minHeight: '50vh' }

export const Width = Template.bind({})
Width.args = { ...Default.args, width: '250px' }

export const MinWidth = Template.bind({})
MinWidth.args = { ...Default.args, minWidth: '50vh' }

export const MaxWidth = Template.bind({})
MaxWidth.args = { ...Default.args, maxWidth: '50vh' }

export const Overflow = Template.bind({})
Overflow.args = {
    maxHeight: '250px',
    overflow: 'scroll',
    children: (
        <p style={{ height: '500px' }}>
            I am a tall child in a low Box, and my parent clips me
        </p>
    ),
}
