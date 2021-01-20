import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableCellHead } from '../TableCellHead.js'
import { Action } from '../TableCellHead/Action.js'
import { FilterHandle } from '../TableCellHead/FilterHandle.js'
import { ASC, Sorter, DESC } from '../TableCellHead/Sorter.js'

describe('<TableCellHead>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableCellHead>{children}</TableCellHead>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <thead>
                    <tr>
                        <TableCellHead ref={ref} />
                    </tr>
                </thead>
            </table>
        )

        expect(wrapper.find('th').getDOMNode()).toBe(ref.current)
    })
    it('accepts an align prop', () => {
        const align = 'right'
        const wrapper = shallow(<TableCellHead align={align} />)

        expect(wrapper.html()).toContain(`text-align: ${align};`)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableCellHead className={className} />)

        expect(wrapper.find('th').hasClass(className)).toBe(true)
    })
    it('accepts a colSpan prop', () => {
        const colSpan = '3'
        const wrapper = shallow(<TableCellHead colSpan={colSpan} />)

        expect(wrapper.find('th').prop('colSpan')).toBe(colSpan)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<TableCellHead dataTest={dataTest} />)

        expect(wrapper.find('th').prop('data-test')).toBe(dataTest)
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
            <TableCellHead
                name={name}
                onFilterIconClick={onClickOpen}
                filter={<input />}
                showFilter={true}
            />
        )
        const wrapperClosed = shallow(
            <TableCellHead
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
            .find(Action)
            .dive()
            .find('span')
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
            .find(Action)
            .dive()
            .find('span')
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
        const wrapper = shallow(<TableCellHead fixed />)

        expect(wrapper.type()).toBe('th')
        expect(wrapper.find('th').hasClass('fixed')).toBe(true)
    })
    it('accepts a large prop', () => {
        const wrapper = shallow(<TableCellHead large />)

        expect(wrapper.find('th').hasClass('large')).toBe(true)
    })
    it('accepts a left prop', () => {
        const left = '200px'
        const wrapper = shallow(<TableCellHead left={left} />)

        expect(wrapper.html()).toContain(`left: ${left};`)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<TableCellHead role={role} />)

        expect(wrapper.find('th').prop('role')).toBe(role)
    })
    it('accepts a rowSpan prop', () => {
        const rowSpan = '3'
        const wrapper = shallow(<TableCellHead rowSpan={rowSpan} />)

        expect(wrapper.find('th').prop('rowSpan')).toBe(rowSpan)
    })
    it('accepts a scope prop', () => {
        const scope = 'row'
        const wrapper = shallow(<TableCellHead scope={scope} />)

        expect(wrapper.find('th').prop('scope')).toBe(scope)
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
            <TableCellHead
                name={name}
                onSortIconClick={onClick}
                sortDirection={ASC}
            />
        )

        wrapper
            .find(Sorter)
            .dive()
            .find(Action)
            .dive()
            .find('span')
            .simulate('click', fakeEvent)

        expect(onClick).toHaveBeenCalledTimes(1)
        expect(onClick).toHaveBeenCalledWith(
            {
                name,
                // next sort direction
                direction: DESC,
            },
            fakeEvent
        )
    })
    it('accepts a top prop', () => {
        const top = '200px'
        const wrapper = shallow(<TableCellHead top={top} />)

        expect(wrapper.html()).toContain(`top: ${top};`)
    })
    it('accepts a width prop', () => {
        const width = '200px'
        const wrapper = shallow(<TableCellHead width={width} />)

        expect(wrapper.html()).toContain(`width: ${width};`)
    })
})
