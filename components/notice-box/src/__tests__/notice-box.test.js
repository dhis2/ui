import { render, screen } from '@testing-library/react'
import React from 'react'
import { NoticeBox } from '../notice-box.js'

describe('<NoticeBox>', () => {
    describe('role', () => {
        it('is "note" by default', () => {
            render(<NoticeBox>Info message</NoticeBox>)

            expect(screen.getByRole('note')).toBeInTheDocument()
        })

        it.each(['status', 'alert'])('can be set to "%s"', (role) => {
            render(
                <NoticeBox error role={role}>
                    Error message
                </NoticeBox>
            )

            expect(screen.getByRole(role)).toBeInTheDocument()
        })
    })
})
