import { Box } from '@dhis2-ui/box'
import React from 'react'
import { UserAvatar } from './user-avatar.js'

export default {
    title: 'Utils/User Avatar',
    component: UserAvatar,
}

const Template = (args) => (
    <Box width="32px" height="32px">
        <UserAvatar {...args} />
    </Box>
)

export const Default = Template.bind({})
Default.args = { name: 'John Doe' }
