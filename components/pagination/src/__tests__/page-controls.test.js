import { shallow } from 'enzyme'
import React from 'react'
import * as mockPagers from '../__fixtures__/index.js'
import { PageControls } from '../page-controls.js'

describe('<PageControls />', () => {
    const mockOnClick = jest.fn()
    const props = {
        dataTest: 'test',
        onClick: mockOnClick,
        nextPageText: 'Next',
        previousPageText: 'Previous',
        ...mockPagers.atTenthPage,
    }

    beforeEach(() => {
        mockOnClick.mockClear()
    })

    it('renders without errors', () => {
        shallow(<PageControls {...props} />)
    })

    it('disables no buttons on a page between first and last', () => {
        const wrapper = shallow(<PageControls {...props} />)

        expect(
            wrapper.find('.button-previous').getElement().props.disabled
        ).toEqual(false)

        expect(
            wrapper.find('.button-next').getElement().props.disabled
        ).toEqual(false)
    })

    it('disables the previous page button on the first page', () => {
        const wrapper = shallow(
            <PageControls {...props} {...mockPagers.atFirstPage} />
        )

        expect(
            wrapper.find('.button-previous').getElement().props.disabled
        ).toEqual(true)

        expect(
            wrapper.find('.button-next').getElement().props.disabled
        ).toEqual(false)
    })

    it('disables the next page button on the last page for pagers with total', () => {
        const wrapper = shallow(
            <PageControls {...props} {...mockPagers.atLastPage} />
        )

        expect(
            wrapper.find('.button-previous').getElement().props.disabled
        ).toEqual(false)

        expect(
            wrapper.find('.button-next').getElement().props.disabled
        ).toEqual(true)
    })

    it('disables the next page button on the last page for pagers without total', () => {
        const wrapper = shallow(
            <PageControls {...props} {...mockPagers.noTotalAtLastPage} />
        )

        expect(
            wrapper.find('.button-previous').getElement().props.disabled
        ).toEqual(false)

        expect(
            wrapper.find('.button-next').getElement().props.disabled
        ).toEqual(true)
    })

    it('calls the onClick handler with the value for the next page when next is clicked', () => {
        const wrapper = shallow(<PageControls {...props} />)

        wrapper.find('.button-next').simulate('click')

        expect(mockOnClick).toHaveBeenCalledTimes(1)
        expect(mockOnClick).toHaveBeenCalledWith(11)
    })

    it('calls the onClick handler with the value for the previous page when previous is clicked', () => {
        const wrapper = shallow(<PageControls {...props} />)

        wrapper.find('.button-previous').simulate('click')

        expect(mockOnClick).toHaveBeenCalledTimes(1)
        expect(mockOnClick).toHaveBeenCalledWith(9)
    })
})
