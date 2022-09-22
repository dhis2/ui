import { shallow } from 'enzyme'
import React from 'react'
import { PageControls } from '../page-controls.js'

describe('<PageControls />', () => {
    const mockOnClick = jest.fn()
    const props = {
        dataTest: 'test',
        onClick: mockOnClick,
        nextPageText: 'Next',
        previousPageText: 'Previous',
        page: 10,
    }

    beforeEach(() => {
        mockOnClick.mockClear()
    })

    it('renders without errors', () => {
        shallow(<PageControls {...props} />)
    })

    it('enables all buttons on by default', () => {
        const wrapper = shallow(<PageControls {...props} />)

        expect(
            wrapper.find('.button-previous').getElement().props.disabled
        ).toBeFalsy()

        expect(
            wrapper.find('.button-next').getElement().props.disabled
        ).toBeFalsy()
    })

    it('disables the previous page button when isPreviousDisabled is true', () => {
        const wrapper = shallow(
            <PageControls {...props} isPreviousDisabled={true} />
        )

        expect(
            wrapper.find('.button-previous').getElement().props.disabled
        ).toBe(true)

        expect(
            wrapper.find('.button-next').getElement().props.disabled
        ).toBeFalsy()
    })

    it('disables the next page button when isNextDisabled is true', () => {
        const wrapper = shallow(
            <PageControls {...props} isNextDisabled={true} />
        )

        expect(
            wrapper.find('.button-previous').getElement().props.disabled
        ).toBeFalsy()

        expect(wrapper.find('.button-next').getElement().props.disabled).toBe(
            true
        )
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
