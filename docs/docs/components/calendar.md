---
title: Calendar
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import API from '../../../components/calendar/API.md'

# Calendar

The Calendar is a component to display a calendar to pick a day in multiple calendar systems, such as: Gregorian, Ethiopic, Nepali and many other calendrical systems.

The component is built on top of [multi-calendar-dates](https://github.com/dhis2/multi-calendar-dates/tree/beta) which is an internal library to abstract date-related operations (i.e. calendars, period selectors, date math etc..). The library itself relies on the [Temporal proposal](https://tc39.es/proposal-temporal/#sec-temporal-intro). The proposal (currently at Stage 3 draft) aims to improve built-in support for dates and times in browsers, addressing challenges such as support for timezones, DST-safe artithemtic, string serialization and interoperability via standardized formats, and full support for non-Gregorian calendars.

Here are some sample calendars built with this UI component. Check [StoryBook]((https://ui.dhis2.nu/demo/?path=/story/calendar--with-ethiopic) to play with all the options available for building a Calendar.

## Ethiopic calendar

Ethiopic calendar with narrow day names, short day names and localised to English.

### Narrow day names

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

## Nepali calendar

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

## Gregorian calendar

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

## Other calendars

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

## Usage

### When to use

To display a calendar for the user to pick a day in any supported calendar system, localised to any of the 90+ languages supported by [The Unicode Common Locale Data Repository (CLDR)](https://cldr.unicode.org/index) supported natively in all modern browsers. Supported DHIS2 calendars are: `iso8601` (i.e. the Gregorian calendar common in most of the world),`ethiopic`, `nepali` (custom implementation).

### When not to use

-   This is just a Day Picker (for now). It does not allow picking periods, date ranges, or date with times.

## API Reference

<API />

## Links

-   [Design document](https://docs.google.com/document/d/19zjyB45oBbqC5KeubaU8E7cw9fGhFc3tOXY0GkzZKqc/edit#)
-   [ADR for decision to use Temporal API](https://github.com/dhis2/multi-calendar-dates/blob/beta/doc/architecture/decisions/0002-use-temporal-api-as-the-backbone-for-the-engine.md)
-   [multi-calendar-dates](https://github.com/dhis2/multi-calendar-dates) is the library that this component is built on top of.
-   [Temporal API standard propsal](https://tc39.es/proposal-temporal/): the standard powering the multi-calendar-dates library
