import { Box } from '@dhis2-ui/box'
import { constants } from '@dhis2/multi-calendar-dates'
import React, { useRef, useState } from 'react'
import { Calendar } from './calendar.js'

const { calendars, numberingSystems } = constants

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

export const CalendarWrapper = ({ calendar, locale, timeZone, dir }) => {
    const [selectedCalendar, setSelectedCalendar] = useState(calendar)
    const [selectedNumberingSystem, setSelectedNumberingSystem] = useState()
    const [selectedDirection, setSelectedDirection] = useState(dir)
    const [selectedWeekFormat, setWeekDayFormat] = useState('narrow')
    const ref = useRef(null)

    const [selectedLocale, setLocale] = useState(locale)
    const [selectedDate, setSelectedDate] = useState()
    const changeCalendar = ({ target: { value } }) => {
        setSelectedCalendar(value)
    }
    const changeNumberingSystem = ({ target: { value } }) => {
        setSelectedNumberingSystem(value)
    }
    const changeDirection = ({ target: { value } }) => {
        setSelectedDirection(value)
    }

    const changeWeekFormat = ({ target: { value } }) => {
        setWeekDayFormat(value)
    }

    const onLocaleChanged = ({ target: { value } }) => {
        setLocale(value)
    }

    const isoDate = selectedDate?.withCalendar('iso8601')
    return (
        <Box>
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
                <select
                    onChange={changeNumberingSystem}
                    value={selectedNumberingSystem}
                >
                    <option key={calendar} value="-1">
                        Select numbering system
                    </option>
                    {numberingSystems.map((system) => {
                        return (
                            <option value={system} key={system}>
                                {system}
                            </option>
                        )
                    })}
                </select>
                <select onChange={changeDirection} value={selectedDirection}>
                    <option value="-1">Select direction</option>
                    <option value="ltr">Left-To-Right</option>
                    <option value="rtl">Right-To-Left</option>
                </select>
                <select onChange={changeWeekFormat} value={selectedWeekFormat}>
                    <option value="-1">Select format</option>
                    <option value="narrow">narrow</option>
                    <option value="short">short</option>
                    <option value="long">long</option>
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
                weekDayFormat={selectedWeekFormat}
                numberingSystem={selectedNumberingSystem}
            />
            <div
                style={{
                    marginTop: 10,
                    gap: 5,
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div>
                    {selectedDate && (
                        <>
                            <div>custom callback</div>
                            <div>
                                Gregorian date: {isoDate.year} - {isoDate.month}{' '}
                                - {isoDate.day}
                            </div>
                            <div>
                                Calendar date:{' '}
                                {selectedDate.eraYear || selectedDate.year} -{' '}
                                {selectedDate.month} - {selectedDate.day}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Box>
    )
}
export const WithEthiopic = (args) => {
    return (
        <CalendarWrapper
            calendar="ethiopic"
            locale="am-et"
            numberingSystem="ethi"
            timeZone="Europe/London"
            {...args}
        />
    )
}
export const WithCalendarInEnglish = (args) => {
    return (
        <CalendarWrapper
            calendar="islamic-civil"
            locale="en-GB"
            numberingSystem="ethi"
            {...args}
        />
    )
}

export const WithIslamicCivil = (args) => {
    return (
        <CalendarWrapper
            calendar="islamic-civil"
            locale="ar-TN"
            numberingSystem="geor"
            timeZone="Africa/Khartoum"
            {...args}
        />
    )
}
export const WithNepali = (args) => {
    return (
        <CalendarWrapper
            calendar="nepali"
            locale="ne-NP"
            timeZone="Africa/Khartoum"
            {...args}
        />
    )
}

export const WithNepaliEnglish = (args) => {
    return (
        <CalendarWrapper
            calendar="nepali"
            locale="en-NP"
            timeZone="Africa/Khartoum"
            {...args}
        />
    )
}
