import { Box } from '@dhis2-ui/box'
import { Calendar } from '@dhis2-ui/calendar'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const CalendarDemo = (props) => {
    const [selectedDate, setSelectedDate] = useState()
    const isoDate = selectedDate?.withCalendar('iso8601')

    const Component = props.component

    return (
        <Box>
            <Component
                onDateSelect={(date) => {
                    setSelectedDate(date?.calendarDate ?? null)
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
                    {selectedDate === null && <>null</>}
                </div>
            </div>
        </Box>
    )
}

CalendarDemo.defaultProps = {
    component: Calendar,
    dir: 'ltr',
    timeZone: 'UTC',
    weekDayFormat: 'narrow',
}
CalendarDemo.propTypes = {
    calendar: PropTypes.any.isRequired,
    component: PropTypes.elementType,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    locale: PropTypes.string,
    timeZone: PropTypes.string,
    weekDayFormat: PropTypes.string,
}
export { CalendarDemo }
