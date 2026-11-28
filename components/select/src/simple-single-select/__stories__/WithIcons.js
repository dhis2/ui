import {
    IconCalendar16,
    IconClock16,
    IconHome16,
    IconLocation16,
} from '@dhis2/ui-icons'
import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'

const optionsWithIcons = [
    { label: 'Home', value: 'home', icon: <IconHome16 /> },
    { label: 'Calendar', value: 'calendar', icon: <IconCalendar16 /> },
    { label: 'Clock', value: 'clock', icon: <IconClock16 /> },
    { label: 'Location', value: 'location', icon: <IconLocation16 /> },
    { label: 'Without icon', value: 'without_icon' },
]

export const WithIcons = () => {
    const [selected, setSelected] = useState(optionsWithIcons[1])

    return (
        <SimpleSingleSelect
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={optionsWithIcons}
        />
    )
}
