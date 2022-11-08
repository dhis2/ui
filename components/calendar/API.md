### Calendar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Calendar } from '@dhis2-ui/calendar'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|calendar|any||*||
|locale|string|`'en-GB'`|||
|date|string||| isoDate in the format `yyyy-MM-dd`|
|dir|'ltr' │ 'rtl'||| this will also be inferred from the locale (for example, Arabic will be rtl by default if no dir is passed)|
|numberingSystem|string|`'latn'`|||
|styleOptions|`{ "backgroundColor": "string", "cellSize": "string", "chevronColor": "string", "dayHoverBackgroundColor": "string", "dayNamesColor": "string", "headerBackground": "string", "selectedDayBackgroundColor": "string", "width": "string", "wrapperBorderColor": "string"}`|`{ backgroundColor: "none", cellSize: "32px", chevronColor: colors.grey600, dayHoverBackgroundColor: colors.grey200, dayNamesColor: colors.grey700, headerBackground: colors.grey050, selectedDayBackgroundColor: colors.teal700, width: "240px", wrapperBorderColor: colors.grey300}`|||
|timeZone|string|`Intl?.DateTimeFormat?.().resolvedOptions?.()?.timeZone` or `UTC` (if no user timezone found)|||
|weekDayFormat|string|`'narrow'`|||
|onDateSelect|function||||
