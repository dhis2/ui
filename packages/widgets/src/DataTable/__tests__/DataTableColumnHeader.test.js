import { shallow, mount } from 'enzyme'
import React from 'react'
import { DataTableColumnHeader } from '../DataTableColumnHeader.js'
import { FilterHandle } from '../DataTableColumnHeader/FilterHandle.js'
import { Sorter } from '../DataTableColumnHeader/Sorter.js'
import {
    TableHeaderCell,
    TableHeaderCellAction,
} from '../TableElements/index.js'

describe('<DataTableColumnHeader>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(
            <DataTableColumnHeader>{children}</DataTableColumnHeader>
        )

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <thead>
                    <tr>
                        <DataTableColumnHeader ref={ref} />
                    </tr>
                </thead>
            </table>
        )

        expect(wrapper.find('th').getDOMNode()).toBe(ref.current)
    })
    it('accepts an align prop', () => {
        const right = 'right'
        const wrapper = shallow(<DataTableColumnHeader align={right} />)

        expect(wrapper.find(TableHeaderCell).prop('align')).toBe(right)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<DataTableColumnHeader className={className} />)

        expect(wrapper.find(TableHeaderCell).prop('className')).toBe(className)
    })
    it('accepts a colSpan prop', () => {
        const colSpan = '3'
        const wrapper = shallow(<DataTableColumnHeader colSpan={colSpan} />)

        expect(wrapper.find(TableHeaderCell).prop('colSpan')).toBe(colSpan)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<DataTableColumnHeader dataTest={dataTest} />)

        expect(wrapper.find(TableHeaderCell).prop('dataTest')).toBe(dataTest)
    })
    it('accepts filter, name, showFilter and onFilterIconClick props', () => {
        //
        const name = 'test'
        const fakeEvent = {
            target: 'test',
            value: 'test',
        }
        const onClickOpen = jest.fn()
        const onClickClosed = jest.fn()
        const wrapperOpen = shallow(
            <DataTableColumnHeader
                name={name}
                onFilterIconClick={onClickOpen}
                filter={<input />}
                showFilter={true}
            />
        )
        const wrapperClosed = shallow(
            <DataTableColumnHeader
                name={name}
                onFilterIconClick={onClickClosed}
                filter={<input />}
                showFilter={false}
            />
        )
        // Showing/hiding the filter
        expect(wrapperOpen.find('input')).toHaveLength(1)
        expect(wrapperClosed.find('input')).toHaveLength(0)

        // Clicking the filter icon on
        wrapperOpen
            .find(FilterHandle)
            .dive()
            .find(TableHeaderCellAction)
            .dive()
            .find('button')
            .simulate('click', fakeEvent)

        expect(onClickOpen).toHaveBeenCalledTimes(1)
        expect(onClickOpen).toHaveBeenCalledWith(
            {
                name,
                // toggled
                show: false,
            },
            fakeEvent
        )
        wrapperClosed
            .find(FilterHandle)
            .dive()
            .find(TableHeaderCellAction)
            .dive()
            .find('button')
            .simulate('click', fakeEvent)

        expect(onClickClosed).toHaveBeenCalledTimes(1)
        expect(onClickClosed).toHaveBeenCalledWith(
            {
                name,
                // toggled
                show: true,
            },
            fakeEvent
        )
    })
    it('accepts a fixed prop', () => {
        const wrapper = shallow(<DataTableColumnHeader fixed left="200px" />)

        expect(wrapper.find(TableHeaderCell).prop('fixed')).toBe(true)
    })
    it('accepts a large prop', () => {
        const wrapper = shallow(<DataTableColumnHeader large />)

        expect(wrapper.find(TableHeaderCell).prop('large')).toBe(true)
    })
    it('accepts a left prop', () => {
        const left = '200px'
        const wrapper = shallow(<DataTableColumnHeader left={left} />)

        expect(wrapper.find(TableHeaderCell).prop('left')).toBe(left)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<DataTableColumnHeader role={role} />)

        expect(wrapper.find(TableHeaderCell).prop('role')).toBe(role)
    })
    it('accepts a rowSpan prop', () => {
        const rowSpan = '3'
        const wrapper = shallow(<DataTableColumnHeader rowSpan={rowSpan} />)

        expect(wrapper.find(TableHeaderCell).prop('rowSpan')).toBe(rowSpan)
    })
    it('accepts a scope prop', () => {
        const scope = 'row'
        const wrapper = shallow(<DataTableColumnHeader scope={scope} />)

        expect(wrapper.find(TableHeaderCell).prop('scope')).toBe(scope)
    })
    it('accepts sortDirection and onSortIconClick props', () => {
        //
        const name = 'test'
        const fakeEvent = {
            target: 'test',
            value: 'test',
        }
        const onClick = jest.fn()
        const wrapper = shallow(
            <DataTableColumnHeader
                name={name}
                onSortIconClick={onClick}
                sortDirection={'asc'}
            />
        )

        wrapper
            .find(Sorter)
            .dive()
            .find(TableHeaderCellAction)
            .dive()
            .find('button')
            .simulate('click', fakeEvent)

        expect(onClick).toHaveBeenCalledTimes(1)
        expect(onClick).toHaveBeenCalledWith(
            {
                name,
                // next sort direction
                direction: 'desc',
            },
            fakeEvent
        )
    })
    it('accepts a top prop', () => {
        const top = '200px'
        const wrapper = shallow(<DataTableColumnHeader top={top} />)

        expect(wrapper.find(TableHeaderCell).prop('top')).toBe(top)
    })
    it('accepts a width prop', () => {
        const width = '200px'
        const wrapper = shallow(<DataTableColumnHeader width={width} />)

        expect(wrapper.find(TableHeaderCell).prop('width')).toBe(width)
    })
})
