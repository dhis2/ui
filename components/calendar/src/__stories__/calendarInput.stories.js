import React from 'react'
import { CalendarInput } from '../calendarInput.js'
import { CalendarStoryWrapper } from './calendarStoryWrapper.js'

const subtitle = `[Experimental] Calendar Input is a wrapper around Calendar displaying an input that triggers the calendar`
const description = `
Use a CalendarInput where there is a need to let the user input a date.

Note that it requires a parent, like [Box](../?path=/docs/layout-box--default), to define its size.

\`\`\`js
import { CalendarInput } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'CalendarInput',
    component: CalendarInput,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
}

export const Ethiopic = (args) => {
    return (
        <CalendarStoryWrapper
            calendarInput
            calendar="ethiopic"
            locale="am-et"
            numberingSystem="ethi"
            timeZone="Africa/Khartoum"
            {...args}
        />
    )
}
export const Nepali = (args) => {
    return (
        <CalendarStoryWrapper
            calendarInput
            calendar="nepali"
            locale="en-NP"
            timeZone="Africa/Khartoum"
            {...args}
        />
    )
}

export const WithAnyCalendar = (args) => {
    return (
        <CalendarStoryWrapper
            calendarInput
            calendar="gregory"
            locale="en"
            timeZone="Africa/Khartoum"
            {...args}
        />
    )
}
