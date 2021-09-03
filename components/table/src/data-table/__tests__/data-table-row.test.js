import { shallow, mount } from 'enzyme'
import React from 'react'
import { DataTableRow } from '../data-table-row/data-table-row.js'
import { DragHandleCell } from '../data-table-row/drag-handle-cell.js'
import { ExpandHandleCell } from '../data-table-row/expand-handle-cell.js'
import { ExpandedRow } from '../data-table-row/expanded-row.js'
import { TableRow } from '../table-elements/index.js'

describe('<DataTableRow>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<DataTableRow>{children}</DataTableRow>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <thead>
                    <DataTableRow ref={ref} />
                </thead>
            </table>
        )

        expect(wrapper.find('tr').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<DataTableRow className={className} />)

        expect(wrapper.find(TableRow).prop('className')).toBe(className)
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<DataTableRow dataTest={dataTest} />)

        expect(wrapper.find(TableRow).prop('dataTest')).toBe(dataTest)
    })
    it('accepts a draggable prop', () => {
        const wrapper = shallow(<DataTableRow draggable />)

        expect(wrapper.find(TableRow).prop('draggable')).toBe(true)
        expect(wrapper.find(DragHandleCell)).toHaveLength(1)
    })
    it('accepts an expandable prop', () => {
        const wrapper = shallow(
            <DataTableRow
                expandable
                expandableContent="test"
                onExpandToggle={() => {}}
            />
        )

        expect(wrapper.find(ExpandHandleCell)).toHaveLength(1)
    })
    it('accepts an expandableContent prop', () => {
        const expandableContent = <div>content</div>
        const wrapper = shallow(
            <DataTableRow
                expandableContent={expandableContent}
                expanded
                expandable
                onExpandToggle={() => {}}
            />
        )

        const additionalRowTag = wrapper
            .find(ExpandedRow)
            .dive()
            .find(TableRow)
            .dive()
            .find('tr')

        // render expandableContent in additional row
        expect(additionalRowTag).toHaveLength(1)

        // Hover styles
        additionalRowTag.simulate('mouseover')
        expect(
            wrapper
                .find(TableRow)
                .dive()
                .find('tr')
                .hasClass('isHoveringExpandedContent')
        ).toBe(true)

        additionalRowTag.simulate('mouseout')
        expect(
            wrapper
                .find(TableRow)
                .dive()
                .find('tr')
                .hasClass('isHoveringExpandedContent')
        ).toBe(false)
    })
    it('accepts an expanded prop', () => {
        const wrapperClosed = shallow(
            <DataTableRow
                expandable
                expandableContent="test"
                onExpandToggle={() => {}}
            />
        )
        const wrapperOpen = shallow(
            <DataTableRow
                expanded
                expandable
                expandableContent="test"
                onExpandToggle={() => {}}
            />
        )

        expect(wrapperClosed.find(ExpandedRow)).toHaveLength(0)
        expect(wrapperOpen.find(ExpandedRow)).toHaveLength(1)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<DataTableRow role={role} />)

        expect(wrapper.find(TableRow).prop('role')).toBe(role)
    })
    it('accepts a selected prop', () => {
        const wrapper = shallow(<DataTableRow selected />)

        expect(wrapper.find(TableRow).prop('selected')).toBe(true)
    })
    it('accepts an onExpandToggle prop', () => {
        const cb = jest.fn()
        const wrapper = shallow(
            <DataTableRow
                expandable
                expandableContent="test"
                onExpandToggle={cb}
            />
        )

        wrapper.find(ExpandHandleCell).dive().simulate('click')

        expect(cb).toHaveBeenCalledTimes(1)
        expect(cb).toHaveBeenCalledWith({ expanded: true })
    })
})
