import { Box } from '@dhis2-ui/box'
import { Calendar } from '@dhis2-ui/calendar'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const CalendarWrapper = (props) => {
    const [selectedDate, setSelectedDate] = useState()
    const isoDate = selectedDate?.withCalendar('iso8601')
    return (
        <Box>
            <Calendar
                onDateSelect={(date) => {
                    setSelectedDate(date.calendarDate)
                }}
                {...props}
            />
            <div
                style={{
                    marginTop: 15,
                    marginBottom: 15,
                    gap: 5,
                    fontSize: '10px',
                    lineHeight: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    {selectedDate && (
                        <>
                            <div>
                                Gregorian date: {isoDate.year} - {isoDate.month}{' '}
                                - {isoDate.day}
                                <br />
                                Calendar date:{' '}
                                {selectedDate.eraYear ||
                                    selectedDate.year} - {selectedDate.month} -{' '}
                                {selectedDate.day}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Box>
    )
}

CalendarWrapper.defaultProps = {
    dir: 'ltr',
    timeZone: 'UTC',
    weekDayFormat: 'narrow',
}
CalendarWrapper.propTypes = {
    calendar: PropTypes.any.isRequired,
    locale: PropTypes.string.isRequired,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    timeZone: PropTypes.string,
    weekDayFormat: PropTypes.string,
}
export { CalendarWrapper }
