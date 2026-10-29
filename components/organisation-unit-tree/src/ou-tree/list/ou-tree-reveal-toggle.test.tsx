import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { OuTreeRevealToggle } from './ou-tree-reveal-toggle'

describe('OuTreeRevealToggle', () => {
    it('is a hover-only button named for what a click does', async () => {
        const onToggle = jest.fn()
        const { rerender } = render(
            <OuTreeRevealToggle
                revealed={false}
                onToggle={onToggle}
                dataTest="t-reveal"
            />
        )
        const button = screen.getByRole('button', { name: 'Show all children' })

        expect(button).toBe(screen.getByTestId('t-reveal'))
        expect(button).toHaveAttribute('data-hover-only')
        expect(button.parentElement).not.toHaveAttribute('tabindex')
        await userEvent.click(button)
        expect(onToggle).toHaveBeenCalledTimes(1)

        rerender(
            <OuTreeRevealToggle revealed onToggle={onToggle} dataTest="t" />
        )
        expect(
            screen.getByRole('button', { name: 'Hide all children' })
        ).toBeInTheDocument()
    })
})
