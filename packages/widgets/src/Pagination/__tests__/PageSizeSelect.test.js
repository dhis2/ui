import { SingleSelect } from '@dhis2/ui-core'
import { shallow } from 'enzyme'
import React from 'react'
import * as mockPagers from '../__fixtures__'
import { PageSizeSelect } from '../PageSizeSelect'

describe('<PageSizeSelect />', () => {
    const mockOnSelect = jest.fn()
    const props = {
        dataTest: 'test',
        onChange: mockOnSelect,
        pageSizes: ['5', '10', '20', '30', '40', '50', '75', '100'],
        pageSizeSelectText: 'Page size',
        ...mockPagers.atTenthPage,
    }

    it('renders without errors', () => {
        shallow(<PageSizeSelect {...props} />)
    })

    it('calls the onSelect handler with the value of selected option', () => {
        const wrapper = shallow(<PageSizeSelect {...props} />)

        wrapper.find(SingleSelect).simulate('change', { selected: '10' })

        expect(mockOnSelect).toHaveBeenCalledTimes(1)
        expect(mockOnSelect).toHaveBeenCalledWith(10)
    })
})
