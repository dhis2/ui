import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableFoot } from '../table-foot.js'

describe('<TableFoot>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableFoot>{children}</TableFoot>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <TableFoot ref={ref} />
            </table>
        )

        expect(wrapper.find('tfoot').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableFoot className={className} />)

        expect(wrapper.find('tfoot').hasClass(className)).toBe(true)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableFoot dataTest={dataTest} />)

        expect(wrapper.find('tfoot').prop('data-test')).toBe(dataTest)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<TableFoot role={role} />)

        expect(wrapper.find('tfoot').prop('role')).toBe(role)
    })
})
