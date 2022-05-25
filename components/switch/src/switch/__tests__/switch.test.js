import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { Switch } from '../switch.js'

describe('<Switch />', () => {
    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(
            <Switch
                name="foo"
                value="bar"
                checked={false}
                onKeyDown={onKeyDown}
            />
        )

        fireEvent.keyDown(
            screen.getByRole('switch'),
            { key: 'Enter', code: 'Enter', charCode: 13 }
        )

        expect(onKeyDown).toHaveBeenCalledWith(
            { name: 'foo', value: 'bar', checked: true },
            expect.objectContaining({})
        )

        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })
})
