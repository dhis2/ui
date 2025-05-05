import { elevations } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { CalendarTable, CalendarTableProps } from './calendar-table.js'
import {
    NavigationContainer,
    NavigationContainerProps,
} from './navigation-container.js'

const backgroundColor = 'none'

export const CalendarContainer = React.memo(function CalendarContainer({
    date,
    width = '240px',
    cellSize = '32px',
    calendarWeekDays,
    weekDayLabels,
    currMonth,
    currYear,
    nextMonth,
    nextYear,
    prevMonth,
    prevYear,
    navigateToYear,
    navigateToMonth,
    months,
    years,
    languageDirection,
    calendarRef,
}) {
    const navigationProps = useMemo(() => {
        return {
            currMonth,
            currYear,
            nextMonth,
            nextYear,
            prevMonth,
            prevYear,
            languageDirection,
            navigateToYear,
            navigateToMonth,
            months,
            years,
        }
    }, [
        currMonth,
        currYear,
        languageDirection,
        nextMonth,
        nextYear,
        prevMonth,
        prevYear,
        navigateToYear,
        navigateToMonth,
        months,
        years,
    ])
    return (
        <div>
            <div
                className="calendar-wrapper"
                dir={languageDirection}
                data-test="calendar"
            >
                <div ref={calendarRef}>
                    <NavigationContainer {...navigationProps} />
                    <CalendarTable
                        selectedDate={date}
                        calendarWeekDays={calendarWeekDays}
                        weekDayLabels={weekDayLabels}
                        cellSize={cellSize}
                        width={width}
                    />
                </div>
            </div>
            <style jsx>{`
                .calendar-wrapper {
                    font-family: Roboto, sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    background-color: ${backgroundColor};
                    display: flex;
                    flex-direction: column;
                    border-radius: 3px;
                    min-width: ${width};
                    width: max-content;
                    box-shadow: ${elevations.popover};
                }
            `}</style>
        </div>
    )
})

CalendarContainer.propTypes = {
    /** the currently selected date using an iso-like format YYYY-MM-DD, in the calendar system provided (not iso8601) */
    date: PropTypes.string,
    ...CalendarTableProps,
    ...NavigationContainerProps,
}
