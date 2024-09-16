import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableRow } from '../table-row.js'

describe('<TableRow>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableRow>{children}</TableRow>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <thead>
                    <TableRow ref={ref} />
                </thead>
            </table>
        )

        expect(wrapper.find('tr').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableRow className={className} />)

        expect(wrapper.find('tr').hasClass(className)).toBe(true)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableRow dataTest={dataTest} />)

        expect(wrapper.find('tr').prop('data-test')).toBe(dataTest)
    })
    it('accepts a draggable prop', () => {
        const wrapper = shallow(<TableRow draggable />)

        expect(wrapper.find('tr').hasClass('draggable')).toBe(true)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<TableRow role={role} />)

        expect(wrapper.find('tr').prop('role')).toBe(role)
    })
    it('accepts a selected prop', () => {
        const wrapper = shallow(<TableRow selected />)

        expect(wrapper.find('tr').hasClass('selected')).toBe(true)
    })
})
