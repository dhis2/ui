import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { OuTreeToggle } from './ou-tree-toggle'

describe('OuTreeToggle', () => {
    it('calls onToggle once per click', async () => {
        const onToggle = jest.fn()
        render(<OuTreeToggle open={false} onToggle={onToggle} dataTest="t" />)

        await userEvent.click(screen.getByTestId('t'))

        expect(onToggle).toHaveBeenCalledTimes(1)
    })

    it('has the open class only when open', () => {
        const { rerender } = render(
            <OuTreeToggle open={false} onToggle={jest.fn()} dataTest="t" />
        )
        expect(screen.getByTestId('t')).not.toHaveClass('open')

        rerender(<OuTreeToggle open onToggle={jest.fn()} dataTest="t" />)
        expect(screen.getByTestId('t')).toHaveClass('open')
    })

    it('is empty space, hidden from assistive technology, for a leaf', () => {
        render(<OuTreeToggle leaf dataTest="t" />)
        const space = screen.getByTestId('t')

        expect(space).toHaveAttribute('aria-hidden', 'true')
        expect(space.querySelector('svg')).toBeNull()
    })
})
