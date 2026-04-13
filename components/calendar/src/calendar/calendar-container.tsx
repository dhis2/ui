import { colors, elevations } from '@dhis2/ui-constants'
import React, { useMemo } from 'react'
import { CalendarTable } from './calendar-table.tsx'
import type { CalendarTableProps } from './calendar-table.tsx'
import { NavigationContainer } from './navigation-container.tsx'
import type { NavigationContainerProps } from './navigation-container.tsx'

const backgroundColor = colors.white

export interface CalendarContainerProps
    extends CalendarTableProps,
        NavigationContainerProps {
    date?: string
    width?: string
    calendarRef?: React.Ref<HTMLDivElement>
}

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
}: CalendarContainerProps) {
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
                    box-shadow: ${(elevations as Record<string, string>)
                        .popover};
                }
            `}</style>
        </div>
    )
})
