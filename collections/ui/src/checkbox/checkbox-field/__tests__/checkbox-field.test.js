import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { CheckboxField } from '../checkbox-field.js'

describe('<CheckboxField />', () => {
    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(
            <CheckboxField
                label="Label"
                name="foo"
                value="bar"
                checked={false}
                onKeyDown={onKeyDown}
            />
        )

        fireEvent.keyDown(screen.getByRole('checkbox'), {
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
        })

        expect(onKeyDown).toHaveBeenCalledWith(
            { name: 'foo', value: 'bar', checked: true },
            expect.objectContaining({})
        )

        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })
})
