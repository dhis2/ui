import { shallow } from 'enzyme'
import React from 'react'
import { PageSummary } from '../page-summary.js'
import { Pagination } from '../pagination.js'

describe('<PageSummary />', () => {
    const props = {
        dataTest: 'test',
        pageSummaryText: Pagination.defaultProps.pageSummaryText,
    }

    it('renders without errors', () => {
        shallow(
            <PageSummary
                {...props}
                firstItem={51}
                lastItem={100}
                page={2}
                pageCount={5}
                total={224}
            />
        )
    })

    it('renders the correct message when both total and lastItem are provided', () => {
        const wrapper = shallow(
            <PageSummary
                {...props}
                firstItem={51}
                lastItem={100}
                page={2}
                pageCount={5}
                total={224}
            />
        )
        const expectedString = 'Page 2 of 5, items 51-100 of 224'

        expect(wrapper.find('span').text()).toEqual(expectedString)
    })

    it('renders the correct message when only lastItem is provided', () => {
        const wrapper = shallow(
            <PageSummary
                {...props}
                firstItem={51}
                lastItem={100}
                page={2}
                pageCount={5}
            />
        )
        const expectedString = 'Page 2, items 51-100'

        expect(wrapper.find('span').text()).toEqual(expectedString)
    })

    it('renders the correct message when total is missing and lastItem is not a number', () => {
        const wrapper = shallow(
            <PageSummary
                {...props}
                firstItem={51}
                lastItem={NaN}
                page={2}
                pageCount={5}
            />
        )
        const expectedString = 'Page 2'

        expect(wrapper.find('span').text()).toEqual(expectedString)
    })
})
