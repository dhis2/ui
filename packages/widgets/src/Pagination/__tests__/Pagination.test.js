import { shallow } from 'enzyme'
import React from 'react'
import * as mockPagers from '../__fixtures__'
import { PageSelect } from '../PageSelect'
import { PageSizeSelect } from '../PageSizeSelect'
import { Pagination } from '../Pagination'

describe('<Pagination />', () => {
    const props = {
        ...mockPagers.atTenthPage,
        onPageChange: () => {},
        onPageSizeChange: () => {},
    }
    it('renders without errors', () => {
        shallow(<Pagination {...props} />)
    })

    it('renders a PageSelect and PageSizeSelect by default', () => {
        const wrapper = shallow(<Pagination {...props} />)

        expect(wrapper.find(PageSelect).length).toEqual(1)
        expect(wrapper.find(PageSizeSelect).length).toEqual(1)
    })
    it('renders without a PageSelect when hidePageSelect is true', () => {
        const wrapper = shallow(<Pagination {...props} hidePageSelect />)

        expect(wrapper.find(PageSelect).length).toEqual(0)
        expect(wrapper.find(PageSizeSelect).length).toEqual(1)
    })
    it('renders without a PageSizeSelect when hidePageSizeSelect is true', () => {
        const wrapper = shallow(<Pagination {...props} hidePageSizeSelect />)

        expect(wrapper.find(PageSelect).length).toEqual(1)
        expect(wrapper.find(PageSizeSelect).length).toEqual(0)
    })
    it('renders without PageSelect and PageSizeSelect when both are true', () => {
        const wrapper = shallow(
            <Pagination {...props} hidePageSelect hidePageSizeSelect />
        )

        expect(wrapper.find(PageSelect).length).toEqual(0)
        expect(wrapper.find(PageSizeSelect).length).toEqual(0)
    })
})
