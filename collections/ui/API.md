### AlertBar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { AlertBar } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|actions|custom|||An array of 0-2 action objects|
|children|string|||The message string for the alert|
|className|string||||
|critical|custom|||Alert bars with `critical` will not autohide|
|dataTest|string|`'dhis2-uicore-alertbar'`|||
|duration|number|`8000`|||
|hidden|boolean||||
|icon|custom|`true`||A specific icon to override the default icon in the bar.<br/>If `false` is provided, no icon will be shown.|
|permanent|boolean||||
|success|custom||||
|warning|custom|||Alert bars with `warning` will not autohide|
|onHidden|function||||

### AlertStack

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { AlertStack } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-alertstack'`|||

### Box

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Box } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-box'`|||
|height|string||||
|marginTop|string||||
|maxHeight|string||||
|maxWidth|string||||
|minHeight|string||||
|minWidth|string||||
|overflow|string||||
|width|string||||

### Button

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Button } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Component to render inside the button|
|className|string|||A className that will be passed to the `<button>` element|
|dataTest|string|`'dhis2-uicore-button'`||A string that will be applied as a `data-test` attribute on the button element<br/>for identification during testing|
|destructive|custom|||Indicates that the button makes potentially dangerous<br/>deletions or data changes.<br/>Mutually exclusive with `primary` and `secondary` props|
|disabled|boolean|||Applies a greyed-out appearance and makes the button non-interactive|
|icon|element|||An icon element to display inside the button|
|initialFocus|boolean|||Use this variant to capture the initial focus on the page.|
|large|custom|||Makes the button large. Mutually exclusive with `small`|
|loading|boolean|||Sets the button into a loading state|
|name|string|||Sets `name` attribute on button element.<br/>Gets passed as part of the first argument to callbacks (see `onClick`).|
|primary|custom|||Applies 'primary' button appearance.<br/>Mutually exclusive with `destructive` and `secondary` props|
|secondary|custom|||Applies 'secondary' button appearance.<br/>Mutually exclusive with `primary` and `destructive` props|
|small|custom|||Makes the button small. Mutually exclusive with `large` prop|
|tabIndex|string|||Tab index for focusing the button with a keyboard|
|toggled|boolean|||Changes appearance of button to an on/off state|
|type|'submit' │ 'reset' │ 'button'|`'button'`||Sets `type` attribute on `<button>` element|
|value|string|||Value associated with the button.<br/>Gets passed as part of the first argument to callbacks (see `onClick`).|
|onBlur|function|||Callback to trigger on de-focus (blur).<br/>Called with same args as `onClick`|
|onClick|function|||Callback to trigger on click.<br/>Called with args `({ value, name }, event)`|
|onFocus|function|||Callback to trigger on focus. Called with same args as `onClick`|
|onKeyDown|function|||Callback to trigger on key-down. Called with same args as `onClick`|

### ButtonStrip

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { ButtonStrip } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-buttonstrip'`|||
|end|custom|||Horizontal alignment for buttons. Mutually exclusive with `middle` prop|
|middle|custom|||Horizontal alignment. Mutually exclusive with `end` prop|

### DropdownButton

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { DropdownButton } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Children to render inside the buton|
|className|string||||
|component|element|||Component to show/hide when button is clicked|
|dataTest|string|`'dhis2-uicore-dropdownbutton'`|||
|destructive|custom|||Button variant. Mutually exclusive with `primary` and `secondary` props|
|disabled|boolean|||Make the button non-interactive|
|icon|element||||
|initialFocus|boolean|||Grants button initial focus on the page|
|large|custom|||Button size. Mutually exclusive with `small` prop|
|name|string||||
|open|boolean|||Controls popper visibility. When implementing this prop the component becomes a controlled component|
|primary|custom|||Button variant. Mutually exclusive with `destructive` and `secondary` props|
|secondary|custom|||Button variant. Mutually exclusive with `primary` and `destructive` props|
|small|custom|||Button size. Mutually exclusive with `large` prop|
|tabIndex|string||||
|type|'submit' │ 'reset' │ 'button'|||Type of button. Can take advantage of different default behavior|
|value|string||||
|onClick|custom|||Callback triggered on click.<br/>Called with signature `({ name: string, value: string, open: bool }, event)`<br/>Is required when using the `open` prop to override the internal<br/>state.|

### SplitButton

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SplitButton } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|string||||
|className|string||||
|component|element|||Component to render when the dropdown is opened|
|dataTest|string|`'dhis2-uicore-splitbutton'`|||
|destructive|custom|||Applies 'destructive' appearance to indicate purpose. Mutually exclusive with `primary` and `secondary` props|
|disabled|boolean|||Disables the button and makes it uninteractive|
|icon|element|||An icon to add inside the button|
|initialFocus|boolean|||Grants the button the initial focus|
|large|custom|||Changes button size. Mutually exclusive with `small` prop|
|name|string||||
|primary|custom|||Applies 'primary' appearance to indicate purpose. Mutually exclusive with `destructive` and `secondary` props|
|secondary|custom|||Applies 'secondary' appearance to indicate purpose. Mutually exclusive with `primary` and `destructive` props|
|small|custom|||Changes button size. Mutually exclusive with `large` prop|
|tabIndex|string||||
|type|'submit' │ 'reset' │ 'button'|||Type of button. Applied to html `button` element|
|value|string|||Value associated with the button. Passed in object to onClick handler|
|onClick|function||||

### Calendar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


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

### Card

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Card } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-card'`|||

### Center

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Center } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-centeredcontent'`|||
|position|'top' │ 'middle' │ 'bottom'|`'middle'`||Vertical alignment|

### Checkbox

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Checkbox } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|checked|custom|`false`|||
|className|string||||
|dataTest|string|`'dhis2-uicore-checkbox'`|||
|dense|boolean||||
|disabled|boolean||||
|error|custom||||
|indeterminate|custom|`false`|||
|initialFocus|boolean||||
|label|node||||
|name|string||||
|tabIndex|string||||
|valid|custom||||
|value|string||||
|warning|custom||||
|onBlur|function||||
|onChange|function|||Called with signature `(object, event)`|
|onFocus|function||||
|onKeyDown|function||||

