import { shallow } from 'enzyme'
import React from 'react'
import * as mockPagers from '../__fixtures__/index.js'
import { PageSelect } from '../page-select.js'
import { PageSizeSelect } from '../page-size-select.js'
import { Pagination } from '../pagination.js'

describe('<Pagination />', () => {
    describe('Pagination with total and totalPages', () => {
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
        it('renders without a PageSelect when pageCount is not provided', () => {
            const wrapper = shallow(
                <Pagination {...props} pageCount={undefined} />
            )

            expect(wrapper.find(PageSelect).length).toEqual(0)
            expect(wrapper.find(PageSizeSelect).length).toEqual(1)
        })
        it('renders without a PageSelect when pageCount is 1', () => {
            const wrapper = shallow(<Pagination {...props} pageCount={1} />)

            expect(wrapper.find(PageSelect).length).toEqual(0)
            expect(wrapper.find(PageSizeSelect).length).toEqual(1)
        })
        it('renders without a PageSelect when pageCount is over 2000', () => {
            const wrapper = shallow(<Pagination {...props} pageCount={2001} />)

            expect(wrapper.find(PageSelect).length).toEqual(0)
            expect(wrapper.find(PageSizeSelect).length).toEqual(1)
        })
        it('renders without a PageSizeSelect when hidePageSizeSelect is true', () => {
            const wrapper = shallow(
                <Pagination {...props} hidePageSizeSelect />
            )

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
    describe('Pagination without total and totalPages', () => {
        const props = {
            ...mockPagers.noTotal,
            onPageChange: () => {},
            onPageSizeChange: () => {},
        }
        it('renders without errors', () => {
            shallow(<Pagination {...props} />)
        })

        it('renders with a PageSizeSelect but without a PageSelect', () => {
            const wrapper = shallow(<Pagination {...props} />)

            expect(wrapper.find(PageSizeSelect).length).toEqual(1)
            expect(wrapper.find(PageSelect).length).toEqual(0)
        })
    })
})
