import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { OuTreeRetrySkeleton } from './ou-tree-retry-skeleton'

describe('OuTreeRetrySkeleton', () => {
    it('is a button named Retry that calls onRetry', async () => {
        const onRetry = jest.fn()
        render(<OuTreeRetrySkeleton onRetry={onRetry} dataTest="t-retry" />)
        const button = screen.getByRole('button', { name: 'Retry' })

        expect(button).toBe(screen.getByTestId('t-retry'))
        // The button is the tooltip's reference: no focusable wrapper.
        expect(button.parentElement).not.toHaveAttribute('tabindex')
        await userEvent.click(button)
        expect(onRetry).toHaveBeenCalledTimes(1)
    })
})
