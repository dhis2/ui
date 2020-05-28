import React from 'react'
import { shallow } from 'enzyme'
import { NoticeBoxIcon } from '../NoticeBoxIcon.js'

describe('NoticeBoxIcon', () => {
    it('should render info icon by default', () => {
        const wrapper = shallow(<NoticeBoxIcon dataTest="test" />)

        expect(wrapper.find('Warning')).toHaveLength(0)
        expect(wrapper.find('Error')).toHaveLength(0)
        expect(wrapper.find('Info')).toHaveLength(1)
    })

    it('should log errors when both warning and error flag are set', () => {
        const spy = jest
            .spyOn(global.console, 'error')
            .mockImplementation(() => {})
        shallow(<NoticeBoxIcon warning error dataTest="test" />)

        expect(spy.mock.calls[0][0]).toMatchSnapshot()
        expect(spy.mock.calls[1][0]).toMatchSnapshot()

        spy.mockRestore()
    })

    it('should render error icon when both warning and error flag are set', () => {
        const spy = jest
            .spyOn(global.console, 'error')
            .mockImplementation(() => {})
        const wrapper = shallow(<NoticeBoxIcon warning error dataTest="test" />)

        expect(wrapper.find('Warning')).toHaveLength(0)
        expect(wrapper.find('Info')).toHaveLength(0)
        expect(wrapper.find('Error')).toHaveLength(1)

        spy.mockRestore()
    })

    it('should render error icon when only error flag is set', () => {
        const wrapper = shallow(<NoticeBoxIcon error dataTest="test" />)

        expect(wrapper.find('Warning')).toHaveLength(0)
        expect(wrapper.find('Info')).toHaveLength(0)
        expect(wrapper.find('Error')).toHaveLength(1)
    })

    it('should render warning icon when only warning flag is set', () => {
        const wrapper = shallow(<NoticeBoxIcon warning dataTest="test" />)

        expect(wrapper.find('Info')).toHaveLength(0)
        expect(wrapper.find('Error')).toHaveLength(0)
        expect(wrapper.find('Warning')).toHaveLength(1)
    })
})
