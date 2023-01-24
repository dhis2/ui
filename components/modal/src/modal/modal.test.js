import { render, screen } from '@testing-library/react'
import React from 'react'
import { Modal } from './modal.js'

describe('Modal', () => {
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
