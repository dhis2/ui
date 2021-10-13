import React from 'react'
import { Divider } from './divider.js'

const description = `
A light divider to separate content.

\`\`\`js
import { Divider } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Layout/Divider',
    component: Divider,
    argTypes: { margin: { table: { defaultValue: { summary: '8px 0' } } } },
    parameters: { docs: { description: { component: description } } },
}

const Template = (args) => (
    <>
        <div>Content above</div>
        <Divider {...args} />
        <div>Content below</div>
    </>
)

export const Default = Template.bind({})

export const Dense = Template.bind({})
Dense.args = { dense: true }

export const Margin = Template.bind({})
Margin.args = { margin: '20px 20px 20px 20px' }
