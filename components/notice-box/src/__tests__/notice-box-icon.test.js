import { shallow } from 'enzyme'
import React from 'react'
import { NoticeBoxIcon } from '../notice-box-icon.js'

describe('NoticeBoxIcon', () => {
    it('should render info icon by default', () => {
        const wrapper = shallow(<NoticeBoxIcon dataTest="test" />)

        expect(wrapper.find('SvgWarningFilled24')).toHaveLength(0)
        expect(wrapper.find('SvgErrorFilled24')).toHaveLength(0)
        expect(wrapper.find('SvgInfoFilled24')).toHaveLength(1)
    })

    it('should log errors when both warning and error flag are set', () => {
        const spy = jest
            .spyOn(global.console, 'error')
            .mockImplementation(() => {})
        shallow(<NoticeBoxIcon warning error dataTest="test" />)

        expect(spy.mock.calls[0]).toEqual([
            'Warning: Failed %s type: %s%s',
            'prop',
            "Invalid prop `error` supplied to `NoticeBoxIcon`, Property 'error' is mutually exclusive with 'warning', but both have a thruthy value.",
            expect.any(String),
        ])

        expect(spy.mock.calls[1]).toEqual([
            'Warning: Failed %s type: %s%s',
            'prop',
            "Invalid prop `warning` supplied to `NoticeBoxIcon`, Property 'warning' is mutually exclusive with 'error', but both have a thruthy value.",
            expect.any(String),
        ])

        spy.mockRestore()
    })

    it('should render error icon when both warning and error flag are set', () => {
        const spy = jest
            .spyOn(global.console, 'error')
            .mockImplementation(() => {})
        const wrapper = shallow(<NoticeBoxIcon warning error dataTest="test" />)

        expect(wrapper.find('SvgWarningFilled24')).toHaveLength(0)
        expect(wrapper.find('SvgErrorFilled24')).toHaveLength(1)
        expect(wrapper.find('SvgInfoFilled24')).toHaveLength(0)

        spy.mockRestore()
    })

    it('should render error icon when only error flag is set', () => {
        const wrapper = shallow(<NoticeBoxIcon error dataTest="test" />)

        expect(wrapper.find('SvgWarningFilled24')).toHaveLength(0)
        expect(wrapper.find('SvgErrorFilled24')).toHaveLength(1)
        expect(wrapper.find('SvgInfoFilled24')).toHaveLength(0)
    })

    it('should render warning icon when only warning flag is set', () => {
        const wrapper = shallow(<NoticeBoxIcon warning dataTest="test" />)

        expect(wrapper.find('SvgWarningFilled24')).toHaveLength(1)
        expect(wrapper.find('SvgErrorFilled24')).toHaveLength(0)
        expect(wrapper.find('SvgInfoFilled24')).toHaveLength(0)
    })
})
