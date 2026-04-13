import { spacers } from '@dhis2/ui-constants'
import React from 'react'
import type { CalendarDay } from './calendar-table-cell.tsx'
import { CalendarTableCell } from './calendar-table-cell.tsx'
import { CalendarTableDaysHeader } from './calendar-table-days-header.tsx'

export interface CalendarTableProps {
    calendarWeekDays: CalendarDay[][]
    cellSize?: string
    selectedDate?: string
    weekDayLabels?: string[]
}

export const CalendarTable = ({
    weekDayLabels,
    calendarWeekDays,
    cellSize,
    selectedDate,
}: CalendarTableProps) => (
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
                                key={day?.dateValue}
                                cellSize={cellSize}
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
                margin-block: 0 ${spacers.dp4};
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
