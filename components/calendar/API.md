### Calendar

#### Usage

To use `Calendar`, you can import the component from the `@dhis2/ui` library  


```js
import { Calendar } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|calendar|any||*|the calendar to use such gregory, ethiopic, nepali - full supported list here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/calendars.ts|
|onDateSelect|function||*|Called with signature `(null)` \|\| `({ dateCalendarString: string, dateCalendar: Temporal.ZonedDateTime })` with `dateCalendarString` being the stringified date in the specified calendar in the format `yyyy-MM-dd`|
|cellSize|string|`'32px'`||the size of a single cell in the table forming the calendar|
|date|string|||the currently selected date using an iso-like format YYYY-MM-DD, in the calendar system provided (not iso8601)|
|dir|'ltr' │ 'rtl'|||the direction of the library - internally the library will use rtl for rtl-languages but this can be overridden here for more control|
|locale|string|||any valid locale -  if none provided, the internal library will fallback to the user locale (more info here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/hooks/internal/useResolvedLocaleOptions.ts#L15)|
|numberingSystem|string|||numbering system to use - full list here https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/numberingSystems.ts|
|timeZone|string|||the timeZone to use|
|weekDayFormat|'narrow' │ 'short' │ 'long'|`'narrow'`||the format to display for the week day, i.e. Monday (long), Mon (short), M (narrow)|
|width|string|`'240px'`||the width of the calendar component|

### CalendarInput

#### Usage

To use `CalendarInput`, you can import the component from the `@dhis2/ui` library  


```js
import { CalendarInput } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|calendar|any||*|the calendar to use such gregory, ethiopic, nepali - full supported list here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/calendars.ts|
|onDateSelect|function||*|Called with signature `(null)` \|\| `({ dateCalendarString: string, dateCalendar: Temporal.ZonedDateTime })` with `dateCalendarString` being the stringified date in the specified calendar in the format `yyyy-MM-dd`|
|cellSize|string|`'32px'`||the size of a single cell in the table forming the calendar|
|clearable|boolean|||Whether the clear button is displayed|
|dataTest|string|`'dhis2-uiwidgets-calendar-inputfield'`||'data-test' attribute of `InputField` component|
|date|string|||the currently selected date using an iso-like format YYYY-MM-DD, in the calendar system provided (not iso8601)|
|dir|'ltr' │ 'rtl'|||the direction of the library - internally the library will use rtl for rtl-languages but this can be overridden here for more control|
|format|'YYYY-MM-DD' │ 'DD-MM-YYYY'|||The date format to use either `YYYY-MM-DD` or `DD-MM-YYYY`|
|inputWidth|string|||the width of input field|
|locale|string|||any valid locale -  if none provided, the internal library will fallback to the user locale (more info here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/hooks/internal/useResolvedLocaleOptions.ts#L15)|
|maxDate|string|||The maximum selectable date|
|minDate|string|||The minimum selectable date|
|numberingSystem|string|||numbering system to use - full list here https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/numberingSystems.ts|
|strictValidation|boolean|||Whether to use strict validation by showing errors for out-of-range dates when enabled (default), and warnings when disabled|
|weekDayFormat|'narrow' │ 'short' │ 'long'|`'narrow'`||the format to display for the week day, i.e. Monday (long), Mon (short), M (narrow)|
|width|string|`'300px'`||the width of the calendar component|
