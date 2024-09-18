import { shallow } from 'enzyme'
import React from 'react'
import { NoticeBoxTitle } from '../notice-box-title.js'

describe('NoticeBoxTitle', () => {
    it('should return null when there is no title', () => {
        const props = {
            dataTest: 'test',
        }

        expect(NoticeBoxTitle(props)).toBe(null)
    })

    it('should render title', () => {
        const wrapper = shallow(
            <NoticeBoxTitle title="title" dataTest="test" />
        )

        expect(wrapper.text()).toEqual(expect.stringContaining('title'))
    })
})
