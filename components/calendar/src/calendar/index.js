import {
    useDatePicker,
    useResolvedDirection,
} from '@dhis2/multi-calendar-dates'
import { colors } from '@dhis2/ui-constants'
import React, { useState } from 'react'
import { CalendarProps } from './calendar-prop-types.js'
import { CalendarTable } from './calendar-table.js'
import { NavigationContainer } from './navigation-container.js'

export const Calendar = ({
    onDateSelect,
    calendar,
    date,
    dir,
    locale,
    numberingSystem,
    weekDayFormat,
    timeZone,
    width,
    cellSize,
}) => {
    const wrapperBorderColor = colors.grey300
    const backgroundColor = 'none'

    const [selectedDateString, setSelectedDateString] = useState(date)
    const languageDirection = useResolvedDirection(dir, locale)

    const options = {
        locale,
        calendar,
        timeZone,
        numberingSystem,
        weekDayFormat,
    }

    const pickerOptions = useDatePicker({
        onDateSelect: (result) => {
            const { calendarDateString } = result
            setSelectedDateString(calendarDateString)
            onDateSelect(result)
        },
        date: selectedDateString,
        options,
    })

    const { calendarWeekDays, weekDayLabels } = pickerOptions

    return (
        <div>
            <div
                className="calendar-wrapper"
                dir={languageDirection}
                data-test="calendar"
            >
                <NavigationContainer
                    pickerOptions={pickerOptions}
                    languageDirection={languageDirection}
                />
                <CalendarTable
                    calendarWeekDays={calendarWeekDays}
                    weekDayLabels={weekDayLabels}
                    cellSize={cellSize}
                    width={width}
                />
            </div>
            <style jsx>{`
                .calendar-wrapper {
                    font-family: Roboto, sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    background-color: ${backgroundColor};
                    display: flex;
                    flex-direction: column;
                    border: 1px solid ${wrapperBorderColor};
                    border-radius: 3px;
                    min-width: ${width};
                    width: max-content;
                    box-shadow: 0px 4px 6px -2px #2129340d;
                    box-shadow: 0px 10px 15px -3px #2129341a;
                }
            `}</style>
        </div>
    )
}

Calendar.defaultProps = {
    cellSize: '32px',
    width: '240px',
    weekDayFormat: 'narrow',
}

Calendar.propTypes = CalendarProps
