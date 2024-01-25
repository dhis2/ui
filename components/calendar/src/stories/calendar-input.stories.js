import React, { useState } from 'react'
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
                clearable
                component={CalendarInput}
                dir="ltr"
                timeZone="Africa/Khartoum"
                weekDayFormat="short"
                date={date}
                locale={locale}
                calendar={calendar}
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
