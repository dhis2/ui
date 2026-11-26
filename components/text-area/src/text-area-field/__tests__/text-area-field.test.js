import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { TextAreaField } from '../text-area-field.js'

describe('<TextArea>', () => {
    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(<TextAreaField name="foo" value="bar" onKeyDown={onKeyDown} />)

        fireEvent.keyDown(screen.getByRole('textbox'), {})

        expect(onKeyDown).toHaveBeenCalledWith(
            { name: 'foo', value: 'bar' },
            expect.objectContaining({})
        )

        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })

    it('should set aria-label on the textarea from the ariaLabel prop', () => {
        render(<TextAreaField name="comment" ariaLabel="Comment" />)

        expect(
            screen.getByRole('textbox', { name: 'Comment' })
        ).toHaveAttribute('aria-label', 'Comment')
    })

    it('should not set aria-label when ariaLabel is not provided', () => {
        render(<TextAreaField name="comment" />)

        expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-label')
    })
})