### CheckboxField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { CheckboxField } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|checked|boolean||||
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-checkboxfield'`|||
|dense|boolean|||Smaller dimensions for information-dense layouts|
|disabled|boolean|||Disables the checkbox|
|error|custom|||Applies 'error' styling to checkbox and validation text for feedback. Mutually exclusive with `warning` and `valid` props|
|helpText|string|||Useful instructions for the user|
|initialFocus|boolean||||
|label|node|||Labels the checkbox|
|name|string|||Name associate with the checkbox. Passed in object as argument to event handlers|
|required|boolean|||Adds an asterisk to indicate this field is required|
|tabIndex|string||||
|valid|custom|||Applies 'valid' styling to checkbox and validation text for feedback. Mutually exclusive with `warning` and `error` props|
|validationText|string|||Adds text below the checkbox to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses|
|value|string|||Value associated with the checkbox. Passed in object as argument to event handlers|
|warning|custom|||Applies 'warning' styling to checkbox and validation text for feedback. Mutually exclusive with `valid` and `error` props|
|onBlur|function|||Called with signature `({ name: string, value: string, checked: bool }, event)`|
|onChange|function|||Called with signature `({ name: string, value: string, checked: bool }, event)`|
|onFocus|function|||Called with signature `({ name: string, value: string, checked: bool }, event)`|
|onKeyDown|function|||Called with signature `({ name: string, value: string, checked: bool }, event)`|

### Chip

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Chip } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|any||||
|className|string||||
|dataTest|string|`'dhis2-uicore-chip'`|||
|dense|boolean||||
|disabled|boolean||||
|dragging|boolean||||
|icon|element||||
|marginBottom|number|`4`||`margin-bottom` value, applied in `px`|
|marginLeft|number|`4`||`margin-left` value, applied in `px`|
|marginRight|number|`4`||`margin-right` value, applied in `px`|
|marginTop|number|`4`||`margin-top` value, applied in `px`|
|overflow|boolean||||
|selected|boolean||||
|onClick|function||||
|onRemove|function||||

### Cover

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Cover } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-componentcover'`|||
|translucent|boolean|||Adds a semi-transparent background to the cover|
|onClick|function||||

### CssReset

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { CssReset } from '@dhis2/ui'
```



### CssVariables

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { CssVariables } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|colors|boolean|`false`|||
|elevations|boolean|`false`|||
|layers|boolean|`false`|||
|spacers|boolean|`false`|||
|theme|boolean|`false`|||

### Divider

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Divider } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-divider'`|||
|dense|boolean||||
|margin|string|``${spacers.dp8} 0``|||

### Field

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Field } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-field'`|||
|disabled|boolean|||Disabled status, shown when mouse is over label|
|error|custom|||Field status. Mutually exclusive with `valid` and `warning` props|
|helpText|string|||Useful text within the field|
|label|string|||Label at the top of the field|
|name|string|||`name` will become the target of the `for`/`htmlFor` attribute on the `<label>` element|
|required|boolean|||Inidcates this field is required|
|valid|custom|||Field status. Mutually exclusive with `error` and `warning` props|
|validationText|string|||Feedback given related to validation status of field|
|warning|custom|||Field status. Mutually exclusive with `valid` and `error` props|

### FieldGroup

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { FieldGroup } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-fieldsetfield'`|||
|disabled|boolean|||Disables the form controls within|
|error|custom|||Applies 'error' styling to validation text for feedback. Mutually exclusive with `warning` and `valid` props|
|helpText|string|||Useful instructions for the user|
|label|string|||Labels the Field Group|
|name|string|||Name associate with the Field Group. Passed in object as argument to event handlers|
|required|boolean|||Adds an asterisk to indicate this field is required|
|valid|custom|||Applies 'valid' styling to validation text for feedback. Mutually exclusive with `warning` and `error` props|
|validationText|string|||Adds text at the bottom of the field to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses|
|warning|custom|||Applies 'warning' styling to validation text for feedback. Mutually exclusive with `valid` and `error` props|

### FieldSet

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { FieldSet } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-fieldset'`|||

### FileInput

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { FileInput } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|accept|string|`'*'`||The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)|
|buttonLabel|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-fileinput'`|||
|disabled|boolean||||
|error|custom|||Input status. Mutually exclusive with `warning` and `valid`|
|initialFocus|boolean||||
|large|custom|||Button size. Mutually exclusive with `small`|
|multiple|boolean|||The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)|
|name|string||||
|small|custom|||Button size. Mutually exclusive with `large`|
|tabIndex|string||||
|valid|custom|||Input status. Mutually exclusive with `warning` and `error`|
|warning|custom|||Input status. Mutually exclusive with `valid` and `error`|
|onBlur|function|||Called with signature `(object, event)`|
|onChange|function|||Called with signature `(object, event)`|
|onFocus|function|||Called with signature `(object, event)`|
|onKeyDown|function|||Called with signature `(object, event)`|

### FileInputField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { FileInputField } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|accept|string|`'*'`||The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)|
|buttonLabel|string │ function|`() => i18n.t('Upload a file')`||Text on the button|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-fileinputfield'`|||
|disabled|boolean|||Disables the button|
|error|custom|||Applies 'error' styling to the validation text. Mutually exclusive with `warning` and `valid` props|
|helpText|string|||Useful guiding text for the user|
|initialFocus|boolean||||
|label|string|||A descriptive label above the button|
|large|custom|||Size of the button. Mutually exclusive with the `small` prop|
|multiple|boolean|||The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)|
|name|string|||Name associated with input. Passed to event handler callbacks|
|placeholder|string │ function|`() => i18n.t('No file uploaded yet')`||Placeholder below the button|
|required|boolean|||Adds an asterisk to indicate this field is required|
|small|custom|||Size of the button. Mutually exclusive with the `large` prop|
|tabIndex|string||||
|valid|custom|||Applies 'valid' styling to the validation text. Mutually exclusive with `warning` and `error` props|
|validationText|string|||Text below the button that provides validation feedback|
|warning|custom|||Applies 'warning' styling to the validation text. Mutually exclusive with `valid` and `error` props|
|onBlur|function||||
|onChange|function|||Called with signature `({ name: string, files: [] }, event)`|
|onFocus|function|||Called with signature `({ name: string, files: [] }, event)`|
|onKeyDown|function|||Called with signature `({ name: string, files: [] }, event)`|

### FileListItem

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { FileListItem } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onRemove|function||*||
|cancelText|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-filelistitem'`|||
|label|string||||
|loading|boolean||||
|removeText|string||||
|onCancel|function||||

### FileListPlaceholder

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { FileListPlaceholder } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|string||||
|dataTest|string|`'dhis2-uicore-filelistplaceholder'`|||

### FileList

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { FileList } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-filelist'`|||

### HeaderBar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { HeaderBar } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|appName|string||||
|className|string||||
|updateAvailable|boolean||||
|onApplyAvailableUpdate|function||||

### Logo

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Logo } from '@dhis2/ui'
```



### Help

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Help } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-help'`|||
|error|custom||||
|valid|custom||||
|warning|custom||||

