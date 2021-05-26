import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableDataCell } from '../TableDataCell.js'

describe('<TableDataCell>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableDataCell>{children}</TableDataCell>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <tbody>
                    <tr>
                        <TableDataCell ref={ref} />
                    </tr>
                </tbody>
            </table>
        )

        expect(wrapper.find('td').getDOMNode()).toBe(ref.current)
    })
    it('accepts an active prop', () => {
        const wrapper = shallow(<TableDataCell active />)

        expect(wrapper.find('td').hasClass('active')).toBe(true)
    })
    it('accepts an align prop', () => {
        const align = 'right'
        const wrapper = shallow(<TableDataCell align={align} />)

        expect(wrapper.html()).toContain(`text-align: ${align};`)
    })
    it('accepts a bordered prop', () => {
        const wrapper = shallow(<TableDataCell bordered />)

        expect(wrapper.find('td').hasClass('bordered')).toBe(true)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableDataCell className={className} />)

        expect(wrapper.find('td').hasClass(className)).toBe(true)
    })
    it('accepts a colSpan prop', () => {
        const colSpan = '3'
        const wrapper = shallow(<TableDataCell colSpan={colSpan} />)

        expect(wrapper.find('td').prop('colSpan')).toBe(colSpan)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableDataCell dataTest={dataTest} />)

        expect(wrapper.find('td').prop('data-test')).toBe(dataTest)
    })
    it('accepts an error prop', () => {
        const wrapper = shallow(<TableDataCell error />)

        expect(wrapper.find('td').hasClass('error')).toBe(true)
    })
    it('accepts a large prop', () => {
        const wrapper = shallow(<TableDataCell large />)

        expect(wrapper.find('td').hasClass('large')).toBe(true)
    })
    it('accepts a left prop', () => {
        const left = '200px'
        const wrapper = shallow(<TableDataCell left={left} />)

        expect(wrapper.html()).toContain(`left: ${left};`)
    })
    it('accepts a muted prop', () => {
        const wrapper = shallow(<TableDataCell muted />)

        expect(wrapper.find('td').hasClass('muted')).toBe(true)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<TableDataCell role={role} />)

        expect(wrapper.find('td').prop('role')).toBe(role)
    })
    it('accepts a rowSpan prop', () => {
        const rowSpan = '3'
        const wrapper = shallow(<TableDataCell rowSpan={rowSpan} />)

        expect(wrapper.find('td').prop('rowSpan')).toBe(rowSpan)
    })
    it('accepts a scope prop', () => {
        const scope = 'row'
        const wrapper = shallow(<TableDataCell scope={scope} />)

        expect(wrapper.find('td').prop('scope')).toBe(scope)
    })
    it('accepts a staticStyle prop', () => {
        const wrapper = shallow(<TableDataCell staticStyle />)

        expect(wrapper.find('td').hasClass('staticStyle')).toBe(true)
    })
    it('accepts a valid prop', () => {
        const wrapper = shallow(<TableDataCell valid />)

        expect(wrapper.find('td').hasClass('valid')).toBe(true)
    })
    it('accepts a width prop', () => {
        const width = '200px'
        const wrapper = shallow(<TableDataCell width={width} />)

        expect(wrapper.html()).toContain(`width: ${width};`)
    })
    it('accepts an onClick prop', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<TableDataCell onClick={onClick} />)

        wrapper.simulate('click')

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
