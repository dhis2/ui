---
title: Calendar Input
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/calendar/API.md'

# Calendar Input

This is an Input wrapper around [calendar](./calendar) to display an input that shows the calendar when in focus.

## Demo

Below you'll find a customizable demo of the CalendarInput component. Click "show full demo" to see this and other components.

<Demo
    path="/story/calendarinput--gregorian-with-english"
    height="350px"
/>

The Gregorian with initial date is then generated with this code.

```jsx
<CalendarInput
    label="Gregorian date (with initial date)"
    calendar="gregory"
    locale="en-GB"
    date="2021-10-13"
    onDateSelect={handelDateChange}
/>
```

## API Reference

The component takes the same props as [the calendar](./calendar) component, as well as the props for [InputField](./inputfield) that are relevant to an input of type `text`.

It adds one property `clearable` which is a boolean. If set to true, it adds a clear button to delete the selected date.

## Links

-   [Calendar](./calendar)