### Input

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Input } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|autoComplete|string|||The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete)|
|className|string||||
|dataTest|string|`'dhis2-uicore-input'`|||
|dense|boolean|||Makes the input smaller|
|disabled|boolean|||Disables the input|
|error|custom|||Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props|
|initialFocus|boolean|||The input grabs initial focus on the page|
|loading|boolean|||Adds a loading indicator beside the input|
|max|string|||The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max), for use when `type` is `'number'`|
|min|string|||The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min), for use when `type` is `'number'`|
|name|string|||Name associated with the input. Passed to event handler callbacks in object|
|placeholder|string|||Placeholder text for the input|
|readOnly|boolean|||Makes the input read-only|
|role|string|||Sets a role attribute on the input|
|step|string|||The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'`|
|tabIndex|string||||
|type|'text' │ 'number' │ 'password' │ 'email' │ 'url' │ 'tel' │ 'date' │ 'datetime' │ 'datetime-local' │ 'month' │ 'week' │ 'time' │ 'search'|`'text'`||The native input `type` attribute|
|valid|custom|||Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props|
|value|string|||Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object|
|warning|custom|||Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props|
|onBlur|function|||Called with signature `({ name: string, value: string }, event)`|
|onChange|function|||Called with signature `({ name: string, value: string }, event)`|
|onFocus|function|||Called with signature `({ name: string, value: string }, event)`|
|onKeyDown|function|||Called with signature `({ name: string, value: string }, event)`|

### InputField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { InputField } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|autoComplete|string|||The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete)|
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-inputfield'`|||
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

### IntersectionDetector

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { IntersectionDetector } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|rootRef|{<br/>  "current": "instanceOf(HTMLElement)"<br/>}||*|React ref on other component to detect intersections with|
|onChange|function||*|Called with signature `({ isIntersecting: bool })`|
|children|any||||
|className|string||||
|dataTest|string|`'dhis2-uicore-intersectiondetector'`|||
|threshold|number|`0`||The [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) value: a value from 0.0 to 1.0 that controls the point at which an intersecting component is considered 'intersected' or 'visible' and the onChange callback triggers|

### Label

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Label } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-label'`|||
|disabled|boolean||||
|htmlFor|string||||
|required|boolean||||

### Layer

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Layer } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-layer'`|||
|disablePortal|boolean|||Disable the Portal, useful for nesting layers|
|level|number │ string|`'auto'`||Z-index level|
|position|'absolute' │ 'fixed'|`'fixed'`|||
|translucent|boolean|||Adds a semi-transparent background|
|onBackdropClick|function|||Backdrop click handler|
|onClick|custom|||Click handler - DEPRECATED|

### Legend

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Legend } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-legend'`|||
|required|boolean|||Indicates the associated field set is required|

### CircularLoader

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { CircularLoader } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-circularloader'`|||
|extrasmall|custom||||
|invert|boolean||||
|large|custom||||
|small|custom||||

### LinearLoader

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { LinearLoader } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|amount|number||*|The progression in percent without the '%' sign|
|className|string||||
|dataTest|string|`'dhis2-uicore-linearloader'`|||
|invert|boolean|||Use inverted color scheme|
|margin|string|`spacers.dp12`||The margin around the loader, can be a full shorthand|
|width|string|`'300px'`||The width of the entire indicator|

### LogoIcon

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { LogoIcon } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-logoicon'`|||

### LogoIconWhite

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { LogoIconWhite } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-logoiconwhite'`|||

### Logo

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Logo } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-logo'`|||

### LogoWhite

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { LogoWhite } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-logowhite'`|||

### FlyoutMenu

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { FlyoutMenu } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Typically, but not limited to, `MenuItem` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-menu'`|||
|dense|boolean|||Menu uses smaller dimensions|
|maxHeight|string|`'auto'`|||
|maxWidth|string|`'380px'`|||

### Menu

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Menu } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader`|
|className|string||||
|dataTest|string|`'dhis2-uicore-menulist'`|||
|dense|boolean|||Applies `dense` property to all child components unless already specified|

### MenuDivider

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { MenuDivider } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-menudivider'`|||
|dense|boolean||||

### MenuItem

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { MenuItem } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|active|boolean||||
|chevron|boolean||||
|children|node|||Nested menu items can become submenus.<br/>See `showSubMenu` and `toggleSubMenu` props, and 'Children' demo|
|className|string||||
|dataTest|string|`'dhis2-uicore-menuitem'`|||
|dense|boolean||||
|destructive|boolean||||
|disabled|boolean||||
|href|string|||For using menu item as a link|
|icon|node|||An icon for the left side of the menu item|
|label|node|||Text in the menu item|
|showSubMenu|boolean|||When true, nested menu items are shown in a Popper|
|target|string|||For using menu item as a link|
|toggleSubMenu|function|||On click, this function is called (without args)|
|value|string|||Value associated with item. Passed as an argument to onClick handler.|
|onClick|function|||Click handler called with signature `({ value: string }, event)`|

### MenuSectionHeader

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { MenuSectionHeader } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|className|string||||
|dataTest|string|`'dhis2-uicore-menusectionheader'`|||
|dense|boolean||||
|hideDivider|boolean||||
|label|node||||

### Modal

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Modal } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-modal'`|||
|fluid|boolean||||
|hide|boolean||||
|large|custom||||
|position|custom|`'top'`|||
|small|custom||||
|onClose|function|||Callback used when the Modal closes|

### ModalActions

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { ModalActions } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|dataTest|string|`'dhis2-uicore-modalactions'`|||

### ModalContent

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { ModalContent } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-modalcontent'`|||

### ModalTitle

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { ModalTitle } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|string||||
|dataTest|string|`'dhis2-uicore-modaltitle'`|||

### Node

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Node } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Content below this level of the hierarchy; children are revealed when this leaf is 'open'|
|className|string||||
|component|element|||Content/label for this leaf, for example a checkbox|
|dataTest|string|`'dhis2-uicore-node'`|||
|icon|node|||A custom icon to use instead of a toggle arrow|
|open|boolean||||
|onClose|function||||
|onOpen|function||||

### NoticeBox

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { NoticeBox } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-noticebox'`|||
|error|custom|||Applies 'error' message styles. Mutually exclusive with the `valid` and `warning` props|
|title|string||||
|valid|custom|||Applies 'valid' message styles. Mutually exclusive with the `error` and `warning` props|
|warning|custom|||Applies 'warning' message styles. Mutually exclusive with the `error` and `valid` props|

