import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { StyleOptionsProps } from './calendar-prop-types.js'

export const CalendarTableCell = ({ day, cellSize, width, styleOptions }) => {
    return (
        <>
            <td data-test={day?.calendarDate} onClick={day.onClick}>
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
            <style jsx>{`
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
        </>
    )
}

CalendarTableCell.propTypes = {
    cellSize: PropTypes.string,
    day: PropTypes.shape({
        calendarDate: PropTypes.string,
        isInCurrentMonth: PropTypes.bool,
        isSelected: PropTypes.bool,
        isToday: PropTypes.bool,
        label: PropTypes.string,
        onClick: PropTypes.func,
    }),
    styleOptions: StyleOptionsProps,
    width: PropTypes.string,
}
