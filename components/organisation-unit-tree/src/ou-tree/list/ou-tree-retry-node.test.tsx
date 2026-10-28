import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { OuTreeRetryNode } from './ou-tree-retry-node'

describe('OuTreeRetryNode', () => {
    it('is a button named by its label slot that calls onRetry', async () => {
        const onRetry = jest.fn()
        render(
            <OuTreeRetryNode onRetry={onRetry} dataTest="t-retry">
                Rio de Janeiro
            </OuTreeRetryNode>
        )
        const button = screen.getByRole('button', { name: 'Rio de Janeiro' })

        expect(button).toBe(screen.getByTestId('t-retry'))
        // The button is the tooltip's reference: no focusable wrapper.
        expect(button.parentElement).not.toHaveAttribute('tabindex')
        await userEvent.click(button)
        expect(onRetry).toHaveBeenCalledTimes(1)
    })
})
