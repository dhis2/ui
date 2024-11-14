---
title: Calendar Input
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/calendar/API.md'

## Calendar Input

The CalendarInput is an input field with an integrated calendar picker. It combines the functionality of the [Calendar](./calendar#calendar) component with an input field, allowing users to either type a date or select one from the calendar picker.

### Demo

Below you'll find a customizable demo of the CalendarInput component. Click "show full demo" to see this and other components.

<Demo
    path="calendarinput--gregorian-with-english"
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

### MinDate and MaxDate

This demo shows how to set minimum and maximum allowed dates.

<Demo
    path="/story/calendarinput--with-min-max-date"
    height="350px"
/>

```jsx
<CalendarInput
    label="Date with min and max"
    calendar="gregory"
    locale="en-GB"
    date="2023-06-15"
    minDate="2023-06-01"
    maxDate="2023-06-30"
    onDateSelect={handleDateChange}
/>
```

### StrictValidation

This demo demonstrates the use of strict validation for date input.

-   When `strictValidation` is set to `true` (default behavior):
    The component displays error indicators if a user selects or inputs a date outside the specified minimum and maximum date range.

-   When `strictValidation` is `false`:
    The component shows warning indicators for dates outside the allowed range.

<Demo
    path="/story/calendarinput--with-strict-validation"
    height="350px"
/>

```jsx
<CalendarInput
    label="Date with strict validation"
    calendar="gregory"
    locale="en-GB"
    strictValidation={true}
    onDateSelect={handleDateChange}
/>
```

### Format

This demo illustrates how to use the format prop to specify the date string format
The format prop accepts two possible values:

-   'YYYY-MM-DD' (default): Year-Month-Day format
-   'DD-MM-YYYY': Day-Month-Year format

<Demo
    path="/story/calendarinput--with-custom-format"
    height="350px"
/>

```jsx
<CalendarInput
    label="Date with custom format"
    calendar="gregory"
    locale="en-GB"
    format="DD/MM/YYYY"
    onDateSelect={handleDateChange}
/>
```

### Clearable

This demo showcases the use of the `clearable` prop, which adds a button to clear the selected date.

<Demo
 path="/story/calendarinput--with-clearable-button"
 height="350px"
/>

```jsx
<CalendarInput
    label="Date with clear button"
    calendar="gregory"
    locale="en-GB"
    date="2023-09-25"
    clearable={true}
    onDateSelect={handleDateChange}
/>
```

### Usage

#### When to use

Use the CalendarInput component when you need to:

-   Provide users with a flexible method to select a specific date, offering both manual text input and visual calendar picker.
-   Implement date selection with validation, including min/max dates validation and format validation.
-   Provide users with an easy way to clear a selected date.

#### When not to use

-   This is just a Day Picker (for now). It does not allow picking periods, date ranges, or date with times.

## Calendar

The Calendar is a component to display a calendar to pick a day in multiple calendar systems, such as: Gregorian, Ethiopic, Nepali and many other calendrical systems.

The component is built on top of [multi-calendar-dates](https://github.com/dhis2/multi-calendar-dates/tree/beta) which is an internal library to abstract date-related operations (i.e. calendars, period selectors, date math etc..). The library itself relies on the [Temporal proposal](https://tc39.es/proposal-temporal/#sec-temporal-intro). The proposal (currently at Stage 3 draft) aims to improve built-in support for dates and times in browsers, addressing challenges such as support for timezones, DST-safe artithemtic, string serialization and interoperability via standardized formats, and full support for non-Gregorian calendars.

Here are some sample calendars built with this UI component. Check [StoryBook](https://ui.dhis2.nu/demo/?path=/story/calendar--ethiopic) to play with all the options available for building a Calendar.

### Ethiopic calendar

Ethiopic calendar with narrow day names, short day names and localised to English.

#### Narrow day names

<Demo
    path="calendar--basic"
    args="calendar:ethiopic;weekDayFormat:narrow;locale:am-ET;numberingSystem:ethi"
    height="350px"
/>

To display the calendar with short day names, use the codeblock below. For the narrow day names remove the `weekDayFormat` prop. For the English locale, use the `en` locale and the short `weekDayFormat`.

```jsx
<Calendar
    calendar="ethiopic"
    locale="am-ET"
    numberingSystem="ethi"
    timeZone="Europe/London"
    weekDayFormat="narrow"
/>
```

### Nepali calendar

:::note
Nepali is a custom calendar not natively implemented in Temporal and Nepali locale is not natively supported by browsers' Internationalization standard. We are providing a custom implementation for the calendar, as well as the localised values. The only two locales allowed are: `ne-NP` (nepali) and `en-NP` (nepali transliterated in latin characters).
:::

Nepali calendar with Napali characters.

<Demo
    path="calendar--basic"
    args="calendar:nepali;locale:ne-NP"
    height="350px"
/>

```jsx
// Napali
<Calendar calendar="nepali" locale="ne-NP" timeZone="Europe/London" />
```

Nepali calendar transliterated into latin characters.
<Demo
    path="calendar--basic"
    args="calendar:nepali;locale:en-NP"
    height="350px"
/>

```jsx
// Nepali transliterated in latin characters
<Calendar
    calendar="nepali"
    locale="en-NP"
    timeZone="Europe/London"
    weekDayFormat="short"
/>
```

### Gregorian calendar

Gregorian calendar localised in English, Arabic (Tunisia), Arabic (Sudan), Arabic (Iraq) and Amharic.

<Tabs lazy>
    <TabItem value="English" label="English">
        <Demo
            path="calendar--basic"
            args="calendar:gregori;locale:en"
            height="350px"
        />
    </TabItem>
    <TabItem value="Arabic (Tunisia)" label="Arabic (Tunisia)">
        <Demo
            path="calendar--basic"
            args="calendar:gregori;locale:ar-TN"
            height="350px"
        />
    </TabItem>
    <TabItem value="Arabic (Sudan)" label="Arabic (Sudan)">
        <Demo
            path="calendar--basic"
            args="calendar:gregori;locale:ar-SD"
            height="350px"
        />
    </TabItem>
    <TabItem value="Arabic (Iraq)" label="Arabic (Iraq)">
        <Demo
            path="calendar--basic"
            args="calendar:gregori;locale:ar-IQ"
            height="350px"
        />
    </TabItem>
    <TabItem value="Amharic" label="Amharic">
        <Demo
            path="calendar--basic"
            args="calendar:gregori;locale:am-ET"
            height="350px"
        />
    </TabItem>
</Tabs>

To display the calendar with a specific locale, use the codeblock below. Adjust the locale to the desired language.

```jsx
<Calendar calendar="iso8601" locale="en" timeZone="Europe/London" />
```

### Other calendars

Some other calendars: Islamic in Arabic, Indian in English and Persian in Farsi

<Tabs>
    <TabItem value="Islamic in Arabic" label="Islamic in Arabic">
        <Demo
            path="calendar--basic"
            args="calendar:islamic-civil;locale:ar"
            height="350px"
        />
    </TabItem>
    <TabItem value="Indian in English" label="Indian in English">
        <Demo
            path="calendar--basic"
            args="calendar:indian;locale:en;weekDayFormat:short"
            height="350px"
        />
    </TabItem>
    <TabItem value="Persian in Farsi" label="Persian in Farsi">
        <Demo
            path="calendar--basic"
            args="calendar:persian;locale:fa;weekDayFormat:short"
            height="350px"
        />
    </TabItem>
</Tabs>

Each of the calendars above can be displayed with the following code.

```jsx
<Calendar calendar="islamic-civil" locale="ar" timeZone="Europe/London" />
```

:::note
Additionally the component supports a number of other calendars that are not currently used in DHIS2, since they're implemented in the [Temporal API](https://tc39.es/proposal-temporal/)). These other calendars are: `hebrew`, `islamic`, `islamic-umalqura`, `islamic-tbla`, `islamic-civil`, `islamic-rgsa`, `persian`, `ethioaa`, `coptic`, `chinese`, `dangi`, `roc`, `indian`, `buddhist`, `japanese`.
:::

### Usage

#### When to use

To display a calendar for the user to pick a day in any supported calendar system, localised to any of the 90+ languages supported by [The Unicode Common Locale Data Repository (CLDR)](https://cldr.unicode.org/index) supported natively in all modern browsers. Supported DHIS2 calendars are: `iso8601` (i.e. the Gregorian calendar common in most of the world),`ethiopic`, `nepali` (custom implementation).

#### When not to use

-   This is just a Day Picker (for now). It does not allow picking periods, date ranges, or date with times.

## API Reference

The calendar input takes the same props as [the calendar](./calendar#calendar) component, as well as the props for [InputField](./inputfield) that are relevant to an input of type `text`.

It adds one property `clearable` which is a boolean. If set to true, it adds a clear button to delete the selected date.

<API />

## Links

-   <a href="/demo/?path=/story/calendar--basic" target="_blank">Calendar Input Demo</a>
-   <a href="/demo/?path=/story/calendarinput--calendar-with-editiable-input" target="_blank">Calendar Demo</a>
-   [Design document](https://docs.google.com/document/d/19zjyB45oBbqC5KeubaU8E7cw9fGhFc3tOXY0GkzZKqc/edit#)
-   [ADR for decision to use Temporal API](https://github.com/dhis2/multi-calendar-dates/blob/beta/doc/architecture/decisions/0002-use-temporal-api-as-the-backbone-for-the-engine.md)
-   [multi-calendar-dates](https://github.com/dhis2/multi-calendar-dates) is the library that this component is built on top of.
-   [Temporal API standard propsal](https://tc39.es/proposal-temporal/): the standard powering the multi-calendar-dates library
