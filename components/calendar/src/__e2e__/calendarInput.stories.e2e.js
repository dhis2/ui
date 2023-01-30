import { storiesOf } from '@storybook/react'
import React from 'react'
import { CalendarStoryWrapper } from '../__stories__/calendarStoryWrapper.js'

const buildCalendar =
    ({ date, locale, calendar }) =>
    () => {
        return (
            <CalendarStoryWrapper
                calendarInput
                dir="ltr"
                timeZone="Africa/Khartoum"
                weekDayFormat="short"
                date={date}
                locale={locale}
                calendar={calendar}
            />
        )
    }

storiesOf('A calendar', module)
    .add(
        'for the Nepali calendar in nepali',
        buildCalendar({
            calendar: 'nepali',
            locale: 'ne-NP',
            date: '2078-06-27',
        })
    )
    .add(
        'for the Nepali calendar in english',
        buildCalendar({
            calendar: 'nepali',
            locale: 'en-NP',
            date: '2078-06-27',
        })
    )
    .add(
        'for the Ethiopic calendar in amharic',
        buildCalendar({
            calendar: 'ethiopic',
            locale: 'am-ET',
            date: '2014-02-03', // 13 Oct 2021
        })
    )
    .add(
        'for the Ethiopic calendar in english',
        buildCalendar({
            calendar: 'ethiopic',
            locale: 'en-ET',
            date: '2014-02-03', // 13 Oct 2021
        })
    )
    .add(
        'for the gregorian calendar in english',
        buildCalendar({
            calendar: 'gregorian',
            locale: 'en-CA',
            date: '2021-10-13',
        })
    )
    .add(
        'for the gregorian calendar in arabic',
        buildCalendar({
            calendar: 'gregorian',
            locale: 'ar-SD',
            date: '2021-10-13',
        })
    )
    .add(
        'for the Islamic calendar',
        buildCalendar({
            calendar: 'islamic-civil',
            locale: 'ar-SD',
            date: '2015-01-13',
        })
    )
