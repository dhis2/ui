import { shallow, mount } from 'enzyme'
import React from 'react'
import { Table } from '../Table.js'

describe('<Table>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<Table>{children}</Table>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(<Table ref={ref} />)

        expect(wrapper.find('table').getDOMNode()).toBe(ref.current)
    })
    it('accepts a borderless prop', () => {
        const wrapper = shallow(<Table borderless />)

        expect(wrapper.find('table').hasClass('borderless')).toBe(true)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<Table className={className} />)

        expect(wrapper.find('table').hasClass(className)).toBe(true)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<Table dataTest={dataTest} />)

        expect(wrapper.find('table').prop('data-test')).toBe(dataTest)
    })
    it('accepts a layout prop', () => {
        const layout = 'fixed'
        const wrapper = shallow(<Table layout={layout} />)

        expect(wrapper.html()).toContain(`table-layout: ${layout};`)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<Table role={role} />)

        expect(wrapper.find('table').prop('role')).toBe(role)
    })
    it('accepts a width prop', () => {
        const width = '200px'
        const wrapper = shallow(<Table width={width} />)

        expect(wrapper.html()).toContain(`width: ${width};`)
    })
})
