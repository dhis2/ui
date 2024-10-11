import { Button } from '@dhis2-ui/button'
import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'
import { CalendarInput } from '../calendar-input/calendar-input.js'
import { CalendarStoryWrapper } from './calendar-story-wrapper.js'

const subtitle = `[Experimental] Calendar Input is a wrapper around Calendar displaying an input that triggers the calendar`
const description = `
Use a CalendarInput where there is a need to let the user input a date.

Note that it requires a parent, like [Box](../?path=/docs/layout-box--default), to define its size.

\`\`\`js
import { CalendarInput } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'CalendarInput',
    component: CalendarInput,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
}

const buildCalendar =
    ({ date, locale, calendar }) =>
    () =>
        (
            <CalendarStoryWrapper
                component={CalendarInput}
                dir="ltr"
                timeZone="Africa/Khartoum"
                weekDayFormat="short"
                date={date}
                locale={locale}
                calendar={calendar}
                onDateSelect={() => {}}
            />
        )

export const EthiopicWithAmharic = buildCalendar({
    calendar: 'ethiopic',
    locale: 'am-ET',
    date: '2014-02-03', // 13 Oct 2021
})

export const EthiopicWithEnglish = buildCalendar({
    calendar: 'ethiopian', // using "ethiopian" rather than the correct "ethiopic" to immitate DHIS2 calendar types
    locale: 'en-ET',
    date: '2014-02-03', // 13 Oct 2021
})

export const NepaliWithNepali = buildCalendar({
    calendar: 'nepali',
    locale: 'ne-NP',
    date: '2078-06-27', // 13 Oct 2021
})

export const NepaliWithEnglish = buildCalendar({
    calendar: 'nepali',
    locale: 'en-NP',
    date: '2078-06-27', // 13 Oct 2021
})

export const GregorianWithEnglish = buildCalendar({
    calendar: 'gregorian',
    locale: 'en-CA',
    date: '2021-10-13',
})

export const GregorianWithArabic = buildCalendar({
    calendar: 'gregorian',
    locale: 'ar-SD',
    date: '2021-10-13',
})

export const IslamicWithArabic = () => {
    return (
        <div style={{ direction: 'rtl' }}>
            <CalendarStoryWrapper
                component={CalendarInput}
                dir="rtl"
                timeZone="Africa/Khartoum"
                weekDayFormat="short"
                date="1477-01-13"
                locale="ar-SD"
                calendar="islamic-civil"
                clearable={true}
                onDateSelect={() => {}}
            />
        </div>
    )
}

export const CalendarWithClearButton = ({
    calendar = 'gregory',
    date: initialDate = null,
}) => {
    const [date, setDate] = useState(initialDate)
    return (
        <>
            <CalendarInput
                calendar={calendar}
                date={date}
                onDateSelect={(date) => {
                    setDate(date?.calendarDateString)
                }}
                clearable
            />
            <div>
                value:
                <span data-test="storybook-calendar-date-value">
                    {date ?? 'undefined'}
                </span>
            </div>
        </>
    )
}

export function CalendarWithEditiableInput() {
    const [date, setDate] = useState('2020-07-03')
    return (
        <div>
            <>
                <CalendarInput
                    date={date}
                    calendar="gregory"
                    onDateSelect={(selectedDate) => {
                        const date = selectedDate?.calendarDateString
                        setDate(date)
                    }}
                    width="400px"
                    minDate="2020-07-01"
                    maxDate="2020-07-09"
                    clearable
                />
            </>
        </div>
    )
}

export function CalendarWithStrictValidation() {
    const [validation, setValidation] = useState({})

    const errored = () => {
        if (validation.error) {
            return { calendar: validation.validationText }
        }
    }

    return (
        <Form
            onSubmit={(values, meta) => {
                console.log('SUBMITTING', { values, meta })
            }}
            initialValues={{ calendar: '2022-10-12' }}
            validate={errored}
        >
            {({ handleSubmit, invalid }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Field name="calendar">
                            {(props) => (
                                <CalendarInput
                                    {...props}
                                    label="Enter a date"
                                    helpText="Date has to be after 2022-11-01"
                                    input={props.input}
                                    meta={props.meta}
                                    editable
                                    date={props.input.value}
                                    calendar="gregory"
                                    {...validation}
                                    minDate="2022-11-01"
                                    onDateSelect={(date) => {
                                        const validation = {
                                            ...date.validation,
                                            validationText:
                                                date.validation
                                                    .validationCode ===
                                                'WRONG_FORMAT'
                                                    ? 'custom validation message for format'
                                                    : date.validation
                                                          .validationText,
                                        }
                                        setValidation(validation)
                                        props.input.onChange(
                                            date ? date?.calendarDateString : ''
                                        )
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

export function CalendarWithNonStrictValidation() {
    const [validation, setValidation] = useState({})

    const errored = () => {
        if (validation.error) {
            return { calendar: validation.validationText }
        }
    }

    return (
        <Form
            onSubmit={(values, meta) => {
                console.log('SUBMITTING', { values, meta })
            }}
            initialValues={{ calendar: '2022-10-12' }}
            validate={errored}
        >
            {({ handleSubmit, invalid }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Field name="calendar">
                            {(props) => (
                                <CalendarInput
                                    {...props}
                                    label="Enter a date"
                                    helpText="Date has to be after 2022-11-01"
                                    input={props.input}
                                    meta={props.meta}
                                    editable
                                    date={props.input.value}
                                    calendar="gregory"
                                    {...validation}
                                    minDate="2022-11-01"
                                    strictValidation={false}
                                    onDateSelect={(date) => {
                                        const validation = {
                                            ...date.validation,
                                            validationText:
                                                date.validation
                                                    .validationCode ===
                                                'WRONG_FORMAT'
                                                    ? 'custom validation message for format'
                                                    : date.validation
                                                          .validationText,
                                        }
                                        setValidation(validation)
                                        props.input.onChange(
                                            date ? date?.calendarDateString : ''
                                        )
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
