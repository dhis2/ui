import { render, screen } from '@testing-library/react'
import React from 'react'
import { Modal } from './modal.js'

describe('Modal', () => {
    describe('Regular dimensions', () => {
        it('has the correct dimensions in its default state', () => {
            render(<Modal />)
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('auto')
            expect(style.maxHeight).toBe('calc(100vh - 128px)')
            expect(style.maxWidth).toBe('calc(100vw - 128px)')
            expect(style.width).toBe('600px')
        })
        it('has the correct dimensions when the "small" prop is provided', () => {
            render(<Modal small />)
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('auto')
            expect(style.maxHeight).toBe('calc(100vh - 128px)')
            expect(style.maxWidth).toBe('calc(100vw - 128px)')
            expect(style.width).toBe('400px')
        })
        it('has the correct dimensions when the "large" prop is provided', () => {
            render(<Modal large />)
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('auto')
            expect(style.maxHeight).toBe('calc(100vh - 128px)')
            expect(style.maxWidth).toBe('calc(100vw - 128px)')
            expect(style.width).toBe('800px')
        })
    })
    describe('Custom dimensions', () => {
        it('accepts custom dimensions', () => {
            render(
                <Modal
                    height="400px"
                    maxHeight="800px"
                    maxWidth="90vw"
                    width="auto"
                />
            )
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('400px')
            expect(style.maxHeight).toBe('800px')
            expect(style.maxWidth).toBe('90vw')
            expect(style.width).toBe('auto')
        })
        it('when custom height and width are provided max-height and max-width are set to "none"', () => {
            render(<Modal height="400px" width="auto" />)

            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('400px')
            expect(style.maxHeight).toBe('none')
            expect(style.maxWidth).toBe('none')
            expect(style.width).toBe('auto')
        })
        it('custom dimensions take precedence over "small" prop', () => {
            render(
                <Modal
                    small
                    height="400px"
                    maxHeight="800px"
                    maxWidth="90vw"
                    width="auto"
                />
            )
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('400px')
            expect(style.maxHeight).toBe('800px')
            expect(style.maxWidth).toBe('90vw')
            expect(style.width).toBe('auto')
        })
        it('custom dimensions take precedence over "large" prop', () => {
            render(
                <Modal
                    small
                    height="400px"
                    maxHeight="800px"
                    maxWidth="90vw"
                    width="auto"
                />
            )
            const modalEl = screen.getByRole('dialog')
            const style = window.getComputedStyle(modalEl)

            expect(style.height).toBe('400px')
            expect(style.maxHeight).toBe('800px')
            expect(style.maxWidth).toBe('90vw')
            expect(style.width).toBe('auto')
        })
    })
})
