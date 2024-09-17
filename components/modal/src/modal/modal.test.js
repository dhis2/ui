import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { CloseButton } from './close-button.js'
import { Modal } from './modal.js'

describe('Modal', () => {
    describe('Modal Accessibility', () => {
        it('closes when ESC key is pressed', () => {
            const onCloseMock = jest.fn()
            render(<Modal onClose={onCloseMock} />)

            const modalElement = screen.getByRole('dialog')
            fireEvent.keyDown(modalElement, { key: 'Escape', code: 'Escape' })
            expect(onCloseMock).toHaveBeenCalled()
        })

        it('does not close when "Enter" is pressed', () => {
            const onCloseMock = jest.fn()
            render(<Modal onClose={onCloseMock} />)

            const modalElement = screen.getByRole('dialog')
            fireEvent.keyDown(modalElement, { key: 'Enter', code: 'Enter' })
            expect(onCloseMock).not.toHaveBeenCalled()
        })

        it('does not close when "SpaceBar" is pressed', () => {
            const onCloseMock = jest.fn()
            render(<Modal onClose={onCloseMock} />)

            const modalElement = screen.getByRole('dialog')
            fireEvent.keyDown(modalElement, { key: ' ', code: ' ' })
            expect(onCloseMock).not.toHaveBeenCalled()
        })

        it('has a close button with proper accessibility attributes', async () => {
            render(<CloseButton />)
            const closeButton = await screen.findByLabelText(
                /Close modal dialog/
            )

            expect(closeButton).toBeInTheDocument()
            expect(closeButton.tagName).toBe('BUTTON')
        })
    })

    describe('Regular dimensions', () => {
        it('has the correct dimension styles in its default state', () => {
            render(<Modal />)
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('auto')
            expect(style.maxHeight).toBe('calc(100vh - 128px)')
            expect(style.maxWidth).toBe('calc(100vw - 128px)')
            expect(style.width).toBe('600px')
        })
        it('has the correct dimension styles when the "small" prop is provided', () => {
            render(<Modal small />)
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('auto')
            expect(style.maxHeight).toBe('calc(100vh - 128px)')
            expect(style.maxWidth).toBe('calc(100vw - 128px)')
            expect(style.width).toBe('400px')
        })
        it('has the correct dimension styles when the "large" prop is provided', () => {
            render(<Modal large />)
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('auto')
            expect(style.maxHeight).toBe('calc(100vh - 128px)')
            expect(style.maxWidth).toBe('calc(100vw - 128px)')
            expect(style.width).toBe('800px')
        })

        it('has the correct dimension styles when the "fluid" prop is provided', () => {
            render(<Modal fluid />)
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('auto')
            expect(style.maxHeight).toBe('calc(100vh - 128px)')
            expect(style.maxWidth).toBe('calc(100vw - 128px)')
            expect(style.width).toBe('auto')
        })
    })
})
