import React from 'react'
import { CalendarInput } from '../calendarInput.js'
import { CalendarStoryWrapper } from './calendarStoryWrapper.js'

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
            />
        )

export const EthiopicWithAmharic = buildCalendar({
    calendar: 'ethiopic',
    locale: 'am-ET',
    date: '2014-02-03', // 13 Oct 2021
})

export const EthiopicWithEnglish = buildCalendar({
    calendar: 'ethiopic',
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

export const IslamicWithArabic = buildCalendar({
    calendar: 'islamic-civil',
    locale: 'ar-SD',
    date: '2015-01-13',
})

export const WithAnyCalendar = buildCalendar({
    calendar: 'gregorian',
    locale: 'en',
    date: '2015-01-13',
})
