### Input

#### Usage

To use `Input`, you can import the component from the `@dhis2/ui` library  


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

To use `InputField`, you can import the component from the `@dhis2/ui` library  


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
