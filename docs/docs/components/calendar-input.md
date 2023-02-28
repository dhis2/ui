---
title: Calendar Input
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { CalendarDemo } from '@site/src/components/CalendarDemo.jsx'
import { Box, CalendarInput } from '@dhis2/ui'

import API from '../../../components/calendar/API.md'

# Calendar Input

This is an Input wrapper around [calendar](./calendar) to display an input that shows the calendar when in focus.

## Demo

Ethiopic calendar (with narrow day names, short day names and localised to English)

<Demo>
    <div className="wrapper">
        <div>
                <CalendarDemo
                        label="Gregorian date (with initial date)"
                        component={CalendarInput}
                        calendar="gregory"
                        locale="en-GB"
                        date="2021-10-13"
                />
        </div>
        <div>
                <CalendarDemo
                        label="Pick a Gregorian date"
                        component={CalendarInput}
                        calendar="gregory"
                />
        </div>
        <div>
                <CalendarDemo
                        label="Pick a Gregorian date (clearable)"
                        component={CalendarInput}
                        calendar="gregory"
                        locale="en-GB"
                        clearable
                />
        </div>
        <div>
                <CalendarDemo
                        label="Pick an Ethiopic date"
                        date="2014-02-03"
                        component={CalendarInput}
                        calendar="ethiopic"
                        locale="en-GB"
                        clearable
                />
        </div>
        <div>
                <CalendarDemo
                        label="Pick an Ethiopic date (not passing date)"
                        component={CalendarInput}
                        calendar="ethiopic"
                        locale="en-GB"
                        clearable
                />
        </div>
        <div>
                <CalendarDemo
                        label="Pick an Ethiopic date (amharic)"
                        component={CalendarInput}
                        calendar="ethiopic"
                        locale="am-ET"
                        clearable
                />
        </div>
        <div>
                <CalendarDemo
                        label="Pick a Nepali date (with date)"
                        component={CalendarInput}
                        calendar="nepali"
                        locale="en-NP"
                        date="2078-06-27"
                        clearable
                />
        </div>
        <div>
                <CalendarDemo
                        label="Pick a Nepali date (english)"
                        component={CalendarInput}
                        calendar="nepali"
                        locale="en-NP"
                        clearable
                />
        </div>
        <div>
                <CalendarDemo
                        label="Pick a Nepali date (nepali)"
                        component={CalendarInput}
                        calendar="nepali"
                        locale="ne-NP"
                        clearable
                />
        </div>
    </div>
    <style jsx>{`
        .wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            overflow-x: scroll;
            justify-content: space-around;
        }
        .wrapper > div {
                /* min-width: 240px */
        }
    `}
    </style>
</Demo>

## API Reference

The component takes the same props as [the calendar](./calendar) component, as well as the props for [InputField](./inputfield) that are relevant to an input of type `text`.

It adds one property `clearable` which is a boolean. If set to true, it adds a clear button to delete the selected date.

## Links

-   [Calendar](./calendar)
