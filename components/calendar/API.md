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
|cellSize|string|`'32px'`|||
|date|string||||
|dir|'ltr' │ 'rtl'||||
|numberingSystem|string|`'latn'`|||
|timeZone|string|`Intl?.DateTimeFormat?.().resolvedOptions?.()?.timeZone || 'UTC'`|||
|weekDayFormat|string|`'narrow'`|||
|width|string|`'240px'`|||
|onDateSelect|function||||

### CalendarInput

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { CalendarInput } from '@dhis2-ui/calendar'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|autoComplete|string|||The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete)|
|className|string||||
|dataTest|string||||
|dense|boolean|||Makes the input smaller|
|disabled|boolean|||Disables the input|
|error|custom|||Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props|
|helpText|string|||Guiding text for how to use this input|
|initialFocus|boolean|||The input grabs initial focus on the page|
|inputWidth|string|||Defines the width of the input. Can be any valid CSS measurement|
|label|string|||Label text for the input|
|loading|boolean|||Adds a loading indicator beside the input|
|max|string|||The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max), for use when `type` is `'number'`|
|min|string|||The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min), for use when `type` is `'number'`|
|name|string|||Name associated with the input. Passed to event handler callbacks in object|
|placeholder|string|||Placeholder text for the input|
|readOnly|boolean|||Makes the input read-only|
|required|boolean|||Indicates this input is required|
|step|string|||The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'`|
|tabIndex|string||||
|type|custom|||Type of input|
|valid|custom|||Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props|
|validationText|string|||Text below input for validation feedback. Receives styles depending on validation status|
|value|string|||Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object|
|warning|custom|||Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props|
|onBlur|function|||Called with signature `({ name: string, value: string }, event)`|
|onChange|function|||Called with signature `({ name: string, value: string }, event)`|
|onFocus|function|||Called with signature `({ name: string, value: string }, event)`|
|onKeyDown|function|||Called with signature `({ name: string, value: string }, event)`|
