import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { FileInputField } from '../file-input-field.js'

describe('<FileInputField />', () => {
    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(
            <FileInputField
                label="Label"
                name="foo"
                value="bar"
                checked={false}
                onKeyDown={onKeyDown}
            />
        )

        fireEvent.keyDown(screen.getByRole('button'), {})

        expect(onKeyDown).toHaveBeenCalledTimes(1)

        const input = screen.getByTestId('dhis2-uicore-fileinput-input')
        expect(onKeyDown).toHaveBeenCalledWith(
            { name: 'foo', files: input.files },
            expect.objectContaining({})
        )
    })
})