### OrganisationUnitTree

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { OrganisationUnitTree } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|roots|string │ arrayOf(string)||*|Root org unit ID(s)|
|onChange|function||*|Will be called with the following object:<br/>`{ id: string, displayName: string, path: string, checked: boolean, selected: string[] }`|
|autoExpandLoadingError|boolean|||When set, the error when loading children fails will be shown automatically|
|dataTest|string|`'dhis2-uiwidgets-orgunittree'`|||
|disableSelection|boolean|||When set to true, no unit can be selected|
|expanded|custom||||
|filter|arrayOf(custom)|`[]`||All organisation units with a path that includes the provided paths will be shown.<br/>All others will not be rendered. When not provided, all org units will be shown.|
|forceReload|boolean|||When true, everything will be reloaded. In order to load it again after reloading, `forceReload` has to be set to `false` and then to `true` again|
|handleCollapse|custom||||
|handleExpand|custom||||
|highlighted|arrayOf(custom)|`[]`||All units provided to "highlighted" as path will be visually<br/>highlighted.<br/>Note:<br/>The d2-ui component used two props for this:<br/>* searchResults<br/>* highlightSearchResults|
|initiallyExpanded|arrayOf(custom)|`[]`||An array of OU paths that will be expanded automatically<br/>as soon as they are encountered.<br/>The path of an OU is the UIDs of the OU<br/>and all its parent OUs separated by slashes (/)<br/>Note: This replaces "openFirstLevel" as that's redundant|
|isUserDataViewFallback|boolean|||When provided, the 'isUserDataViewFallback' option will be sent when requesting the org units|
|renderNodeLabel|function|`defaultRenderNodeLabel`||Renders the actual node component for each leaf, can be used to<br/>customize the node. The default function just returns the node's<br/>displayName<br/><br/>Shape of the object passed to the callback:<br/>```<br/>{<br/>   label: string,<br/>   node: {<br/>     displayName: string,<br/>     id: string,<br/>     // Only provided once `loading` is false<br/>     path?: string,<br/>     // Only provided once `loading` is false<br/>     children?: Array.<{<br/>       id: string,<br/>       path: string,<br/>       displayName: string<br/>     }><br/>   },<br/>   loading: boolean,<br/>   error: string,<br/>   open: boolean,<br/>   selected: string[],<br/>   singleSelection: boolean,<br/>   disableSelection: boolean,<br/>}<br/>```|
|selected|arrayOf(custom)|`[]`||An array of paths of selected OUs. The path of an OU is the UIDs of the OU and all its parent OUs separated by slashes (`/`)|
|singleSelection|boolean|||When set, no checkboxes will be displayed and only the first selected path in `selected` will be highlighted|
|suppressAlphabeticalSorting|boolean|||Turns off alphabetical sorting of units|
|onChildrenLoaded|function|||Called with the children's data that was loaded|
|onCollapse|function|||Called with `{ path: string }` with the path of the parent of the level closed|
|onExpand|function|||Called with `{ path: string }` with the path of the parent of the level opened|

### Label

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Label } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|any||*||
|dataTest|string||*||
|fullPath|string||*||
|hasChildren|boolean||*||
|loading|boolean||*||
|node|{<br/>  "displayName": "string",<br/>  "id": "string",<br/>  "children": "number",<br/>  "path": "string"<br/>}||*||
|open|boolean||*||
|rootId|string||*||
|onChange|function||*||
|onToggleOpen|function||*||
|checked|boolean||||
|disableSelection|boolean||||
|hasSelectedDescendants|boolean||||
|highlighted|boolean||||
|selected|arrayOf(custom)||||
|singleSelection|boolean||||

### Pagination

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Pagination } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|page|number||*||
|pageSize|number||*||
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-pagination'`|||
|disabled|boolean||||
|hidePageSelect|boolean||||
|hidePageSizeSelect|boolean||||
|hidePageSummary|boolean||||
|isLastPage|boolean||||
|nextPageText|string │ function|`() => i18n.t('Next')`|||
|pageCount|number||||
|pageLength|custom||||
|pageSelectText|string │ function|`() => i18n.t('Page')`|||
|pageSizeSelectText|string │ function|`() => i18n.t('Items per page')`|||
|pageSizes|arrayOf(string)|`['5', '10', '20', '30', '40', '50', '75', '100']`|||
|pageSummaryText|string │ function|`getDefaultPageSummaryText`|||
|previousPageText|string │ function|`() => i18n.t('Previous')`|||
|total|number||||
|onPageChange|function||||
|onPageSizeChange|function||||

### Popover

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Popover } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*||
|arrow|boolean|`true`||Show or hide the arrow|
|className|string||||
|dataTest|string|`'dhis2-uicore-popover'`|||
|elevation|string|`elevations.e200`||Box-shadow to create appearance of elevation.  Use `elevations` constants from the UI library.|
|maxWidth|number|`360`|||
|observePopperResize|boolean||||
|observeReferenceResize|boolean||||
|placement|custom|`'top'`|||
|reference|custom|||A React ref that refers to the element the Popover should position against|
|onClickOutside|function||||

### Popper

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Popper } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*|Content inside the Popper|
|className|string||||
|dataTest|string|`'dhis2-uicore-popper'`|||
|modifiers|arrayOf({<br/>  "name": "string",<br/>  "options": "object"<br/>})|`[]`||A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)|
|observePopperResize|boolean|||Makes the Popper update position when the **Popper content** changes size|
|observeReferenceResize|boolean|||Makes the Popper update position when the **reference element** changes size|
|placement|custom|`'auto'`||A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)|
|reference|custom|||A React ref, DOM node, or [virtual element](https://popper.js.org/docs/v2/virtual-elements/) for the popper to position itself against|
|strategy|'absolute' │ 'fixed'|||A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)|
|onFirstUpdate|function|||A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)|

### Radio

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Radio } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|checked|boolean||||
|className|string||||
|dataTest|string|`'dhis2-uicore-radio'`|||
|dense|boolean||||
|disabled|boolean||||
|error|custom|||Adds 'error' styling for feedback. Mutually exclusive with `valid` and `warning` props|
|initialFocus|boolean||||
|label|node||||
|name|string|||Name associated with this element. Passed in object to event handler functions|
|tabIndex|string||||
|valid|custom|||Adds 'valid' styling for feedback. Mutually exclusive with `error` and `warning` props|
|value|string|||Value associated with this element. Passed in object to event handler functions|
|warning|custom|||Adds 'warning' styling for feedback. Mutually exclusive with `valid` and `error` props|
|onBlur|function|||Called with the signature `({ name: string, value: string, checked: bool }, event)`|
|onChange|function|||Called with the signature `({ name: string, value: string, checked: bool }, event)`|
|onFocus|function|||Called with the signature `({ name: string, value: string, checked: bool }, event)`|
|onKeyDown|function|||Called with the signature `({ name: string, value: string, checked: bool }, event)`|

