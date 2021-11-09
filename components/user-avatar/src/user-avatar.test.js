import { shallow } from 'enzyme'
import React from 'react'
import { ImageAvatar } from './image-avatar.js'
import { TextAvatar } from './text-avatar.js'
import { UserAvatar } from './user-avatar.js'

describe('UserAvatar', () => {
    it('renders an ImageAvatar when a avatarId is provided', () => {
        const wrapper = shallow(<UserAvatar name="John Doe" avatarId="123" />)
        expect(wrapper.find(ImageAvatar)).toHaveLength(1)
    })

    it('renders a TextAvatar when no avatarId is provided', () => {
        const wrapper = shallow(<UserAvatar name="John Doe" />)
        expect(wrapper.find(TextAvatar)).toHaveLength(1)
    })
    describe('sizes', () => {
        const sizes = ['extrasmall', 'small', 'medium', 'large', 'extralarge']
        for (const size of sizes) {
            it(`should accept size prop "${size}"`, () => {
                const props = {
                    name: 'John Doe',
                    [size]: true,
                }
                const wrapper = shallow(<UserAvatar {...props} />)
                expect(wrapper.hasClass(size)).toBe(true)
            })
        }
    })
})
