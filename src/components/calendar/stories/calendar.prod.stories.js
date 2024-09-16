import React from 'react'
import { Calendar } from '../calendar/calendar.js'
import { CalendarStoryWrapper } from './calendar-story-wrapper.js'

const subtitle = `[Experimental] Calendar component is useful for creating a variety of calendars including Ethiopic, Islamic etc..`
const description = `
Use a Calendar where there is a need to let the user select a date.

Note that it requires a parent, like [Box](../?path=/docs/layout-box--default), to define its size.

\`\`\`js
import { Calendar } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Calendar',
    component: Calendar,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
}

export const Ethiopic = (args) => {
    return (
        <CalendarStoryWrapper
            calendar="ethiopic"
            locale="am-et"
            numberingSystem="ethi"
            date="2014-04-05" // 13th of October 2022
            timeZone="Africa/Khartoum"
            {...args}
        />
    )
}

export const Nepali = (args) => {
    return (
        <CalendarStoryWrapper
            calendar="nepali"
            locale="ne-NP"
            date="2079-06-29" // 13th of October 2022
            timeZone="Africa/Khartoum"
            {...args}
        />
    )
}

export const WithAnyCalendar = (args) => {
    return <CalendarStoryWrapper calendar="gregory" locale="en-GB" {...args} />
}
