import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeToggle } from './ou-tree-toggle'

describe('OuTreeToggle', () => {
    it('has the open class only when open', () => {
        const { rerender } = render(<OuTreeToggle open={false} dataTest="t" />)
        expect(screen.getByTestId('t')).not.toHaveClass('open')

        rerender(<OuTreeToggle open dataTest="t" />)
        expect(screen.getByTestId('t')).toHaveClass('open')
    })

    it('is empty space, hidden from assistive technology, for a leaf', () => {
        render(<OuTreeToggle leaf dataTest="t" />)
        const space = screen.getByTestId('t')

        expect(space).toHaveAttribute('aria-hidden', 'true')
        expect(space.querySelector('svg')).toBeNull()
    })
})
