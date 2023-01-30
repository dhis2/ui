import {
    useDatePicker,
    useResolvedDirection,
} from '@dhis2/multi-calendar-dates'
import { colors, spacers } from '@dhis2/ui-constants'
import { IconChevronLeft16, IconChevronRight16 } from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import i18n from './locales/index.js'

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

    const {
        calendarWeekDays,
        currMonth,
        currYear,
        nextMonth,
        nextYear,
        prevMonth,
        prevYear,
        weekDayLabels,
    } = useDatePicker({
        onDateSelect: (result) => {
            const { calendarDateString /*, calendarDate*/ } = result
            setSelectedDateString(calendarDateString)
            onDateSelect(result)
        },
        date: selectedDateString,
        options,
    })

    const PreviousIcon =
        languageDirection === 'ltr' ? IconChevronLeft16 : IconChevronRight16
    const NextIcon =
        languageDirection === 'ltr' ? IconChevronRight16 : IconChevronLeft16

    return (
        <div>
            <div
                className="wrapper"
                dir={languageDirection}
                data-test="calendar"
            >
                <div className="navigationContainer">
                    <div className="month">
                        <div className="prev">
                            <button
                                onClick={prevMonth.navigateTo}
                                name="previous-month"
                                data-test="calendar-previous-month"
                                aria-label={`${i18n.t('Go to')} ${
                                    prevMonth.label
                                }`}
                                type="button"
                            >
                                <PreviousIcon
                                    color={styleOptions.chevronColor}
                                />
                            </button>
                        </div>
                        <div className="curr">
                            <span className="label">{currMonth.label}</span>
                        </div>
                        <div className="next">
                            <button
                                onClick={nextMonth.navigateTo}
                                data-test="calendar-next-month"
                                name="next-month"
                                aria-label={`Go to ${nextMonth.label}`}
                                type="button"
                            >
                                <NextIcon color={styleOptions.chevronColor} />
                            </button>
                        </div>
                    </div>
                    <div className="year">
                        <div className="prev">
                            <button
                                onClick={prevYear.navigateTo}
                                name="previous-year"
                                aria-label="Go to previous year"
                                type="button"
                            >
                                <PreviousIcon
                                    color={styleOptions.chevronColor}
                                />
                            </button>
                        </div>
                        <div className="curr">
                            <span className="label">{currYear.label}</span>
                        </div>
                        <div className="next">
                            <button
                                onClick={nextYear.navigateTo}
                                name="next-year"
                                aria-label="Go to next year"
                                type="button"
                            >
                                <NextIcon color={styleOptions.chevronColor} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="calendarTableWrapper">
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
                                            data-test={day?.calendarDate}
                                            key={day?.calendarDate}
                                            onClick={day.onClick}
                                        >
                                            <button
                                                name="day"
                                                className={cx('day', {
                                                    isSelected: day.isSelected,
                                                    isToday: day.isToday,
                                                    otherMonth:
                                                        !day.isInCurrentMonth,
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
                </div>
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
                    white-space: nowrap;
                }

                .prev,
                .next {
                    flex: 1;
                    text-align: center;
                }

                .prev button,
                .next button {
                    padding: ${spacers.dp4};
                }

                .prev:hover button,
                .next:hover button {
                    background-color: ${colors.grey200};
                    cursor: pointer;
                }

                th {
                    color: ${styleOptions.dayNamesColor};
                    font-weight: 300;
                    font-style: normal;
                }
                .navigationContainer {
                    height: ${spacers.dp36};
                    gap: ${spacers.dp8};
                    padding: ${spacers.dp4};
                    display: flex;
                    flex-direction: row;
                    border-bottom: 1px solid ${styleOptions.wrapperBorderColor};
                    background-color: ${styleOptions.headerBackground};
                    font-size: 1.08em; /*15px*/
                }
                .navigationContainer > div {
                    display: flex;
                    align-items: flex-start;
                }
                .navigationContainer > .prev {
                    justify-content: flex-start;
                }
                .navigationContainer > .curr {
                    justify-content: center;
                }
                .navigationContainer > .next {
                    justify-content: flex-end;
                }
                .navigationContainer > .today {
                    grid-area: today;
                }
                .today > button {
                    width: 100%;
                }
                .calendarTable {
                    border: none;
                    border-collapse: collapse;
                    width: 100%;
                    margin-block: ${spacers.dp4};
                }
                .calendarTableWrapper {
                    padding-inline: ${spacers.dp4};
                }
                .calendarTable th {
                    padding: 8px 8px;
                    background: none;
                    font-size: 0.85em;
                }
                .calendarTable td {
                    width: ${cellSize};
                    height: 100%;
                    height: ${cellSize};
                    text-align: center;
                }
                .calendarTable th,
                .calendarTable td,
                .calendarTable tr {
                    border: 0;
                }
                .calendarTable td span {
                    display: inline-flex;
                    padding: 2px 2px;
                    justify-content: center;
                    border: 2px solid transparent;
                    min-width: 16px;
                }
                .selectedDate {
                    width: ${width};
                    padding: 4px 8px;
                }
                .selectedDate span {
                    justify-content: center;
                    font-size: 0.8em;
                }
                .label {
                    display: flex;
                    padding: 4px 8px;
                    justify-content: center;
                    min-height: 16px;
                }
                button {
                    background: none;
                    border: 0;
                }

                button[name='day'] {
                    overflow: hidden;
                    width: ${cellSize};
                    height: ${cellSize};
                    border: 2px solid transparent;
                    border-radius: 3px;
                    background: none;
                    margin: ${spacers.dp2};
                    color: ${colors.grey900};
                }

                button[name='day']:hover {
                    background-color: ${styleOptions.dayHoverBackgroundColor};
                    text-decoration: underline;
                }
                button[name='day'].isSelected {
                    background-color: ${styleOptions.selectedDayBackgroundColor};
                    color: white;
                }
                button.isToday {
                    text-decoration: underline;
                }
                button.otherMonth {
                    color: ${colors.grey600};
                }
            `}</style>
        </div>
    )
}

Calendar.defaultProps = {
    locale: 'en-GB',
    numberingSystem: 'latn',
    timeZone: Intl?.DateTimeFormat?.().resolvedOptions?.()?.timeZone || 'UTC',
    cellSize: '32px',
    width: '240px',
    weekDayFormat: 'narrow',
}

export const CalendarProps = {
    calendar: PropTypes.any.isRequired,
    locale: PropTypes.string.isRequired,
    cellSize: PropTypes.string,
    date: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    numberingSystem: PropTypes.string,
    timeZone: PropTypes.string,
    weekDayFormat: PropTypes.string,
    width: PropTypes.string,
    onDateSelect: PropTypes.func,
}

Calendar.propTypes = CalendarProps
