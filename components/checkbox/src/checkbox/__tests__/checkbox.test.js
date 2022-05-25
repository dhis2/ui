import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { Checkbox } from '../checkbox.js'

describe('<Checkbox />', () => {
    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(
            <Checkbox
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
