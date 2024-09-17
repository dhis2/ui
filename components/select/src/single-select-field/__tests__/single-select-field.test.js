import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { SingleSelectField } from '../single-select-field.js'

describe('<SingleSelect />', () => {
    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(
            <SingleSelectField
                label="label"
                placeholder="placeholder"
                onKeyDown={onKeyDown}
            />
        )

        fireEvent.keyDown(
            screen.getByTestId('dhis2-uicore-singleselect-placeholder'),
            { key: 'Enter', code: 'Enter', charCode: 13 }
        )

        expect(onKeyDown).toHaveBeenCalledWith(
            { selected: '' },
            expect.objectContaining({})
        )

        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })
})
