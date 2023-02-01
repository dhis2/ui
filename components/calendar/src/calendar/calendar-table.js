import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { StyleOptionsProps } from './calendar-prop-types.js'
import { CalendarTableCell } from './calendar-table-cell.js'
import { CalendarTableDaysHeader } from './calendar-table-days-header.js'

export const CalendarTable = ({
    weekDayLabels,
    calendarWeekDays,
    styleOptions,
    width,
    cellSize,
}) => {
    return (
        <>
            <div className="calendarTableWrapper">
                <table className="calendarTable">
                    <CalendarTableDaysHeader
                        weekDayLabels={weekDayLabels}
                        styleOptions={styleOptions}
                    />
                    <tbody>
                        {calendarWeekDays.map((week, weekIndex) => (
                            <tr key={`week-${weekIndex + 1}`}>
                                {week.map((day) => (
                                    <CalendarTableCell
                                        day={day}
                                        key={day?.calendarDate}
                                        styleOptions={styleOptions}
                                        cellSize={cellSize}
                                        width={width}
                                    />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                .calendarTable {
                    border: none;
                    border-collapse: collapse;
                    width: 100%;
                    margin-block: ${spacers.dp4};
                }
                .calendarTableWrapper {
                    padding-inline: ${spacers.dp4};
                }
            `}</style>
        </>
    )
}

CalendarTable.propTypes = {
    calendarWeekDays: PropTypes.string,
    cellSize: PropTypes.string,
    styleOptions: StyleOptionsProps,
    weekDayLabels: PropTypes.arrayOf(PropTypes.string),
    width: PropTypes.string,
}
