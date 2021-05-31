import { shallow, mount } from 'enzyme'
import React from 'react'
import { DataTable } from '../DataTable.js'
import { Table, TableScrollBox } from '../TableElements/index.js'

describe('<DataTable>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<DataTable>{children}</DataTable>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(<DataTable ref={ref} />)

        expect(wrapper.find('table').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<DataTable className={className} />)

        expect(wrapper.find(Table).prop('className')).toBe(className)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<DataTable dataTest={dataTest} />)

        expect(wrapper.find(Table).prop('dataTest')).toBe(dataTest)
    })
    it('accepts a layout prop', () => {
        const layout = 'fixed'
        const wrapper = shallow(<DataTable layout={layout} />)

        expect(wrapper.find(Table).prop('layout')).toBe(layout)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<DataTable role={role} />)

        expect(wrapper.find(Table).prop('role')).toBe(role)
    })
    it('renders a datatable when no scrollHeight or scrollWidth are provided', () => {
        const wrapper = shallow(<DataTable />)

        expect(wrapper.find(Table)).toHaveLength(1)
        expect(wrapper.find(TableScrollBox)).toHaveLength(0)
    })
    it('wraps the datatable in a scroll box when scrollHeight is provided', () => {
        const height = '200px'
        const wrapper = shallow(<DataTable scrollHeight={height} />)

        expect(wrapper.dive().type()).toBe('div')
        expect(wrapper.find(TableScrollBox)).toHaveLength(1)
        expect(wrapper.find(TableScrollBox).dive().find(Table)).toHaveLength(1)
        expect(wrapper.find(TableScrollBox).prop('maxHeight')).toBe(height)
    })
    it('wraps the datatable in a scroll box when scrollWidth is provided', () => {
        const width = '200px'
        const wrapper = shallow(<DataTable scrollWidth={width} />)

        expect(wrapper.dive().type()).toBe('div')
        expect(wrapper.find(TableScrollBox)).toHaveLength(1)
        expect(wrapper.find(TableScrollBox).dive().find(Table)).toHaveLength(1)
        expect(wrapper.find(TableScrollBox).prop('maxWidth')).toBe(width)
    })
    it('wraps the datatable in a scroll box when both scrollHeight and scrollWidth are provided', () => {
        const size = '200px'
        const wrapper = shallow(
            <DataTable scrollHeight={size} scrollWidth={size} />
        )

        expect(wrapper.dive().type()).toBe('div')
        expect(wrapper.find(TableScrollBox)).toHaveLength(1)
        expect(wrapper.find(TableScrollBox).dive().find(Table)).toHaveLength(1)
        expect(wrapper.find(TableScrollBox).prop('maxHeight')).toBe(size)
        expect(wrapper.find(TableScrollBox).prop('maxWidth')).toBe(size)
    })
    it('accepts a width prop', () => {
        const width = '200px'
        const wrapper = shallow(<DataTable width={width} />)

        expect(wrapper.find(Table).prop('width')).toBe(width)
    })
})
