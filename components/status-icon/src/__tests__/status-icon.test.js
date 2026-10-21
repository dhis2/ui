import { render, screen } from '@testing-library/react'
import React from 'react'
import { StatusIcon } from '../status-icon.js'

describe('<StatusIcon>', () => {
    it('is hidden from assistive technology by default', () => {
        const { container } = render(<StatusIcon error />)

        expect(container.firstChild).toHaveAttribute('aria-hidden', 'true')
        expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('is exposed as an image when an aria-label is provided', () => {
        render(<StatusIcon error aria-label="Error" />)

        expect(screen.getByRole('img', { name: 'Error' })).toBeInTheDocument()
    })

    it('hides the loader from assistive technology unless an aria-label is provided', () => {
        const { rerender } = render(<StatusIcon loading />)

        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()

        rerender(<StatusIcon loading aria-label="Loading" />)

        expect(
            screen.getByRole('progressbar', { name: 'Loading' })
        ).toBeInTheDocument()
    })
})
