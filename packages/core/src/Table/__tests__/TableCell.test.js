import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableCell } from '../TableCell.js'

describe('<TableCell>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableCell>{children}</TableCell>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <tbody>
                    <tr>
                        <TableCell ref={ref} />
                    </tr>
                </tbody>
            </table>
        )

        expect(wrapper.find('td').getDOMNode()).toBe(ref.current)
    })
    it('accepts an active prop', () => {
        const wrapper = shallow(<TableCell active />)

        expect(wrapper.find('td').hasClass('active')).toBe(true)
    })
    it('accepts an align prop', () => {
        const align = 'right'
        const wrapper = shallow(<TableCell align={align} />)

        expect(wrapper.html()).toContain(`text-align: ${align};`)
    })
    it('accepts a bordered prop', () => {
        const wrapper = shallow(<TableCell bordered />)

        expect(wrapper.find('td').hasClass('bordered')).toBe(true)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableCell className={className} />)

        expect(wrapper.find('td').hasClass(className)).toBe(true)
    })
    it('accepts a colSpan prop', () => {
        const colSpan = '3'
        const wrapper = shallow(<TableCell colSpan={colSpan} />)

        expect(wrapper.find('td').prop('colSpan')).toBe(colSpan)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableCell dataTest={dataTest} />)

        expect(wrapper.find('td').prop('data-test')).toBe(dataTest)
    })
    it('accepts an error prop', () => {
        const wrapper = shallow(<TableCell error />)

        expect(wrapper.find('td').hasClass('error')).toBe(true)
    })
    it('accepts a fixed prop', () => {
        const wrapper = shallow(<TableCell fixed />)

        expect(wrapper.type()).toBe('th')
        expect(wrapper.find('th').hasClass('fixed')).toBe(true)
    })
    it('accepts a large prop', () => {
        const wrapper = shallow(<TableCell large />)

        expect(wrapper.find('td').hasClass('large')).toBe(true)
    })
    it('accepts a left prop', () => {
        const left = '200px'
        const wrapper = shallow(<TableCell left={left} />)

        expect(wrapper.html()).toContain(`left: ${left};`)
    })
    it('accepts a muted prop', () => {
        const wrapper = shallow(<TableCell muted />)

        expect(wrapper.find('td').hasClass('muted')).toBe(true)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<TableCell role={role} />)

        expect(wrapper.find('td').prop('role')).toBe(role)
    })
    it('accepts a rowSpan prop', () => {
        const rowSpan = '3'
        const wrapper = shallow(<TableCell rowSpan={rowSpan} />)

        expect(wrapper.find('td').prop('rowSpan')).toBe(rowSpan)
    })
    it('accepts a scope prop', () => {
        const scope = 'row'
        const wrapper = shallow(<TableCell scope={scope} />)

        expect(wrapper.find('td').prop('scope')).toBe(scope)
    })
    it('can render either a td or th tag depending on the fixed and tag prop', () => {
        // default
        expect(shallow(<TableCell />).type()).toBe('td')
        // using the tag prop
        expect(shallow(<TableCell tag="td" />).type()).toBe('td')
        expect(shallow(<TableCell tag="th" />).type()).toBe('th')
        // with fixed prop
        expect(shallow(<TableCell fixed />).type()).toBe('th')
        // tag prop should take presedence over fixed prop
        expect(shallow(<TableCell fixed tag="td" />).type()).toBe('td')
        expect(shallow(<TableCell fixed tag="th" />).type()).toBe('th')
    })
    it('accepts a valid prop', () => {
        const wrapper = shallow(<TableCell valid />)

        expect(wrapper.find('td').hasClass('valid')).toBe(true)
    })
    it('accepts a width prop', () => {
        const width = '200px'
        const wrapper = shallow(<TableCell width={width} />)

        expect(wrapper.html()).toContain(`width: ${width};`)
    })
    it('accepts an onClick prop', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<TableCell onClick={onClick} />)

        wrapper.simulate('click')

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
