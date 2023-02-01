import PropTypes from 'prop-types'
import React from 'react'
import { StyleOptionsProps } from './calendar-prop-types.js'

export const CalendarTableDaysHeader = ({ weekDayLabels, styleOptions }) => {
    return (
        <>
            <thead>
                <tr>
                    {weekDayLabels.map((label, i) => (
                        <th scope="col" key={`weekday-${i}`}>
                            {label}
                        </th>
                    ))}
                </tr>
            </thead>
            <style jsx>{`
                th {
                    color: ${styleOptions.dayNamesColor};
                    font-weight: 300;
                    font-style: normal;

                    padding: 8px 8px;
                    background: none;
                    font-size: 0.85em;
                    border: 0;
                }
            `}</style>
        </>
    )
}

CalendarTableDaysHeader.propTypes = {
    styleOptions: StyleOptionsProps,
    weekDayLabels: PropTypes.arrayOf(PropTypes.string),
}
