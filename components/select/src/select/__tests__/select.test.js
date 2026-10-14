import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { Select } from '../select.js'

describe('<Select />', () => {
    afterEach(() => {
        jest.useRealTimers()
    })

    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(
            <Select
                input={<input type="text" />}
                menu={<div />}
                selected=""
                onKeyDown={onKeyDown}
            />
        )

        fireEvent.keyDown(screen.getByRole('textbox'), {
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
        })

        expect(onKeyDown).toHaveBeenCalledWith(
            { selected: '' },
            expect.objectContaining({})
        )

        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })

    it('should not measure its input after unmounting during a resize', () => {
        jest.useFakeTimers()
        const { unmount } = render(
            <Select input={<input type="text" />} menu={<div />} selected="" />
        )

        fireEvent(window, new Event('resize'))
        unmount()

        expect(() => jest.runAllTimers()).not.toThrow()
    })
})
