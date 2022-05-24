### TextArea

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TextArea } from '@dhis2-ui/text-area'
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

### TextAreaField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TextAreaField } from '@dhis2-ui/text-area'
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
