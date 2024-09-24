import { fireEvent, render, waitFor, within } from '@testing-library/react'
import React from 'react'
import { CalendarInput } from '../calendar-input.js'

describe('Calendar Input', () => {
    it('allow selection of a date through the calendar widget', async () => {
        const onDateSelectMock = jest.fn()
        const screen = render(
            <CalendarInput calendar="gregory" onDateSelect={onDateSelectMock} />
        )

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')
        fireEvent.focus(dateInput)
        const calendar = await screen.findByTestId('calendar')
        expect(calendar).toBeInTheDocument()

        const todayString = new Date().toISOString().slice(0, -14)
        const today = within(calendar).getByTestId(todayString)

        fireEvent.click(today)

        await waitFor(() => {
            expect(calendar).not.toBeInTheDocument()
        })
        expect(onDateSelectMock).toHaveBeenCalledWith(
            expect.objectContaining({
                calendarDateString: todayString,
            })
        )
    })

    it('allow selection of a date through the input', async () => {
        const onDateSelectMock = jest.fn()
        const screen = render(
            <CalendarInput calendar="gregory" onDateSelect={onDateSelectMock} />
        )

        const dateInputString = '2024/10/12'
        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')

        fireEvent.change(dateInput, { target: { value: dateInputString } })
        fireEvent.blur(dateInput)

        expect(onDateSelectMock).toHaveBeenCalledWith(
            expect.objectContaining({
                calendarDateString: dateInputString,
            })
        )
    })
})
