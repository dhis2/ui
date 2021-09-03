import { shallow } from 'enzyme'
import React from 'react'
import { ExpandedRow } from '../../data-table-row/expanded-row.js'
import { TableRow, TableDataCell } from '../../table-elements/index.js'

describe('<ExpandedRow>', () => {
    it('renders children', () => {
        const children = 'children'
        const wrapper = shallow(<ExpandedRow>{children}</ExpandedRow>)

        expect(wrapper.containsMatchingElement(children)).toBe(true)
    })
    it('accepts a colSpan prop', () => {
        const colSpan = '4'
        const wrapper = shallow(<ExpandedRow colSpan={colSpan} />)

        expect(wrapper.find(TableDataCell).prop('colSpan')).toBe(colSpan)
    })
    it('accepts a className prop', () => {
        const className = 'test'
        const wrapper = shallow(<ExpandedRow className={className} />)

        expect(wrapper.find(TableRow).prop('className')).toBe(
            `${className}-expandedrow`
        )
    })
    it('accepts a dataTest prop', () => {
        const dataTest = 'test'
        const wrapper = shallow(<ExpandedRow dataTest={dataTest} />)

        expect(wrapper.find(TableRow).prop('dataTest')).toBe(
            `${dataTest}-expandedrow`
        )
    })
    it('accepts a selected prop', () => {
        const wrapper = shallow(<ExpandedRow selected />)

        expect(wrapper.find(TableRow).prop('selected')).toBe(true)
    })
    it('accepts a setIsHoveringExpandedContent prop', () => {
        const cb = jest.fn()
        const wrapper = shallow(
            <ExpandedRow setIsHoveringExpandedContent={cb} />
        )
        const tr = wrapper.find(TableRow).dive().find('tr')

        tr.simulate('mouseover')

        expect(cb).toHaveBeenCalledTimes(1)
        expect(cb).toHaveBeenLastCalledWith(true)

        tr.simulate('mouseout')

        expect(cb).toHaveBeenCalledTimes(2)
        expect(cb).toHaveBeenLastCalledWith(false)
    })
})
