import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { OuTreeErrorIcon } from './ou-tree-error-icon'

describe('OuTreeErrorIcon', () => {
    it('is hidden from assistive technology and clickable only with onClick', async () => {
        const onClick = jest.fn()
        const { rerender } = render(<OuTreeErrorIcon dataTest="t-error" />)
        const icon = screen.getByTestId('t-error')
        expect(icon).toHaveAttribute('aria-hidden')
        expect(icon).not.toHaveClass('clickable')

        rerender(<OuTreeErrorIcon onClick={onClick} dataTest="t-error" />)
        expect(icon).toHaveClass('clickable')
        await userEvent.click(icon)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
