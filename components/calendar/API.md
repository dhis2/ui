### Calendar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Calendar } from '@dhis2-ui/calendar'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|calendar|any||*|the calendar to use such gregory, ethiopic, nepali - full supported list here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/calendars.ts|
|cellSize|string|`'32px'`||the size of a single cell in the table forming the calendar|
|date|string|||the currently selected date using an iso-like format YYYY-MM-DD, in the calendar system provided (not iso8601)|
|dir|'ltr' │ 'rtl'|||the direction of the library - internally the library will use rtl for rtl-languages but this can be overridden here for more control|
|locale|string|||any valid locale -  if none provided, the internal library will fallback to the user locale (more info here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/hooks/internal/useResolvedLocaleOptions.ts#L15)|
|numberingSystem|string|||numbering system to use - full list here https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/numberingSystems.ts|
|timeZone|string|||the timeZone to use|
|weekDayFormat|'narrow' │ 'short' │ 'long'|`'narrow'`||the format to display for the week day, i.e. Monday (long), Mon (short), M (narrow)|
|width|string|`'240px'`||the width of the calendar component|
|onDateSelect|function|||Called with signature `(null)` \|\| `({ dateCalendarString: string, dateCalendar: Temporal.ZonedDateTime })` with `dateCalendarString` being the stringified date in the specified calendar in the format `yyyy-MM-dd`|
