import { TableDataCell, TableHeaderCell } from '@dhis2/ui-core'
import { shallow, mount } from 'enzyme'
import React from 'react'
import { DataTableCell } from '../DataTableCell.js'

describe('<DataTableCell>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<DataTableCell>{children}</DataTableCell>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <tbody>
                    <tr>
                        <DataTableCell ref={ref} />
                    </tr>
                </tbody>
            </table>
        )

        expect(wrapper.find('td').getDOMNode()).toBe(ref.current)
    })
    it('accepts an active prop', () => {
        const wrapper = shallow(<DataTableCell active />)

        expect(wrapper.find(TableDataCell).prop('active')).toBe(true)
    })
    it('accepts an align prop', () => {
        const right = 'right'
        const wrapper = shallow(<DataTableCell align={right} />)

        expect(wrapper.find(TableDataCell).prop('align')).toBe(right)
    })
    it('accepts a bordered prop', () => {
        const wrapper = shallow(<DataTableCell bordered />)

        expect(wrapper.find(TableDataCell).prop('bordered')).toBe(true)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<DataTableCell className={className} />)

        expect(wrapper.find(TableDataCell).prop('className')).toBe(className)
    })
    it('accepts a colSpan prop', () => {
        const colSpan = '3'
        const wrapper = shallow(<DataTableCell colSpan={colSpan} />)

        expect(wrapper.find(TableDataCell).prop('colSpan')).toBe(colSpan)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<DataTableCell dataTest={dataTest} />)

        expect(wrapper.find(TableDataCell).prop('dataTest')).toBe(dataTest)
    })
    it('accepts an error prop', () => {
        const wrapper = shallow(<DataTableCell error />)

        expect(wrapper.find(TableDataCell).prop('error')).toBe(true)
    })
    it('accepts a fixed prop', () => {
        const wrapper = shallow(<DataTableCell fixed />)

        expect(wrapper.find(TableDataCell)).toHaveLength(0)
        expect(wrapper.find(TableHeaderCell)).toHaveLength(1)
        expect(wrapper.find(TableHeaderCell).dive().type()).toBe('th')
        expect(wrapper.find(TableHeaderCell).prop('fixed')).toBe(true)
    })
    it('accepts a large prop', () => {
        const wrapper = shallow(<DataTableCell large />)

        expect(wrapper.find(TableDataCell).prop('large')).toBe(true)
    })
    it('accepts a left prop', () => {
        const left = '200px'
        const wrapper = shallow(<DataTableCell left={left} />)

        expect(wrapper.find(TableDataCell).prop('left')).toBe(left)
    })
    it('accepts a muted prop', () => {
        const wrapper = shallow(<DataTableCell muted />)

        expect(wrapper.find(TableDataCell).prop('muted')).toBe(true)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<DataTableCell role={role} />)

        expect(wrapper.find(TableDataCell).prop('role')).toBe(role)
    })
    it('accepts a rowSpan prop', () => {
        const rowSpan = '3'
        const wrapper = shallow(<DataTableCell rowSpan={rowSpan} />)

        expect(wrapper.find(TableDataCell).prop('rowSpan')).toBe(rowSpan)
    })
    it('accepts a scope prop', () => {
        const scope = 'row'
        const wrapper = shallow(<DataTableCell scope={scope} />)

        expect(wrapper.find(TableDataCell).prop('scope')).toBe(scope)
    })
    it('accepts a staticStyle prop', () => {
        const wrapper = shallow(<DataTableCell staticStyle />)

        expect(wrapper.find(TableDataCell).prop('staticStyle')).toBe(true)
    })
    it('can render either a td or th tag depending on the fixed and tag prop', () => {
        // default
        expect(
            shallow(<DataTableCell />)
                .dive()
                .type()
        ).toBe('td')
        // using the tag prop
        expect(
            shallow(<DataTableCell tag="td" />)
                .dive()
                .type()
        ).toBe('td')
        expect(
            shallow(<DataTableCell tag="th" />)
                .dive()
                .type()
        ).toBe('th')
        // with fixed prop
        expect(
            shallow(<DataTableCell fixed />)
                .dive()
                .type()
        ).toBe('th')
        // tag prop should take presedence over fixed prop
        expect(
            shallow(<DataTableCell fixed tag="td" />)
                .dive()
                .type()
        ).toBe('td')
        expect(
            shallow(<DataTableCell fixed tag="th" />)
                .dive()
                .type()
        ).toBe('th')
    })
    it('accepts a valid prop', () => {
        const wrapper = shallow(<DataTableCell valid />)

        expect(wrapper.find(TableDataCell).prop('valid')).toBe(true)
    })
    it('accepts a width prop', () => {
        const width = '200px'
        const wrapper = shallow(<DataTableCell width={width} />)

        expect(wrapper.find(TableDataCell).prop('width')).toBe(width)
    })
    it('accepts an onClick prop', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<DataTableCell onClick={onClick} />)

        wrapper.simulate('click')

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