### Required

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Required } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|dataTest|string||*||

### SegmentedControl

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SegmentedControl } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|options|arrayOf({<br/>  "label": "string",<br/>  "value": "string",<br/>  "disabled": "boolean"<br/>})||*|Options to populate the segmented control|
|selected|string||*|An option to select; should match the `value` property of the option to be selected|
|onChange|function||*|Called with the signature `({ value: string }, event)`|

### Input

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Input } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|dataTest|string||*||
|className|string||||
|clearText|custom||||
|clearable|boolean||||
|disabled|boolean||||
|inputMaxHeight|string|`'100px'`|||
|options|node||||
|placeholder|string||||
|prefix|string||||
|selected|arrayOf(string)||||
|onChange|function||||

### Menu

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Menu } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|dataTest|string||*||
|empty|node|`''`|||
|options|node||||
|selected|arrayOf(string)||||
|onChange|function||||

### MultiSelect

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { MultiSelect } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|clearText|custom|||Required if `clearable` prop is `true`|
|clearable|boolean|||Adds a 'clear' option to the menu|
|dataTest|string|`'dhis2-uicore-multiselect'`|||
|dense|boolean||||
|disabled|boolean||||
|empty|node||||
|error|custom||||
|filterPlaceholder|string||||
|filterable|boolean|||Adds a 'filter' field to the menu|
|initialFocus|boolean||||
|inputMaxHeight|string||||
|loading|boolean||||
|loadingText|string||||
|maxHeight|string||||
|noMatchText|custom|||Required if `filterable` prop is `true`|
|placeholder|string||||
|prefix|string||||
|selected|arrayOf(string)|`[]`|||
|tabIndex|string||||
|valid|custom||||
|warning|custom||||
|onBlur|function||||
|onChange|function||||
|onFocus|function||||
|onKeyDown|function||||

### MultiSelectField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { MultiSelectField } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `MultiSelectOption` components|
|className|string||||
|clearText|string │ function|`() => i18n.t('Clear')`||Label for the button that clears selections|
|clearable|boolean|||Adds a button to the MultiSelect that clears selections when pressed|
|dataTest|string|`'dhis2-uiwidgets-multiselectfield'`|||
|dense|boolean|||Makes the MultiSelect smaller|
|disabled|boolean|||Disables the MultiSelect|
|empty|node │ function|`() => i18n.t('No data found')`||Text to display when there are no options|
|error|custom|||Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props|
|filterPlaceholder|node │ function|`() => i18n.t('Type to filter options')`||Placeholder text to show in the filter field when it is empty|
|filterable|boolean|||Adds a field to filter options|
|helpText|string|||Useful guiding text to display below the MultiSelect|
|initialFocus|boolean|||Grabs initial focus on the page|
|inputMaxHeight|string|||Constrains the height of the input|
|inputWidth|string|||Sets the width of the input. Can be any valid CSS measurement|
|label|string|||Text for the label above the MultiSelect|
|loading|boolean|||Applies a loading appearance to the dropdown options|
|loadingText|string │ function|`() => i18n.t('Loading options')`||Text to display when `loading` is true|
|maxHeight|string|||Constrains height of the MultiSelect|
|noMatchText|string │ function|`() => i18n.t('No options found')`||Text to display when there are no filter results|
|placeholder|string|||Placeholder text when the MultiSelect is empty|
|prefix|string|||Leading text to prefix selections|
|required|boolean|||Indicates that a selection is required|
|selected|arrayOf(string)|`[]`||Selected items in the MultiSelect (each string should refer to the item's `value` attribute)|
|tabIndex|string||||
|valid|custom|||Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props|
|validationText|string|||Text to provide form validation feedback. Receives styles according to validation status|
|warning|custom|||Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props|
|onBlur|function|||Called with signature `({ selected: [String] }, event)`|
|onChange|function|||Called with signature `({ selected: [String] }, event)`|
|onFocus|function|||Called with signature `({ selected: [String] }, event)`|
|onKeyDown|function|||Called with signature `({ selected: [String] }, event)`|

### MultiSelectOption

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { MultiSelectOption } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|label|string||*||
|value|string||*||
|active|boolean||||
|className|string||||
|dataTest|string|`'dhis2-uicore-multiselectoption'`|||
|disabled|boolean||||
|onClick|function||||

### Input

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Input } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|dataTest|string||*||
|className|string||||
|clearText|custom||||
|clearable|boolean||||
|disabled|boolean||||
|inputMaxHeight|string|`'100px'`|||
|options|node||||
|placeholder|string||||
|prefix|string||||
|selected|string||||
|onChange|function||||

### Menu

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Menu } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|dataTest|string||*||
|empty|node|`''`|||
|handleClose|function||||
|handleFocusInput|function||||
|options|node||||
|selected|string||||
|onChange|function||||

### SingleSelect

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SingleSelect } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|clearText|custom|||Text on button that clears selection. Required if `clearable` prop is true|
|clearable|boolean|||Adds a button to clear selection|
|dataTest|string|`'dhis2-uicore-singleselect'`|||
|dense|boolean||||
|disabled|boolean||||
|empty|node|||Text or component to display when there are no options|
|error|custom|||Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props|
|filterPlaceholder|string||||
|filterable|boolean|||Adds a filter field to add text to filter options|
|initialFocus|boolean||||
|inputMaxHeight|string||||
|loading|boolean||||
|loadingText|string||||
|maxHeight|string||||
|noMatchText|custom|||Text to show when filter returns no results. Required if `filterable` prop is true|
|placeholder|string||||
|prefix|string||||
|selected|string|`''`|||
|tabIndex|string||||
|valid|custom|||Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `error` props|
|warning|custom|||Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props|
|onBlur|function||||
|onChange|function||||
|onFocus|function||||
|onKeyDown|function||||

