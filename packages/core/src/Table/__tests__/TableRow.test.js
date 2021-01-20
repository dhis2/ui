import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableRow } from '../TableRow.js'
import { DragHandleCell } from '../TableRow/DragHandleCell.js'
import { ExpandedRowContent } from '../TableRow/ExpandedRowContent.js'

describe('<TableRow>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<TableRow>{children}</TableRow>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a ref', () => {
        const ref = React.createRef()
        const wrapper = mount(
            <table>
                <thead>
                    <TableRow ref={ref} />
                </thead>
            </table>
        )

        expect(wrapper.find('tr').getDOMNode()).toBe(ref.current)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<TableRow className={className} />)

        expect(wrapper.find('tr').hasClass(className)).toBe(true)
    })
    it('accepts a draggable prop', () => {
        const wrapper = shallow(<TableRow draggable />)

        expect(wrapper.find('tr').hasClass('draggable')).toBe(true)
        expect(wrapper.find(DragHandleCell)).toHaveLength(1)
    })
    it('accepts an expandableContent prop', () => {
        const expandableContent = <div>content</div>
        const wrapper = shallow(
            <TableRow expandableContent={expandableContent} />
        )
        const getAdditionalRowTag = () =>
            wrapper.find(ExpandedRowContent).dive().find('tr')

        // render expandableContent in additional row
        expect(wrapper.find(ExpandedRowContent)).toHaveLength(1)
        expect(getAdditionalRowTag()).toHaveLength(1)

        // Hover styles
        getAdditionalRowTag().simulate('mouseover')
        expect(
            getAdditionalRowTag().hasClass('isHoveringExpandedContent')
        ).toBe(true)

        getAdditionalRowTag().simulate('mouseout')
        expect(
            getAdditionalRowTag().hasClass('isHoveringExpandedContent')
        ).toBe(false)
    })
    it('accepts a role prop', () => {
        const role = 'test'
        const wrapper = shallow(<TableRow role={role} />)

        expect(wrapper.find('tr').prop('role')).toBe(role)
    })
    it('accepts a selected prop', () => {
        const wrapper = shallow(<TableRow selected />)

        expect(wrapper.find('tr').hasClass('selected')).toBe(true)
    })
})
