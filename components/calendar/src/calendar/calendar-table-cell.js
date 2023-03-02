import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export const CalendarTableCell = ({ day, cellSize, selectedDate }) => {
    const dayHoverBackgroundColor = colors.grey200
    const selectedDayBackgroundColor = colors.teal700

    return (
        <td data-test={day?.calendarDate} onClick={day.onClick}>
            <button
                name="day"
                className={cx('day', {
                    isSelected: selectedDate === day?.calendarDate,
                    isToday: day.isToday,
                    otherMonth: !day.isInCurrentMonth,
                })}
            >
                {day.label}
            </button>
            <style jsx>{`
                td {
                    width: ${cellSize};
                    height: 100%;
                    height: ${cellSize};
                    text-align: center;
                    border: 2px solid transparent;
                    padding: 0;
                }
                td span {
                    display: inline-flex;
                    padding: 2px 2px;
                    justify-content: center;
                    border: 2px solid transparent;
                    min-width: 16px;
                }
                button {
                    border: 0;
                    overflow: hidden;
                    width: ${cellSize};
                    height: ${cellSize};
                    border: 2px solid transparent;
                    border-radius: 3px;
                    background: none;
                    color: ${colors.grey900};
                }
                button:hover {
                    background-color: ${dayHoverBackgroundColor};
                    text-decoration: underline;
                }
                button.isSelected,
                button.otherMonth.isSelected {
                    background-color: ${selectedDayBackgroundColor};
                    color: white;
                }
                button.isToday {
                    position: relative;
                }
                button.isToday::after {
                    content: '';
                    position: absolute;
                    transform: translateX(-50%);
                    height: 4px;
                    width: 4px;
                    bottom: 2px;
                    left: 50%;
                    border-radius: 100%;
                    background-color: ${colors.teal600};
                }
                button.isSelected.isToday::after {
                    background-color: ${colors.teal200};
                }
                button.otherMonth {
                    color: ${colors.grey600};
                }
            `}</style>
        </td>
    )
}

CalendarTableCell.propTypes = {
    cellSize: PropTypes.string,
    day: PropTypes.shape({
        calendarDate: PropTypes.string,
        isInCurrentMonth: PropTypes.bool,
        isSelected: PropTypes.bool,
        isToday: PropTypes.bool,
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onClick: PropTypes.func,
    }),
    selectedDate: PropTypes.string,
}
