import { shallow } from 'enzyme'
import React from 'react'
import * as mockPagers from '../__fixtures__'
import { PageSummary, getItemRange } from '../PageSummary'
import { Pagination } from '../Pagination'

describe('<PageSummary />', () => {
    const props = {
        dataTest: 'test',
        pageSummaryText: Pagination.defaultProps.pageSummaryText,
    }
    it('renders without errors', () => {
        shallow(<PageSummary {...props} {...mockPagers.atTenthPage} />)
    })

    it('displays the correct information for a first page', () => {
        const wrapper = shallow(
            <PageSummary {...props} {...mockPagers.atFirstPage} />
        )
        const expectedString = 'Page 1 of 21, items 1-50 of 1035'

        expect(wrapper.find('span').text()).toEqual(expectedString)
    })

    it('displays the correct information for a last page', () => {
        const wrapper = shallow(
            <PageSummary {...props} {...mockPagers.atLastPage} />
        )
        const expectedString = 'Page 21 of 21, items 1001-1035 of 1035'

        expect(wrapper.find('span').text()).toEqual(expectedString)
    })

    it('displays the correct information for a page between first and last', () => {
        const wrapper = shallow(
            <PageSummary {...props} {...mockPagers.atTenthPage} />
        )
        const expectedString = 'Page 10 of 21, items 451-500 of 1035'

        expect(wrapper.find('span').text()).toEqual(expectedString)
    })

    describe('getItemRange', () => {
        it('calculates the firstItem and lastItem correctly', () => {
            const { page, pageSize, total } = mockPagers.atTenthPage
            const { firstItem, lastItem } = getItemRange(page, pageSize, total)

            expect(firstItem).toEqual(451)
            expect(lastItem).toEqual(500)
        })

        it('returns 0 for firstItem and lastItem if the total is 0', () => {
            const { firstItem, lastItem } = getItemRange(1, 50, 0)

            expect(firstItem).toEqual(0)
            expect(lastItem).toEqual(0)
        })

        it('uses the total count as lastItem when the last page is reached', () => {
            const { page, pageSize, total } = mockPagers.atLastPage
            const { lastItem } = getItemRange(page, pageSize, total)

            expect(lastItem).toEqual(total)
        })
    })
})
