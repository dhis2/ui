import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableHead } from '../TableHead.js'

describe('<TableHead>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableHead>{children}</TableHead>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <TableHead ref={ref} />
            </table>
        )

        expect(wrapper.find('thead').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableHead className={className} />)

        expect(wrapper.find('thead').hasClass(className)).toBe(true)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableHead dataTest={dataTest} />)

        expect(wrapper.find('thead').prop('data-test')).toBe(dataTest)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<TableHead role={role} />)

        expect(wrapper.find('thead').prop('role')).toBe(role)
    })
})
