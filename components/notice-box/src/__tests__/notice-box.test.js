import { render, screen } from '@testing-library/react'
import React from 'react'
import { NoticeBox } from '../notice-box.js'

describe('<NoticeBox>', () => {
    describe('roles', () => {
        it('uses role="note" by default (info variant)', () => {
            render(<NoticeBox>Info message</NoticeBox>)

            expect(screen.getByRole('note')).toBeInTheDocument()
        })

        it('uses role="status" for the warning variant', () => {
            render(<NoticeBox warning>Warning message</NoticeBox>)

            expect(screen.getByRole('status')).toBeInTheDocument()
        })

        it('uses role="status" for the valid variant', () => {
            render(<NoticeBox valid>Valid message</NoticeBox>)

            expect(screen.getByRole('status')).toBeInTheDocument()
        })

        it('uses role="alert" for the error variant', () => {
            render(<NoticeBox error>Error message</NoticeBox>)

            expect(screen.getByRole('alert')).toBeInTheDocument()
        })
    })

    describe('aria-label', () => {
        it('applies the provided aria-label', () => {
            render(<NoticeBox aria-label="Custom label">Message</NoticeBox>)

            expect(
                screen.getByRole('note', { name: 'Custom label' })
            ).toBeInTheDocument()
        })
    })
})
