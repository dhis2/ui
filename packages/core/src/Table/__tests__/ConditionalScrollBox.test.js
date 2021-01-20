import { shallow } from 'enzyme'
import React from 'react'
import { ConditionalScrollBox } from '../ConditionalScrollBox.js'

describe('<ConditionalScrollBox>', () => {
    it('renders only children when no scrollHeight or scrollWidth are provided', () => {
        const children = 'test'
        const wrapper = shallow(
            <ConditionalScrollBox>{children}</ConditionalScrollBox>
        )
        expect(wrapper.text()).toBe(children)
        expect(wrapper.find('div')).toHaveLength(0)
    })

    it('wraps children in a div when scrollHeight is provided', () => {
        const height = '200px'
        const children = 'test'
        const wrapper = shallow(
            <ConditionalScrollBox scrollHeight={height}>
                {children}
            </ConditionalScrollBox>
        )

        expect(wrapper.type()).toBe('div')
        expect(wrapper).toHaveLength(1)
        expect(wrapper.html()).toContain('max-height: 200px;')
    })

    it('wraps children in a div when scrollWidth is provided', () => {
        const width = '200px'
        const children = 'test'
        const wrapper = shallow(
            <ConditionalScrollBox scrollWidth={width}>
                {children}
            </ConditionalScrollBox>
        )
        expect(wrapper.type()).toBe('div')
        expect(wrapper).toHaveLength(1)
        expect(wrapper.html()).toContain('max-width: 200px;')
    })

    it('wraps children in a div when both scrollHeight and scrollWidth are provided', () => {
        const size = '200px'
        const children = 'test'
        const wrapper = shallow(
            <ConditionalScrollBox scrollHeight={size} scrollWidth={size}>
                {children}
            </ConditionalScrollBox>
        )

        expect(wrapper.type()).toBe('div')
        expect(wrapper).toHaveLength(1)
        expect(wrapper.html()).toContain('max-height: 200px;')
        expect(wrapper.html()).toContain('max-width: 200px;')
    })
})
