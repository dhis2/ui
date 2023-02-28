import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { CalendarTableCell } from './calendar-table-cell.js'
import { CalendarTableDaysHeader } from './calendar-table-days-header.js'

export const CalendarTable = ({
    weekDayLabels,
    calendarWeekDays,
    width,
    cellSize,
    selectedDate,
}) => (
    <div className="calendar-table-wrapper">
        <table className="calendar-table">
            <CalendarTableDaysHeader weekDayLabels={weekDayLabels} />
            <tbody>
                {calendarWeekDays.map((week, weekIndex) => (
                    <tr key={`week-${weekIndex + 1}`}>
                        {week.map((day) => (
                            <CalendarTableCell
                                selectedDate={selectedDate}
                                day={day}
                                key={day?.calendarDate}
                                cellSize={cellSize}
                                width={width}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <style jsx>{`
            .calendar-table {
                border: none;
                border-collapse: collapse;
                width: 100%;
                margin-block: ${spacers.dp4};
            }
            .calendar-table tr,
            .calendar-table td {
                border: none;
            }
            .calendar-table-wrapper {
                padding-inline: ${spacers.dp4};
            }
        `}</style>
    </div>
)

CalendarTable.propTypes = {
    calendarWeekDays: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                calendarDate: PropTypes.string,
                isInCurrentMonth: PropTypes.bool,
                isSelected: PropTypes.bool,
                isToday: PropTypes.bool,
                label: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                ]),
                zdt: PropTypes.object,
                onClick: PropTypes.func,
            }).isRequired
        ).isRequired
    ).isRequired,
    cellSize: PropTypes.string,
    selectedDate: PropTypes.string,
    weekDayLabels: PropTypes.arrayOf(PropTypes.string),
    width: PropTypes.string,
}
