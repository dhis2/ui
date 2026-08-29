import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface CalendarTableDaysHeaderProps {
    weekDayLabels?: string[]
}

export const CalendarTableDaysHeader = ({
    weekDayLabels,
}: CalendarTableDaysHeaderProps) => {
    const dayNamesColor = colors.grey700
    const labelledWeekdays = weekDayLabels?.map((label, index) => ({
        key: `weekday-${index}`,
        label,
    }))

    return (
        <>
            <thead>
                <tr>
                    {labelledWeekdays?.map(({ key, label }) => (
                        <th scope="col" key={key}>
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
