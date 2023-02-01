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
    const [selectedDateString, setSelectedDateString] = useState(date)

    const languageDirection = useResolvedDirection(dir, locale)

    const styleOptions = {
        backgroundColor: 'none',
        chevronColor: colors.grey600,
        dayHoverBackgroundColor: colors.grey200,
        dayNamesColor: colors.grey700,
        headerBackground: colors.grey050,
        selectedDayBackgroundColor: colors.teal700,
        wrapperBorderColor: colors.grey300,
        width,
        cellSize,
    }

    const options = {
        locale,
        calendar,
        timeZone,
        numberingSystem,
        weekDayFormat,
    }

    const pickerOptions = useDatePicker({
        onDateSelect: (result) => {
            const { calendarDateString /*, calendarDate*/ } = result
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
                className="wrapper"
                dir={languageDirection}
                data-test="calendar"
            >
                <NavigationContainer
                    pickerOptions={pickerOptions}
                    languageDirection={languageDirection}
                    styleOptions={styleOptions}
                />
                <CalendarTable
                    calendarWeekDays={calendarWeekDays}
                    weekDayLabels={weekDayLabels}
                    styleOptions={styleOptions}
                    cellSize={cellSize}
                    width={width}
                />
            </div>
            <style jsx>{`
                .wrapper {
                    font-family: Roboto, sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    background-color: ${styleOptions.backgroundColor};
                    display: flex;
                    flex-direction: column;
                    border: 1px solid ${styleOptions.wrapperBorderColor};
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