### SingleSelectField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SingleSelectField } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `SingleSelectOption` components|
|className|string||||
|clearText|string │ function|`() => i18n.t('Clear')`||Label for the button that clears selections|
|clearable|boolean|||Adds a button to the SingleSelect that clears selections when pressed|
|dataTest|string|`'dhis2-uiwidgets-singleselectfield'`|||
|dense|boolean|||Makes the SingleSelect smaller|
|disabled|boolean|||Disables the SingleSelect|
|empty|node │ function|`() => i18n.t('No data found')`||Text to display when there are no options|
|error|custom|||Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props|
|filterPlaceholder|node │ function|`() => i18n.t('Type to filter options')`||Placeholder text to show in the filter field when it is empty|
|filterable|boolean|||Adds a field to filter options|
|helpText|string|||Useful guiding text to display below the SingleSelect|
|initialFocus|boolean|||Grabs initial focus on the page|
|inputMaxHeight|string|||Constrains the height of the input|
|inputWidth|string|||Sets the width of the input. Can be any valid CSS measurement|
|label|string|||Text for the label above the SingleSelect|
|loading|boolean|||Applies a loading appearance to the dropdown options|
|loadingText|string │ function|`() => i18n.t('Loading options')`||Text to display when `loading` is true|
|maxHeight|string|||Constrains height of the SingleSelect|
|noMatchText|string │ function|`() => i18n.t('No options found')`||Text to display when there are no filter results|
|placeholder|string|||Placeholder text when the SingleSelect is empty|
|prefix|string|||Leading text to prefix selections|
|required|boolean|||Indicates that a selection is required|
|selected|string|`''`||Selected item in the SingleSelect (the string should refer to the item's `value` attribute)|
|tabIndex|string||||
|valid|custom|||Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props|
|validationText|string|||Text to provide form validation feedback. Receives styles according to validation status|
|warning|custom|||Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props|
|onBlur|function|||Called with signature `({ selected: string }, event)`|
|onChange|function|||Called with signature `({ selected: string }, event)`|
|onFocus|function|||Called with signature `({ selected: string }, event)`|
|onKeyDown|function|||Called with signature `({ selected: string }, event)`|

### SingleSelectOption

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SingleSelectOption } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|label|string||*||
|value|string||*||
|active|boolean||||
|className|string||||
|dataTest|string|`'dhis2-uicore-singleselectoption'`|||
|disabled|boolean||||
|onClick|function||||

### SelectorBar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SelectorBar } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|any||*||
|additionalContent|any||||
|className|string||||
|dataTest|string|`'dhis2-ui-selectorbar'`|||
|disableClearSelections|boolean||||
|onClearSelectionClick|function||||

### SelectorBarItem

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SelectorBarItem } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|label|string||*||
|children|any||||
|className|string||||
|dataTest|string|`'dhis2-ui-selectorbaritem'`|||
|disabled|boolean||||
|displayOnly|boolean||||
|noValueMessage|string||||
|open|boolean||||
|setOpen|function||||
|value|string||||
|onClearSelectionClick|function||||

### SharingDialog

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SharingDialog } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|id|string||*|The id of the object to share|
|type|import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,
    EVENT_VISUALIZATION,
    INTERPRETATION,
} from './constants.js' │ import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,
    EVENT_VISUALIZATION,
    INTERPRETATION,
} from './constants.js' │ import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,
    EVENT_VISUALIZATION,
    INTERPRETATION,
} from './constants.js' │ import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,
    EVENT_VISUALIZATION,
    INTERPRETATION,
} from './constants.js'||*|The type of object to share|
|initialSharingSettings|{<br/>  "allowPublic": "boolean",<br/>  "groups": "objectOf",<br/>  "name": "string",<br/>  "public": "import {\n    ACCESS_NONE,\n    ACCESS_VIEW_ONLY,\n    ACCESS_VIEW_AND_EDIT,\n    VISUALIZATION,\n    DASHBOARD,\n    EVENT_VISUALIZATION,\n    INTERPRETATION,\n} from './constants.js' │ import {\n    ACCESS_NONE,\n    ACCESS_VIEW_ONLY,\n    ACCESS_VIEW_AND_EDIT,\n    VISUALIZATION,\n    DASHBOARD,\n    EVENT_VISUALIZATION,\n    INTERPRETATION,\n} from './constants.js' │ import {\n    ACCESS_NONE,\n    ACCESS_VIEW_ONLY,\n    ACCESS_VIEW_AND_EDIT,\n    VISUALIZATION,\n    DASHBOARD,\n    EVENT_VISUALIZATION,\n    INTERPRETATION,\n} from './constants.js'",<br/>  "users": "objectOf"<br/>}|`{
    name: '',
    allowPublic: true,
    public: ACCESS_NONE,
    groups: {},
    users: {},
}`||Used to seed the component with data to show whilst loading|
|onClose|function|`() => {}`|||
|onError|function|`() => {}`|||
|onSave|function|`() => {}`|||

### Modal

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Modal } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*||
|name|string||||
|onClose|function||||

### Switch

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Switch } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|ariaLabel|string|||Sets an aria-label attribute on the input|
|checked|boolean|`false`|||
|className|string||||
|dataTest|string|`'dhis2-uicore-switch'`|||
|dense|boolean|||Makes the switch smaller for information-dense layouts|
|disabled|boolean|||Disables the switch|
|error|custom|||Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` prop types|
|initialFocus|boolean|||Grab initial focus on the page|
|label|node|||Label for the switch. Can be a string or an element, for example an image|
|name|string|||Name associated with the switch. Passed to event handlers in object|
|role|string|`'switch'`||Sets a role attribute on the input|
|tabIndex|string||||
|valid|custom|||Applies 'valid' styles for validation feedback. Mutually exclusive with `error` and `warning` prop types|
|value|string|||Value associated with the switch. Passed to event handlers in object|
|warning|custom|||Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` prop types|
|onBlur|function|||Called with signature `({ name: string, value: string, checked: bool }, event)`|
|onChange|function|||Called with signature `({ name: string, value: string, checked: bool }, event)`|
|onFocus|function|||Called with signature `({ name: string, value: string, checked: bool }, event)`|
|onKeyDown|function|||Called with signature `({ name: string, value: string, checked: bool }, event)`|

### SwitchField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SwitchField } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|checked|boolean||||
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-switchfield'`|||
|dense|boolean|||Smaller dimensions for information-dense layouts|
|disabled|boolean|||Disables the switch|
|error|custom|||Applies 'error' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `valid` props|
|helpText|string|||Useful instructions for the user|
|initialFocus|boolean||||
|label|node|||Labels the switch|
|name|string|||Name associate with the switch. Passed in object as argument to event handlers|
|required|boolean|||Adds an asterisk to indicate this field is required|
|tabIndex|string||||
|valid|custom|||Applies 'valid' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `error` props|
|validationText|string|||Adds text below the switch to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses|
|value|string|||Value associated with the switch. Passed in object as argument to event handlers|
|warning|custom|||Applies 'warning' styling to switch and validation text for feedback. Mutually exclusive with `valid` and `error` props|
|onBlur|function|||Called with signature ({ name: string, value: string, checked: bool }, event)|
|onChange|function|||Called with signature ({ name: string, value: string, checked: bool }, event)|
|onFocus|function|||Called with signature ({ name: string, value: string, checked: bool }, event)|
|onKeyDown|function|||Called with signature ({ name: string, value: string, checked: bool }, event)|

