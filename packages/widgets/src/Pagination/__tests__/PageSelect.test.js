import React from 'react'
import { shallow } from 'enzyme'
import { SingleSelect } from '@dhis2/ui-core'

import { PageSelect, createAvailablePages } from '../PageSelect'
import * as mockPagers from '../__fixtures__'

describe('<PageSelect />', () => {
    const mockOnSelect = jest.fn()
    const props = {
        dataTest: 'test',
        onChange: mockOnSelect,
        pageSelectText: 'Page',
        ...mockPagers.atTenthPage,
    }

    beforeEach(() => {
        mockOnSelect.mockClear()
    })

    it('renders without errors', () => {
        shallow(<PageSelect {...props} />)
    })

    it('calls the onSelect handler with the value of selected option', () => {
        const wrapper = shallow(<PageSelect {...props} />)

        wrapper.find(SingleSelect).simulate('change', { selected: '10' })

        expect(mockOnSelect).toHaveBeenCalledTimes(1)
        expect(mockOnSelect).toHaveBeenCalledWith(10)
    })

    describe('createAvailablePages helper', () => {
        it('produces an array of strings starting with "1" and ending with the "lenght"', () => {
            const expected = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

            expect(createAvailablePages(10)).toEqual(expected)
        })
    })
})
