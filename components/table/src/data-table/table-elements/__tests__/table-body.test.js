import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableBody } from '../table-body.js'

describe('<TableBody>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableBody>{children}</TableBody>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <TableBody ref={ref} />
            </table>
        )

        expect(wrapper.find('tbody').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableBody className={className} />)

        expect(wrapper.find('tbody').hasClass(className)).toBe(true)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableBody dataTest={dataTest} />)

        expect(wrapper.find('tbody').prop('data-test')).toBe(dataTest)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<TableBody role={role} />)

        expect(wrapper.find('tbody').prop('role')).toBe(role)
    })
})