### Tab

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Tab } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-tab'`|||
|disabled|boolean||||
|icon|element||||
|selected|boolean|||Indicates this tab is selected|
|onClick|function|||Called with the signature `({}, event)`|

### TabBar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TabBar } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-tabbar'`|||
|fixed|boolean|||Fixed tabs fill the width of their container. If false (i.e. fluid), tabs take up an amount of space defined by the tab name. Fluid tabs should be used most of the time.|
|scrollable|boolean|||Enables horizontal scrolling for many tabs that don't fit the width of the container|

### DataTableCell

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { DataTableCell } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|active|boolean|||To toggle border color, for example for editing|
|align|'left' │ 'center' │ 'right'|`'left'`|||
|backgroundColor|string|||Sets background color of the cell. Disables dynamic background colors from active, hover, and selected states|
|bordered|boolean||||
|children|node||||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-datatablecell'`|||
|error|custom|||Mutually exclusive with muted and valid|
|fixed|boolean|||When true a TableHeaderCell with sticky positioning will be rendered|
|large|boolean||||
|left|custom|`'auto'`||Required when fixed|
|muted|custom|||Mutually exclusive with error and valid|
|role|string||||
|rowSpan|string||||
|scope|string||||
|staticStyle|boolean|||Surpress hover and active event styles|
|tag|'td' │ 'th'|||Render a TableDataCell or TableHeaderCell respectively|
|valid|custom|||Mutually exclusive with error and muted|
|width|custom|`'auto'`||Required when fixed|
|onClick|function||||

### DataTable

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { DataTable } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<DataTableHead>`, `<DataTableBody>`, and `<DataTableFoot>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-datatable'`|||
|layout|'auto' │ 'fixed' │ 'initial' │ 'inherit'|`'auto'`||Sets the `datatable-layout` property. Switching to `fixed` can prevent style<br/>issues when dealing with a datatable with multiple frozen columns or when dealing<br/>with filter elements in the datatable headers.|
|role|string||||
|scrollHeight|string|||Sets max-height of scrollbox|
|scrollWidth|string|||Sets max-width of scrollbox|
|width|string|`'100%'`||Sets the `width` property. Providing an explicit width can prevent style<br/>issues when dealing with horizontally scrolling datatables with a fixed layout.|

### StackedTableBody

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableBody } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablebody'`|||

### StackedTableCellHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableCellHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|string|`''`|||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-stackedtablecellhead'`|||
|rowSpan|string||||

### StackedTableCell

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableCell } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|colSpan|string||||
|column|number||||
|dataTest|string|`'dhis2-uicore-stackedtablecell'`|||
|headerLabels|arrayOf(string)|`[]`|||
|hideTitle|boolean||||
|rowSpan|string||||
|title|string||||

### StackedTableFoot

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableFoot } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablefoot'`|||

### StackedTableHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablehead'`|||

### StackedTableRowHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableRowHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablerowhead'`|||

### StackedTableRow

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableRow } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablerow'`|||

### StackedTable

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTable } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtable'`|||
|headerLabels|arrayOf(string)|||Labels for columns. Use an empty string for a column without a header.|

### Table

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Table } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*||
|className|string||||
|dataTest|string||||

### TableBody

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableBody } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRow>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablebody'`|||
|role|string||||

### TableCellHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableCellHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-tablecellhead'`|||
|dense|boolean|||Uses less padding and height for information-dense layouts|
|role|string||||
|rowSpan|string||||

### TableCell

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableCell } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-tablecell'`|||
|dense|boolean|||Usees less padding and height for information-dense layouts|
|role|string||||
|rowSpan|string||||

### TableFoot

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableFoot } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRow>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablefoot'`|||
|role|string||||

### TableHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRowHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablehead'`|||
|role|string||||

### TableRowHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableRowHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableCellHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablerowhead'`|||
|role|string||||
|suppressZebraStriping|boolean|||Disables the default row striping for this row|

### TableRow

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableRow } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableCell>` or `<TableCellHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablerow'`|||
|role|string||||
|suppressZebraStriping|boolean|||Disables the default row striping for this row|

### Table

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Table } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-table'`|||
|role|string||||
|suppressZebraStriping|boolean|||Remove the default striping on alternating rows|

### DataTableColumnHeader

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { DataTableColumnHeader } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|align|'left' │ 'center' │ 'right'||||
|children|node||||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-datatablecellhead'`|||
|filter|custom|||The filter element (JSX), required when onFilterIconClick or showFilter are present|
|fixed|boolean||||
|large|boolean||||
|left|custom|||Left or top required when fixed|
|name|string|||Can be used to match a column with a property name|
|role|string||||
|rowSpan|string||||
|scope|string||||
|showFilter|custom||||
|sortDirection|custom||||
|sortIconTitle|string||||
|top|custom|||Left or top required when fixed|
|width|string||||
|onFilterIconClick|custom||||
|onSortIconClick|custom|||Sort icon click callback with `nextSortDirection` and `name` in payload|

### DataTableRow

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { DataTableRow } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<DataTableCell>` or `<DataTableCellHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-datatablerow'`|||
|draggable|boolean|||Renders and additional table cell with drag icon and applies draggable styles|
|expandableContent|custom|||This content will be rendered into an additional row with fullwidth cell and the presence of this prop will display an additional table cell with expand icon|
|expanded|boolean|||Toggles expand icon (up/down) and expandable content visibility|
|role|string||||
|selected|boolean|||Adds a green background color|
|onExpandToggle|custom|||Callback for expand icon cell clicks|

### TableBody

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableBody } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRow>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablebody'`|||
|loading|boolean||||
|role|string||||

### TableFoot

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableFoot } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRow>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablefoot'`|||
|role|string||||

### TableHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRowHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablehead'`|||
|role|string||||

### TableRow

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableRow } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableDataCell>` or `<TableDataCellHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablerow'`|||
|draggable|boolean|||Applies draggable cursor styles|
|role|string||||
|selected|boolean|||Sets a selected (teal) background color|

### Table

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Table } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|borderless|boolean|||Removes border from the table|
|children|node|||Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-table'`|||
|layout|'auto' │ 'fixed' │ 'initial' │ 'inherit'|`'auto'`||Sets the `table-layout` property. Switching to `fixed` can prevent style<br/>issues when dealing with a table with multiple frozen columns or when dealing<br/>with filter elements in the table headers.|
|role|string||||
|width|string|`'100%'`||Sets the `width` property. Providing an explicit width can prevent style<br/>issues when dealing with horizontally scrolling tables with a fixed layout.|

