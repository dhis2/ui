import { shallow } from 'enzyme'
import React from 'react'
import { ImageAvatar } from './image-avatar.js'
import { TextAvatar } from './text-avatar.js'
import { UserAvatar } from './user-avatar.js'

describe('UserAvatar', () => {
    it('renders an ImageAvatar when a avatarId is provided', () => {
        const wrapper = shallow(<UserAvatar name="John Doe" avatarId="123" />)
        expect(wrapper.type()).toBe(ImageAvatar)
    })

    it('renders an ImageAvatar when a avatarId is provided', () => {
        const wrapper = shallow(<UserAvatar name="John Doe" />)
        expect(wrapper.type()).toBe(TextAvatar)
    })
})
