import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableHeaderCell } from '../TableHeaderCell.js'

describe('<TableHeaderCell>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableHeaderCell>{children}</TableHeaderCell>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <thead>
                    <tr>
                        <TableHeaderCell ref={ref} />
                    </tr>
                </thead>
            </table>
        )

        expect(wrapper.find('th').getDOMNode()).toBe(ref.current)
    })
    it('accepts an active prop', () => {
        const wrapper = shallow(<TableHeaderCell active />)

        expect(wrapper.find('th').hasClass('active')).toBe(true)
    })
    it('accepts an align prop', () => {
        const align = 'right'
        const wrapper = shallow(<TableHeaderCell align={align} />)

        expect(wrapper.html()).toContain(`text-align: ${align};`)
    })
    it('accepts a bordered prop', () => {
        const wrapper = shallow(<TableHeaderCell bordered />)

        expect(wrapper.find('th').hasClass('bordered')).toBe(true)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableHeaderCell className={className} />)

        expect(wrapper.find('th').hasClass(className)).toBe(true)
    })
    it('accepts a colSpan prop', () => {
        const colSpan = '3'
        const wrapper = shallow(<TableHeaderCell colSpan={colSpan} />)

        expect(wrapper.find('th').prop('colSpan')).toBe(colSpan)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableHeaderCell dataTest={dataTest} />)

        expect(wrapper.find('th').prop('data-test')).toBe(dataTest)
    })
    it('accepts an error prop', () => {
        const wrapper = shallow(<TableHeaderCell error />)

        expect(wrapper.find('th').hasClass('error')).toBe(true)
    })
    it('accepts a fixed prop', () => {
        const wrapper = shallow(<TableHeaderCell fixed />)

        expect(wrapper.type()).toBe('th')
        expect(wrapper.find('th').hasClass('fixed')).toBe(true)
    })
    it('accepts a large prop', () => {
        const wrapper = shallow(<TableHeaderCell large />)

        expect(wrapper.find('th').hasClass('large')).toBe(true)
    })
    it('accepts a left prop', () => {
        const left = '200px'
        const wrapper = shallow(<TableHeaderCell left={left} />)

        expect(wrapper.html()).toContain(`left: ${left};`)
    })
    it('accepts an muted prop', () => {
        const wrapper = shallow(<TableHeaderCell muted />)

        expect(wrapper.find('th').hasClass('muted')).toBe(true)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<TableHeaderCell role={role} />)

        expect(wrapper.find('th').prop('role')).toBe(role)
    })
    it('accepts a rowSpan prop', () => {
        const rowSpan = '3'
        const wrapper = shallow(<TableHeaderCell rowSpan={rowSpan} />)

        expect(wrapper.find('th').prop('rowSpan')).toBe(rowSpan)
    })
    it('accepts a scope prop', () => {
        const scope = 'row'
        const wrapper = shallow(<TableHeaderCell scope={scope} />)

        expect(wrapper.find('th').prop('scope')).toBe(scope)
    })
    it('accepts a top prop', () => {
        const top = '200px'
        const wrapper = shallow(<TableHeaderCell top={top} />)

        expect(wrapper.html()).toContain(`top: ${top};`)
    })
    it('accepts a valid prop', () => {
        const wrapper = shallow(<TableHeaderCell valid />)

        expect(wrapper.find('th').hasClass('valid')).toBe(true)
    })
    it('accepts a width prop', () => {
        const width = '200px'
        const wrapper = shallow(<TableHeaderCell width={width} />)

        expect(wrapper.html()).toContain(`width: ${width};`)
    })
    it('accepts an onClick prop', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<TableHeaderCell onClick={onClick} />)

        wrapper.simulate('click')

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
