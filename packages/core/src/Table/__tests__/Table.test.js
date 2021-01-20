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
    it('renders a table when no scrollHeight or scrollWidth are provided', () => {
        const wrapper = shallow(<Table />)

        expect(wrapper.find('table')).toHaveLength(1)
        expect(wrapper.find('div')).toHaveLength(0)
    })

    it('wraps the table in a div when scrollHeight is provided', () => {
        const height = '200px'
        const wrapper = mount(<Table scrollHeight={height} />)

        expect(wrapper.find('div')).toHaveLength(1)
        expect(wrapper.find('div > table')).toHaveLength(1)
    })

    it('wraps the table in a div when scrollWidth is provided', () => {
        const width = '200px'
        const wrapper = mount(<Table scrollWidth={width} />)

        expect(wrapper.find('div')).toHaveLength(1)
        expect(wrapper.find('div > table')).toHaveLength(1)
    })

    it('wraps the table in a div when both scrollHeight and scrollWidth are provided', () => {
        const size = '200px'
        const wrapper = mount(<Table scrollHeight={size} scrollWidth={size} />)

        expect(wrapper.find('div')).toHaveLength(1)
        expect(wrapper.find('div > table')).toHaveLength(1)
    })
})
