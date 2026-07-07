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

    it('allow selection of a date through the calendar widget (ethiopic)', async () => {
        jest.useFakeTimers()
        jest.setSystemTime(new Date('2024-10-22T09:05:00.000Z'))

        const onDateSelectMock = jest.fn()
        const screen = render(
            <CalendarInput calendar="ethiopian" onDateSelect={onDateSelectMock} />
        )

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')

        fireEvent.focus(dateInput)

        const calendar = await screen.findByTestId('calendar')
        expect(calendar).toBeInTheDocument()

        const todayString = '2017-02-12'
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

    it('allow selection of a date through the calendar widget (nepali)', async () => {
        jest.useFakeTimers()
        jest.setSystemTime(new Date('2024-10-22T09:05:00.000Z'))

        const onDateSelectMock = jest.fn()
        const screen = render(
            <CalendarInput calendar="nepali" onDateSelect={onDateSelectMock} />
        )

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')

        fireEvent.focus(dateInput)

        const calendar = await screen.findByTestId('calendar')
        expect(calendar).toBeInTheDocument()

        const todayString = '2081-07-06'
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

    it('rejects input whose detected shape does not match the format prop', () => {
        // "2024-12-25" is unambiguously YYYY-MM-DD shaped (4-digit group
        // first). With format="DD-MM-YYYY" that mismatch is rejected
        // rather than reinterpreted.
        const screen = render(
            <CalendarWithValidation calendar="gregory" format="DD-MM-YYYY" />
        )

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')

        fireEvent.change(dateInput, { target: { value: '2024-12-25' } })
        fireEvent.blur(dateInput)

        expect(
            screen.getByText(
                'Date string format does not match the specified format. Expected DD-MM-YYYY but got YYYY-MM-DD.'
            )
        ).toBeInTheDocument()
    })

    it('accepts the same typed input without the format prop', () => {
        const screen = render(<CalendarWithValidation calendar="gregory" />)

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')

        fireEvent.change(dateInput, { target: { value: '2024-12-25' } })
        fireEvent.blur(dateInput)

        expect(
            screen.queryByText(/does not match the specified format/)
        ).not.toBeInTheDocument()
    })

    it('limits the year selector to the current year when pastOnly is set', async () => {
        jest.useFakeTimers()
        jest.setSystemTime(new Date('2024-10-22T09:05:00.000Z'))

        const screen = render(
            <CalendarInput
                calendar="gregory"
                pastOnly
                onDateSelect={jest.fn()}
            />
        )

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')
        fireEvent.focus(dateInput)

        const yearSelect = await screen.findByTestId('calendar-year-select')
        const years = within(yearSelect)
            .getAllByRole('option')
            .map((option) => Number(option.value))

        expect(Math.max(...years)).toBe(2024)

        jest.useRealTimers()
    })

    it('includes future years in the year selector without pastOnly', async () => {
        jest.useFakeTimers()
        jest.setSystemTime(new Date('2024-10-22T09:05:00.000Z'))

        const screen = render(
            <CalendarInput calendar="gregory" onDateSelect={jest.fn()} />
        )

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')
        fireEvent.focus(dateInput)

        const yearSelect = await screen.findByTestId('calendar-year-select')
        const years = within(yearSelect)
            .getAllByRole('option')
            .map((option) => Number(option.value))

        expect(Math.max(...years)).toBeGreaterThan(2024)

        jest.useRealTimers()
    })

    it('sets the calendar wrapper direction from the dir prop', async () => {
        const screen = render(
            <CalendarInput
                calendar="gregory"
                dir="rtl"
                onDateSelect={jest.fn()}
            />
        )

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')
        fireEvent.focus(dateInput)

        const calendar = await screen.findByTestId('calendar')
        expect(calendar).toHaveAttribute('dir', 'rtl')
    })

    it('renders day labels using the numberingSystem prop', async () => {
        jest.useFakeTimers()
        jest.setSystemTime(new Date('2024-10-22T09:05:00.000Z'))

        const screen = render(
            <CalendarInput
                calendar="gregory"
                numberingSystem="arab"
                onDateSelect={jest.fn()}
            />
        )

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')
        fireEvent.focus(dateInput)

        const calendar = await screen.findByTestId('calendar')
        const today = within(calendar).getByTestId('2024-10-22')

        expect(today).toHaveTextContent('٢٢')

        jest.useRealTimers()
    })

    it('renders weekday headers using the weekDayFormat prop', async () => {
        const screen = render(
            <CalendarInput
                calendar="gregory"
                weekDayFormat="long"
                onDateSelect={jest.fn()}
            />
        )

        const dateInput = within(
            screen.getByTestId('dhis2-uicore-input')
        ).getByRole('textbox')
        fireEvent.focus(dateInput)

        const calendar = await screen.findByTestId('calendar')
        expect(within(calendar).getByText('Monday')).toBeInTheDocument()
    })

    // Regression coverage for LIBS-763: useDatePicker (in @dhis2/multi-calendar-dates)
    // used to rebuild the year/month navigation lists and the day-cell grid on every
    // render - including every keystroke while typing here, with the calendar widget
    // open - regardless of whether the visible month/calendar/locale had actually
    // changed. Fixed upstream in @dhis2/multi-calendar-dates@3.0.0-alpha.1.
    describe('performance (LIBS-763)', () => {
        // For gregory/ethiopic (native-ICU calendars) the broken memoization showed
        // up as ~500 redundant `new Intl.DateTimeFormat(...)` constructions for a
        // single keystroke; count is a deterministic, machine-speed-independent
        // signal, unlike timing it directly.
        const countDateTimeFormatConstructions = (fn) => {
            const realResolvedOptions =
                Intl.DateTimeFormat.prototype.resolvedOptions
            let count = 0
            Intl.DateTimeFormat.prototype.resolvedOptions = function (
                ...args
            ) {
                count++
                return realResolvedOptions.apply(this, args)
            }
            try {
                fn()
            } finally {
                Intl.DateTimeFormat.prototype.resolvedOptions =
                    realResolvedOptions
            }
            return count
        }

        it('does not reconstruct Intl.DateTimeFormat instances while typing (gregory)', async () => {
            const screen = render(
                <CalendarInput calendar="gregory" onDateSelect={jest.fn()} />
            )
            const dateInput = within(
                screen.getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')
            fireEvent.focus(dateInput)
            await screen.findByTestId('calendar')

            const constructions = countDateTimeFormatConstructions(() => {
                fireEvent.change(dateInput, {
                    target: { value: '2024-10-1' },
                })
            })

            expect(constructions).toBeLessThan(10)
        })

        it('does not reconstruct Intl.DateTimeFormat instances while typing (ethiopic)', async () => {
            const screen = render(
                <CalendarInput
                    calendar="ethiopian"
                    onDateSelect={jest.fn()}
                />
            )
            const dateInput = within(
                screen.getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')
            fireEvent.focus(dateInput)
            await screen.findByTestId('calendar')

            const constructions = countDateTimeFormatConstructions(() => {
                fireEvent.change(dateInput, {
                    target: { value: '2017-02-0' },
                })
            })

            expect(constructions).toBeLessThan(10)
        })

        // Nepali is a custom (non-ICU) calendar, so it never goes through
        // Intl.DateTimeFormat - the same broken memoization instead showed up as
        // redundant custom-calendar date-conversion work, so time it directly.
        // 300ms for 10 keystrokes is ~25x the fixed baseline (~13ms) and ~2.5x
        // below the broken one (~760ms), leaving headroom in both directions.
        // Skipped in CI: unlike the count-based tests above, this asserts on
        // wall-clock time, which can be flaky on slower/shared CI runners.
        // Uncomment to run locally when touching useDatePicker/useNavigation.
        it.skip('keeps typing fast (nepali)', async () => {
            const screen = render(
                <CalendarInput calendar="nepali" onDateSelect={jest.fn()} />
            )
            const dateInput = within(
                screen.getByTestId('dhis2-uicore-input')
            ).getByRole('textbox')
            fireEvent.focus(dateInput)
            await screen.findByTestId('calendar')

            const chars = '2081-07-01'.split('')
            const progressive = chars.map((_, i) =>
                chars.slice(0, i + 1).join('')
            )

            const start = process.hrtime.bigint()
            progressive.forEach((value) =>
                fireEvent.change(dateInput, { target: { value } })
            )
            const elapsedMs = Number(process.hrtime.bigint() - start) / 1e6

            expect(elapsedMs).toBeLessThan(300)
        })
    })

    describe('validation', () => {
        it('should show a warning instead of an error when strictValidation is false', () => {
            const onDateSelectMock = jest.fn()
            const screen = render(
                <CalendarWithValidation
                    calendar="gregory"
                    minDate="2024-01-01"
                    strictValidation={false}
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
            expect(onDateSelectMock).toHaveBeenCalledWith(
                expect.objectContaining({
                    validation: expect.objectContaining({
                        warning: true,
                        valid: true,
                    }),
                })
            )
        })
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
