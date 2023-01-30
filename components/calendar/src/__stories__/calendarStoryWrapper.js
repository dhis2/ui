import { Box } from '@dhis2-ui/box'
import { constants } from '@dhis2/multi-calendar-dates'
import React, { useRef, useState } from 'react'
import { Calendar } from '../calendar.js'
import { CalendarInput } from '../calendarInput.js'
const { calendars, numberingSystems } = constants

export const CalendarStoryWrapper = (props) => {
    const { calendar, locale, timeZone, dir, calendarInput, date } = props
    const [selectedCalendar, setSelectedCalendar] = useState(calendar)
    const [selectedNumberingSystem, setSelectedNumberingSystem] = useState()
    const [selectedDirection, setSelectedDirection] = useState(dir)
    const [selectedWeekFormat, setWeekDayFormat] = useState(
        props.weekDayFormat || 'narrow'
    )

    const ref = useRef(null)

    const [selectedLocale, setLocale] = useState(locale)
    const [selectedDate, setSelectedDate] = useState()

    const changeCalendar = ({ target: { value } }) => {
        setSelectedCalendar(value)
    }
    const changeNumberingSystem = ({ target: { value } }) => {
        if (value === '-1') {
            setSelectedNumberingSystem(null)
        } else {
            setSelectedNumberingSystem(value)
        }
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

    const Component = calendarInput ? CalendarInput : Calendar
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
            <Component
                {...props}
                calendar={selectedCalendar}
                dir={selectedDirection}
                locale={selectedLocale}
                date={date}
                onDateSelect={(date) => {
                    setSelectedDate(date)
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
                            <div>
                                <label>calendar date: </label>
                                <span data-test="storybook-calendar-result">
                                    {selectedDate.calendarDateString}
                                </span>
                            </div>
                            <div>
                                <label>iso date: </label>
                                <span data-test="storybook-calendar-result-iso">
                                    {selectedDate.calendarDate
                                        .withCalendar('iso8601')
                                        .toLocaleString('en-GB', {
                                            dateStyle: 'long',
                                        })}
                                </span>
                            </div>
                            <div>
                                <label>callback:</label>
                                {JSON.stringify(selectedDate, null, 2)}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Box>
    )
}
