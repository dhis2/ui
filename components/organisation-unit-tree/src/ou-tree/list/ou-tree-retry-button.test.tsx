import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { OuTreeRetryButton } from './ou-tree-retry-button'

describe('OuTreeRetryButton', () => {
    it('is a button named Retry that calls onRetry', async () => {
        const onRetry = jest.fn()
        render(<OuTreeRetryButton onRetry={onRetry} dataTest="t-retry" />)
        const button = screen.getByRole('button', { name: 'Retry' })

        expect(button).toBe(screen.getByTestId('t-retry'))
        await userEvent.click(button)

        expect(onRetry).toHaveBeenCalledTimes(1)
    })
})
