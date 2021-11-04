import { Box } from '@dhis2-ui/box'
import React from 'react'
import { UserAvatar } from './user-avatar.js'

const description = `
A user avatar diplaying either a profile image or the user's initials.

\`\`\`js
import { UserAvatar } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Utils/User Avatar',
    component: UserAvatar,
    parameters: { docs: { description: { component: description } } },
}

const Template = (args) => (
    <Box width="32px" height="32px">
        <UserAvatar {...args} />
    </Box>
)

export const Default = Template.bind({})
Default.args = { name: 'John Doe' }
