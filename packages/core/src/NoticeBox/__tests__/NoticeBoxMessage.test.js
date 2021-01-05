import { shallow } from 'enzyme'
import React from 'react'
import { NoticeBoxMessage } from '../NoticeBoxMessage.js'

describe('NoticeBoxMessage', () => {
    it('should return null when there are no children', () => {
        const props = {
            dataTest: 'test',
        }

        expect(NoticeBoxMessage(props)).toBe(null)
    })

    it('should render children', () => {
        const wrapper = shallow(
            <NoticeBoxMessage dataTest="test">children</NoticeBoxMessage>
        )

        expect(wrapper.text()).toEqual(expect.stringContaining('children'))
    })
})
