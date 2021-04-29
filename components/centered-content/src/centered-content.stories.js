import React from 'react'
import { CenteredContent } from './centered-content.js'

const description = `
Centers children horizontally, and by default, vertically.
Use the \`top\` or \`bottom\` props to change vertical alignment.

\`\`\`js
import { CenteredContent } from '@dhis2/ui'
\`\`\`
`

const Wrapper = story => <div style={{ height: '150px' }}>{story()}</div>

export default {
    title: 'Layout/Centered Content',
    component: CenteredContent,
    decorators: [Wrapper],
    parameters: { docs: { description: { component: description } } },
}

const Template = args => (
    <CenteredContent {...args}>
        <span>Center me</span>
    </CenteredContent>
)

export const Default = Template.bind({})

export const Top = Template.bind({})
Top.args = { position: 'top' }

export const Bottom = Template.bind({})
Bottom.args = { position: 'bottom' }
