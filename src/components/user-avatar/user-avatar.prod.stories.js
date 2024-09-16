import React from 'react'
import { UserAvatar } from './user-avatar.js'

export default {
    title: 'User Avatar',
    component: UserAvatar,
}

const Template = (args) => <UserAvatar {...args} />

export const Default = Template.bind({})
Default.args = { name: 'John Doe' }

export const Sizes = () => (
    <>
        <UserAvatar name="John Doe" extrasmall />
        <UserAvatar name="John Doe" small />
        <UserAvatar name="John Doe" medium />
        <UserAvatar name="John Doe" large />
        <UserAvatar name="John Doe" extralarge />
    </>
)
