import { constants } from '@dhis2/multi-calendar-dates'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Calendar } from '../calendar/calendar.js'

const { calendars, numberingSystems } = constants
export const CalendarStoryWrapper = (props) => {
    const {
        calendar,
        locale,
        timeZone,
        dir,
        component: Component,
        date,
        weekDayFormat,
    } = props
    const [selectedCalendar, setSelectedCalendar] = useState(calendar)
    const [selectedNumberingSystem, setSelectedNumberingSystem] = useState()
    const [selectedDirection, setSelectedDirection] = useState(dir)
    const [selectedWeekFormat, setWeekDayFormat] = useState(weekDayFormat)

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

    return (
        <div>
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
                    defaultValue={locale}
                    placeholder="locale"
                    onBlur={onLocaleChanged}
                />
                <select onChange={changeCalendar} value={selectedCalendar}>
                    <option disabled key={calendar} value="-1">
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
                    <option disabled key={calendar} value="-1">
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
                    <option disabled value="-1">
                        Select direction
                    </option>
                    <option value="ltr">Left-To-Right</option>
                    <option value="rtl">Right-To-Left</option>
                </select>
                <select onChange={changeWeekFormat} value={selectedWeekFormat}>
                    <option disabled value="-1">
                        Select format
                    </option>
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
        </div>
    )
}

CalendarStoryWrapper.defaultProps = {
    calendar: 'gregorian',
    component: Calendar,
    weekDayFormat: 'narrow',
}

CalendarStoryWrapper.propTypes = {
    calendar: PropTypes.string.isRequired,
    component: PropTypes.elementType.isRequired,
    date: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    locale: PropTypes.string,
    timeZone: PropTypes.string,
    weekDayFormat: PropTypes.string,
}
