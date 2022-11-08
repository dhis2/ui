import React from 'react'
import cx from 'classnames'
import {
    useDatePicker,
    useResolvedLocaleOptions,
    Temporal,
    SupportedCalendar,
    SupportedNumberingSystem,
    SupportedTimeZone,
} from 'multi-calendar-dates'

type SelectedDate = {
    calendarDate: Temporal.ZonedDateTime
    isoDate: Temporal.ZonedDateTime
}
type DatePickerProps = {
    onDateSelect: (options: SelectedDate) => void
    calendar: SupportedCalendar
    locale: string
    timeZone: SupportedTimeZone
    numberingSystem?: SupportedNumberingSystem
    initialDate?: string
    showIsoDate?: boolean
    dir?: 'rtl' | 'ltr'
    styleOptions?: {
        backgroundColor?: string
        selectedDayBackgroundColor?: string
        dayHoverBackgroundColor?: string
        cellSize?: string
    }
}

export const Calendar: React.FC<DatePickerProps> = ({
    onDateSelect,
    calendar,
    initialDate,
    dir = 'ltr',
    locale = 'en',
    numberingSystem = 'geor',
    showIsoDate = false,
    timeZone,
    styleOptions: {
        backgroundColor = 'none',
        selectedDayBackgroundColor = '#3003e1',
        dayHoverBackgroundColor = '#e7edff',
        cellSize = '40px',
    } = {},
}) => {
    const { resolvedLocale, resolvedOptions, error } = useResolvedLocaleOptions(
        {
            calendar,
            locale,
            numberingSystem,
            timeZone,
        }
    )

    if (!resolvedLocale || !resolvedOptions?.calendar) {
        throw error || 'no resolved locale or calendar'
    }

    const [selectedDateString, setSelectedDateString] = React.useState(
        initialDate
    )

    const {
        calendarWeekDays,
        currMonth,
        currYear,
        nextMonth,
        nextYear,
        prevMonth,
        prevYear,
        selectedDate,
        today,
        weekDayLabels,
    } = useDatePicker({
        onDateSelect: ({ calendarDate, isoDate }) => {
            console.log('calendarDate', calendarDate)
            setSelectedDateString(isoDate.toString())
            onDateSelect({ calendarDate, isoDate })
        },
        initialDate: selectedDateString,
        options: {
            locale: resolvedLocale,
            calendar: resolvedOptions.calendar,
            timeZone: resolvedOptions.timeZone,
            numberingSystem:
                numberingSystem ||
                (resolvedOptions.numberingSystem as SupportedNumberingSystem),
        },
    })

    return (
        <div className="wrapper" dir={dir}>
            <div className="navGridContainer">
                <div className="year">
                    <div className="prev">
                        <button onClick={prevYear.navigateTo}>
                            {prevYear.label}
                        </button>
                    </div>
                    <div className="curr">
                        <span className="label">{currYear.label}</span>
                    </div>
                    <div className="next">
                        <button
                            onClick={nextYear.navigateTo}
                            name="next-month"
                            aria-label="Go to next month"
                            type="button"
                        >
                            {nextYear.label}
                        </button>
                    </div>
                </div>
                <div className="month">
                    <div className="prev">
                        <button
                            onClick={prevMonth.navigateTo}
                            name="previous-month"
                            aria-label="Go to previous month"
                            type="button"
                        >
                            <span>{prevMonth.label}</span>
                        </button>
                    </div>
                    <div className="curr">
                        <span className="label">{currMonth.label}</span>
                    </div>
                    <div className="next">
                        <button
                            onClick={nextMonth.navigateTo}
                            name="previous-month"
                            aria-label="Go to previous month"
                            type="button"
                        >
                            <span>{nextMonth.label}</span>
                        </button>
                    </div>
                </div>
                {/*
                 todo: think about the design for Today, for now, we have Today selected which is good enough
                <div className="today">
                    <button className="today" onClick={today.navigateTo}>
                        {today.label}
                    </button>
                </div> */}
            </div>
            <table className="calendarTable">
                <thead>
                    <tr>
                        {weekDayLabels.map((label, i) => (
                            <th scope="col" key={`weekday-${i + 1}`}>
                                {label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {calendarWeekDays.map((week, weekIndex) => (
                        <tr key={`week-${weekIndex + 1}`}>
                            {week.map((day) => (
                                <td
                                    key={`${day.zdt.monthCode}-${day.zdt.day}`}
                                    onClick={day.onClick}
                                >
                                    <button
                                        name="day"
                                        className={cx('day', {
                                            isSelected: day.isSelected,
                                            isToday: day.isToday,
                                            otherMonth: !day.isInCurrentMonth,
                                        })}
                                    >
                                        {day.label}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {showIsoDate && (
                <div className="selectedDate">
                    <span className="label">{selectedDate.label}</span>
                </div>
            )}
            <style jsx>{`
                .wrapper {
                    background-color: ${backgroundColor};
                    display: flex;
                    flex-direction: column;
                    font-size: 14px;
                }
                .month,
                .year {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                }

                .month .curr,
                .year .curr {
                    flex: 2;
                }

                .prev,
                .next {
                    flex: 1;
                    text-align: center;
                }

                .month {
                    font-size: 1.1em;
                }
                .year {
                    font-size: 0.8em;
                }
                .curr {
                    font-weight: bold;
                }
                th {
                    font-weight: bold;
                }
                .navGridContainer {
                    gap: 8px;
                    padding: 8px;
                }
                .navGridContainer > div {
                    display: flex;
                }
                .navGridContainer > .prev {
                    justify-content: flex-start;
                }
                .navGridContainer > .curr {
                    justify-content: center;
                }
                .navGridContainer > .next {
                    justify-content: flex-end;
                }
                .navGridContainer > .today {
                    grid-area: today;
                }
                .today > button {
                    width: 100%;
                }
                .calendarTable {
                    border-collapse: collapse;
                    width: 100%;
                }
                .calendarTable th {
                    padding: 6px;
                }
                .calendarTable td {
                    width: ${cellSize};
                    height: 100%;
                    height: ${cellSize};
                    padding: 0;
                    text-align: center;
                }
                .calendarTable td span {
                    display: inline-flex;
                    padding: 2px 2px;
                    justify-content: center;
                    border: 2px solid transparent;
                    border-radius: 50%;
                    min-width: 16px;
                }
                .selectedDate {
                    text-align: center;
                    padding: 4px 8px;
                }
                .label {
                    display: flex;
                    background-color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                    justify-content: center;
                    min-height: 16px;
                }
                .selectedDate .label:empty {
                    visibility: hidden;
                }
                button {
                    background: none;
                    border: 0;
                    border-radius: 100%;
                    cursor: pointer;
                }

                button[name='day'] {
                    overflow: hidden;
                    width: ${cellSize};
                    max-width: ${cellSize};
                    height: ${cellSize};
                    margin: 0;
                    border: 2px solid transparent;
                    border-radius: 100%;
                    background: none;
                }

                button[name='day']:hover {
                    background-color: ${dayHoverBackgroundColor};
                }
                button[name='day'].isSelected {
                    background-color: ${selectedDayBackgroundColor};
                }
                button.isToday {
                    border-color: #517bba;
                }
                button.otherMonth {
                    opacity: 0.2;
                }
            `}</style>
        </div>
    )
}
