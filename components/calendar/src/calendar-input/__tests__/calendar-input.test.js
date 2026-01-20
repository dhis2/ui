import { Button } from '@dhis2-ui/button'
import { fireEvent, render, waitFor, within } from '@testing-library/react'
import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'
import { CalendarInput } from '../calendar-input.js'

describe('Calendar Input', () => {
    it('allow selection of a date through the calendar widget', async () => {
        jest.useFakeTimers()
        jest.setSystemTime(new Date('2024-10-22T09:05:00.000Z'))

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

        const todayString = '2024-10-22'
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

        jest.useRealTimers()
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

    describe('validation', () => {
        it('should validate minimum date', () => {
            const onDateSelectMock = jest.fn()
            const screen = render(
                <CalendarWithValidation
                    calendar="gregory"
                    minDate="2024-01-01"
                    onDateSelect={onDateSelectMock}
                />
            )

            const dateInputString = '2023-10-12'
            const dateInput = within(
                screen.getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')

            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                screen.getByText(
                    'Date 2023-10-12 is less than the minimum allowed date 2024-01-01.'
                )
            ).toBeInTheDocument()
            expect(onDateSelectMock).toHaveBeenCalledTimes(1)
        })
        it('should validate maximum date', () => {
            const { getByTestId, getByText } = render(
                <CalendarWithValidation
                    calendar="gregory"
                    maxDate="2024-01-01"
                />
            )

            const dateInputString = '2024-10-12'
            const dateInput = within(
                getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')

            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                getByText(
                    'Date 2024-10-12 is greater than the maximum allowed date 2024-01-01.'
                )
            ).toBeInTheDocument()
        })
        it('should validate date in ethiopic calendar', () => {
            const onDateSelectMock = jest.fn()
            const { getByTestId, getByText, queryByText } = render(
                <CalendarWithValidation
                    calendar="ethiopian"
                    minDate="2018-13-04"
                    onDateSelect={onDateSelectMock}
                />
            )

            let dateInputString = '2018-13-02'
            const dateInput = within(
                getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')

            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                getByTestId('dhis2-uiwidgets-calendar-inputfield-validation')
            ).toBeInTheDocument()
            expect(
                getByText(
                    'Date 2018-13-02 is less than the minimum allowed date 2018-13-04.'
                )
            ).toBeInTheDocument()

            dateInputString = '2018-13-05'
            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                queryByText(
                    'Date 2018-13-04 is less than the minimum allowed date 2018-13-05.'
                )
            ).not.toBeInTheDocument()

            dateInputString = '2018-13-07'
            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                getByText('Invalid date in specified calendar')
            ).toBeInTheDocument()
        })
        // ToDo: these scenarios seem to work but they timeout on CI sporadically - ticket: https://dhis2.atlassian.net/browse/LIBS-763
        it('should validate date in nepali calendar', () => {
            const onDateSelectMock = jest.fn()
            const { getByTestId, getByText, queryByText } = render(
                <CalendarWithValidation
                    calendar="nepali"
                    maxDate="2080-05-30"
                    onDateSelect={onDateSelectMock}
                />
            )

            let dateInputString = '2080-06-01'
            const dateInput = within(
                getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')

            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                getByText(
                    'Date 2080-06-01 is greater than the maximum allowed date 2080-05-30.'
                )
            ).toBeInTheDocument()

            dateInputString = '2080-04-32'
            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                queryByText(/greater than the maximum allowed date/)
            ).not.toBeInTheDocument()

            dateInputString = '2080-01-32'
            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                getByText('Invalid date in specified calendar')
            ).toBeInTheDocument()
        })
        it('should validate from date picker', () => {
            jest.useFakeTimers()
            jest.setSystemTime(new Date('2024-10-22T09:05:00.000Z'))

            const onDateSelectMock = jest.fn()
            const { queryByText, getByText, getByTestId } = render(
                <CalendarWithValidation
                    calendar="gregory"
                    minDate="2024-02-16"
                    onDateSelect={onDateSelectMock}
                />
            )

            const dateInput = within(
                getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')

            fireEvent.focusIn(dateInput)
            fireEvent.click(getByText('17'))

            expect(queryByText('17')).not.toBeInTheDocument()

            // Checking fix for Bug where callback used to be called twice - first with undefined
            expect(onDateSelectMock).toHaveBeenCalledTimes(1)
            expect(onDateSelectMock).toHaveBeenCalledWith({
                calendarDateString: '2024-10-17',
                validation: { error: false, valid: true, warning: false },
            })

            jest.useRealTimers()
        })

        it('should validate with Clear', () => {
            const onDateSelectMock = jest.fn()
            const { queryByText, getByText, getByTestId } = render(
                <CalendarWithValidation
                    calendar="gregory"
                    minDate="2024-02-16"
                    onDateSelect={onDateSelectMock}
                    clearable
                />
            )

            const dateInputString = '2023-10-12'
            const dateInput = within(
                getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')

            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                getByTestId('dhis2-uiwidgets-calendar-inputfield-validation')
            ).toBeInTheDocument()

            fireEvent.click(getByText('Clear'))
            expect(queryByText('17')).not.toBeInTheDocument()

            expect(onDateSelectMock).toHaveBeenLastCalledWith({
                calendarDateString: null,
                validation: { valid: true },
            })
        })

        it('should validate when Clearing manually (i.e. deleting text not using clear button)', () => {
            const onDateSelectMock = jest.fn()
            const { getByTestId } = render(
                <CalendarWithValidation
                    calendar="gregory"
                    minDate="2024-02-16"
                    onDateSelect={onDateSelectMock}
                    clearable
                />
            )

            const dateInputString = '2023-10-12'
            const dateInput = within(
                getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')

            fireEvent.change(dateInput, { target: { value: dateInputString } })
            fireEvent.blur(dateInput)

            expect(
                getByTestId('dhis2-uiwidgets-calendar-inputfield-validation')
            ).toBeInTheDocument()

            fireEvent.change(dateInput, { target: { value: '' } })
            fireEvent.blur(dateInput)

            expect(onDateSelectMock).toHaveBeenCalledWith({
                calendarDateString: null,
                validation: { valid: true },
            })
        })
    })
})

const CalendarWithValidation = (propsFromParent) => {
    const [date, setDate] = useState()

    const [validation, setValidation] = useState({})

    const errored = () => {
        if (validation?.error) {
            return { calendar: validation.validationText }
        }
    }

    return (
        <Form onSubmit={() => {}} validate={errored}>
            {({ handleSubmit, invalid }) => {
                return (
                    <form>
                        <Field name="calendar">
                            {(props) => (
                                <CalendarInput
                                    {...props}
                                    date={date}
                                    label="Enter a date"
                                    editable
                                    calendar="gregory"
                                    {...validation}
                                    {...propsFromParent}
                                    onDateSelect={(date) => {
                                        setDate(date?.calendarDateString)
                                        setValidation(date?.validation)
                                        propsFromParent.onDateSelect?.(date)
                                    }}
                                />
                            )}
                        </Field>

                        <Button
                            type="submit"
                            disabled={invalid}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </form>
                )
            }}
        </Form>
    )
}
