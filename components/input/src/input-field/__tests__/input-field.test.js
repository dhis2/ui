import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { InputField } from '../input-field.js'

describe('<Input>', () => {
    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(
            <InputField
                label="label"
                name="foo"
                value="bar"
                onKeyDown={onKeyDown}
            />
        )

        fireEvent.keyDown(screen.getByRole('textbox'), {})

        expect(onKeyDown).toHaveBeenCalledWith(
            { name: 'foo', value: 'bar' },
            expect.objectContaining({})
        )

        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })
})