### Tag

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Tag } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|bold|boolean|||Use bold tags where it is important that the tag is seen by the user in an information dense interface. Bold tags should be reserved for edge cases and not overused.|
|children|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-tag'`|||
|icon|node|||Tags can contain icons. Use icons where they will help users easily identify the content of the tag. Tags must have a text label and cannot display only an icon.|
|maxWidth|string|`'240px'`|||
|negative|custom|||Red 'negative' tags imply an error or a problem. `neutral`, `positive`, and `negative` are mutually exclusive props|
|neutral|custom|||Blue 'neutral' tags are used when a tag _could_ have valid or error status but is currently neutral. `neutral`, `positive`, and `negative` are mutually exclusive props|
|positive|custom|||Green 'valid' tags should be used to indicate validity or success. `neutral`, `positive`, and `negative` are mutually exclusive props|

### TextArea

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TextArea } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|autoGrow|boolean|||Grow the text area in response to overflow instead of adding a scroll bar|
|className|string||||
|dataTest|string|`'dhis2-uicore-textarea'`|||
|dense|boolean|||Compact mode|
|disabled|boolean|||Disables the textarea and makes in non-interactive|
|error|custom|||Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props|
|initialFocus|boolean|||Grabs initial focus on the page|
|loading|boolean|||Adds a loading spinner|
|name|string|||Name associated with the text area. Passed in object argument to event handlers.|
|placeholder|string|||Placeholder text for an empty textarea|
|readOnly|boolean|||Makes the textarea read-only|
|resize|'none' │ 'both' │ 'horizontal' │ 'vertical'|`'vertical'`||[Resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) for the textarea element|
|rows|number|`4`||Initial height of the textarea, in lines of text|
|tabIndex|string||||
|valid|custom|||Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props|
|value|string|||Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers.|
|warning|custom|||Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props|
|width|string|`'100%'`||Width of the text area. Can be any valid CSS measurement|
|onBlur|function|||Called with signature ({ name: string, value: string }, event)|
|onChange|function|||Called with signature ({ name: string, value: string }, event)|
|onFocus|function|||Called with signature ({ name: string, value: string }, event)|
|onKeyDown|function|||Called with signature ({ name: string, value: string }, event)|

### TextAreaField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TextAreaField } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|autoGrow|boolean|||Grow the text area in response to overflow instead of adding a scroll bar|
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-textareafield'`|||
|dense|boolean|||Compact mode|
|disabled|boolean|||Disables the textarea and makes in non-interactive|
|error|custom|||Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props|
|helpText|string|||Adds useful help text below the textarea|
|initialFocus|boolean|||Grabs initial focus on the page|
|inputWidth|string|||Sets the width of the textarea. Minimum 220px. Any valid CSS measurement can be used|
|label|string|||Labels the textarea|
|loading|boolean|||Adds a loading spinner|
|name|string|||Name associated with the text area. Passed in object argument to event handlers.|
|placeholder|string|||Placeholder text for an empty textarea|
|readOnly|boolean|||Makes the textarea read-only|
|required|boolean|||Adds an asterisk to the label to indicate this field is required|
|resize|'none' │ 'both' │ 'horizontal' │ 'vertical'|`'vertical'`||[Resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) for the textarea element|
|rows|number|`4`||Initial height of the textarea, in lines of text|
|tabIndex|string||||
|valid|custom|||Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props|
|validationText|string|||Validation text below the textarea to provide validation feedback. Changes appearance depending on validation status|
|value|string|||Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers.|
|warning|custom|||Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props|
|onBlur|function|||Called with signature ({ name: string, value: string }, event)|
|onChange|function|||Called with signature ({ name: string, value: string }, event)|
|onFocus|function|||Called with signature ({ name: string, value: string }, event)|
|onKeyDown|function|||Called with signature ({ name: string, value: string }, event)|

### Tooltip

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Tooltip } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node │ function|||If child is a function, it's called with `{ onMouseOver, onMouseOut, ref }` args to apply to a reference element. If child is a node, it is wrapped in a `span` with the appropriate attributes and handlers.|
|className|string||||
|closeDelay|number|`200`||Time (in ms) until tooltip closes after mouse out|
|content|node|||Content to display when the tooltip is open|
|dataTest|string|`'dhis2-uicore-tooltip'`|||
|maxWidth|number|`300`||Max width of the tooltip in px|
|openDelay|number|`200`||Time (in ms) until tooltip open after mouse over|
|placement|'top' │ 'right' │ 'bottom' │ 'left'|`'top'`||Where to place the tooltip relative to its reference|

### TransferOption

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TransferOption } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|label|node||*||
|value|string||*||
|className|string||||
|dataTest|string|`'dhis2-uicore-transferoption'`|||
|disabled|boolean||||
|highlighted|boolean||||
|onClick|function||||
|onDoubleClick|function||||

### Transfer

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Transfer } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|options|arrayOf({<br/>  "label": "string",<br/>  "value": "string",<br/>  "disabled": "boolean"<br/>})||*||
|onChange|function||*||
|addAllText|string||||
|addIndividualText|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-transfer'`|||
|disabled|boolean||||
|enableOrderChange|boolean||||
|filterCallback|function|`defaultFilterCallback`|||
|filterCallbackPicked|function|`defaultFilterCallback`|||
|filterLabel|string||||
|filterLabelPicked|string||||
|filterPlaceholder|string||||
|filterPlaceholderPicked|string||||
|filterable|boolean||||
|filterablePicked|boolean||||
|height|string|`'240px'`|||
|hideFilterInput|boolean||||
|hideFilterInputPicked|boolean||||
|initialSearchTerm|string|`''`|||
|initialSearchTermPicked|string|`''`|||
|leftFooter|node||||
|leftHeader|node||||
|loading|boolean||||
|loadingPicked|boolean||||
|maxSelections|1 │ Infinity|`Infinity`|||
|optionsWidth|string|`'320px'`|||
|removeAllText|string||||
|removeIndividualText|string||||
|renderOption|function|`(option) => <TransferOption {...option} />`|||
|rightFooter|node||||
|rightHeader|node||||
|searchTerm|string||||
|searchTermPicked|string||||
|selected|arrayOf(string)|`[]`|||
|selectedEmptyComponent|node||||
|selectedWidth|string|`'320px'`|||
|sourceEmptyPlaceholder|node||||
|onEndReached|function||||
|onEndReachedPicked|function||||
|onFilterChange|function||||
|onFilterChangePicked|function||||

### UserAvatar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { UserAvatar } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|name|string||*||
|avatarId|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-useravatar'`|||
|extralarge|custom||||
|extrasmall|custom||||
|large|custom||||
|medium|custom||||
|small|custom||||
