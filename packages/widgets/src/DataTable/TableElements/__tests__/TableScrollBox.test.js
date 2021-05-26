import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableScrollBox } from '../TableScrollBox.js'

describe('<TableScrollBox>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableScrollBox>{children}</TableScrollBox>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(<TableScrollBox ref={ref} />)

        expect(wrapper.find('div').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableScrollBox className={className} />)

        expect(wrapper.find('div').hasClass(className)).toBe(true)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableScrollBox dataTest={dataTest} />)

        expect(wrapper.find('div').prop('data-test')).toBe(dataTest)
    })
    it('accepts a maxHeight prop', () => {
        const maxHeight = '200px'
        const wrapper = shallow(<TableScrollBox maxHeight={maxHeight} />)
        expect(wrapper.html()).toContain('max-height: 200px;')
    })
    it('accepts a maxWidth prop', () => {
        const maxWidth = '200px'
        const wrapper = shallow(<TableScrollBox maxWidth={maxWidth} />)
        expect(wrapper.html()).toContain('max-width: 200px;')
    })
})
