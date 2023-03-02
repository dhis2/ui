import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const CalendarTableDaysHeader = ({ weekDayLabels }) => {
    const dayNamesColor = colors.grey700

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
                    color: ${dayNamesColor};
                    font-weight: 300;
                    font-style: normal;
                    padding: 8px 8px;
                    background: none;
                    font-size: 0.85em;
                    border: none;
                    cursor: default;
                }
                tr {
                    border: none;
                }
            `}</style>
        </>
    )
}

CalendarTableDaysHeader.propTypes = {
    weekDayLabels: PropTypes.arrayOf(PropTypes.string),
}
