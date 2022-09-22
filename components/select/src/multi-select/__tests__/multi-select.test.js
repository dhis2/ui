import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { MultiSelect } from '../multi-select.js'

describe('<MultiSelect />', () => {
    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(<MultiSelect placeholder="placeholder" onKeyDown={onKeyDown} />)

        fireEvent.keyDown(
            screen.getByTestId('dhis2-uicore-multiselect-placeholder'),
            { key: 'Enter', code: 'Enter', charCode: 13 }
        )

        expect(onKeyDown).toHaveBeenCalledWith(
            { selected: [] },
            expect.objectContaining({})
        )

        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })
})
