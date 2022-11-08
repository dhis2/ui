import { Box } from '@dhis2-ui/box'
import { calendars, customCalendars } from 'multi-calendar-dates'
import React, { useRef, useState } from 'react'
import { Calendar } from './calendar'

const subtitle = `[Experimental] Calendar component is useful for creating a variety of calendars including Ethiopic, Islamic etc..`
const description = `
Use a Calendar where there is a need to let the user select a date.

Note that it requires a parent, like [Box](../?path=/docs/layout-box--default), to define its size.

\`\`\`js
import { Calendar } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Calendar',
    component: Calendar,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
}

const CalendarWrapper = ({
    calendar,
    locale,
    numberingSystem,
    timeZone,
    dir = 'ltr',
    children,
}) => {
    const [selectedCalendar, setSelectedCalendar] = useState(calendar)
    const [selectedDirection, setSelectedDirection] = useState(dir)
    const ref = useRef(null)

    const [selectedLocale, setLocale] = useState(locale)
    const [selectedDate, setSelectedDate] = useState()
    const changeCalendar = ({ target: { value } }) => {
        setSelectedCalendar(value)
    }
    const changeDirection = ({ target: { value } }) => {
        setSelectedDirection(value)
    }

    const onLocaleChanged = ({ target: { value } }) => {
        setLocale(value)
    }

    return (
        <Box width="358px" height="358px">
            <div
                style={{
                    fontSize: '0.8em',
                    marginBottom: 20,
                    gap: 5,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div>Options</div>
                <input
                    ref={ref}
                    defaultValue={locale}
                    placeholder="locale"
                    onBlur={onLocaleChanged}
                />
                <select onChange={changeCalendar} value={selectedCalendar}>
                    <option key={calendar} value="-1">
                        Select calendar
                    </option>
                    {calendars.map((calendar) => {
                        return (
                            <option value={calendar} key={calendar}>
                                {calendar}
                            </option>
                        )
                    })}
                </select>
                <select onChange={changeDirection} value={selectedDirection}>
                    <option value="-1">Select locale</option>
                    <option value="ltr">Left-To-Right</option>
                    <option value="rtl">Right-To-Left</option>
                </select>
            </div>
            <Calendar
                calendar={selectedCalendar}
                dir={selectedDirection}
                locale={selectedLocale}
                onDateSelect={(date) => {
                    setSelectedDate(date.calendarDate)
                }}
                timeZone={timeZone}
                showIsoDate
            />
            <div
                style={{
                    marginTop: 10,
                    gap: 5,
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div>
                    {selectedDate &&
                        `${selectedDate.year} - ${selectedDate.month} - ${selectedDate.day}`}
                </div>
            </div>
        </Box>
    )
}
export const Ethiopian = (args) => {
    return (
        <CalendarWrapper
            calendar="ethiopic"
            locale="am-et"
            numberingSystem="ethi"
            timeZone="Europe/London"
        />
    )
}
export const CalendarInEnglish = (args) => {
    return (
        <CalendarWrapper
            calendar="islamic-civil"
            locale="en-GB"
            numberingSystem="ethi"
            timeZone="Europe/London"
        />
    )
}

export const IslamicCivil = (args) => {
    return (
        <CalendarWrapper
            calendar="islamic-civil"
            dir="rtl"
            locale="ar-TN"
            numberingSystem="geor"
            timeZone="Africa/Khartoum"
        />
    )
}
export const Nepali = (args) => {
    return (
        <CalendarWrapper
            calendar={customCalendars.nepali?.calendar}
            locale="ne-NP"
            timeZone="Africa/Khartoum"
        />
    )
}

export const NepaliEnglish = (args) => {
    return (
        <CalendarWrapper
            calendar={customCalendars.nepali?.calendar}
            locale="ne-EN"
            timeZone="Africa/Khartoum"
        />
    )
}
