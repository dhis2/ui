### Checkbox

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Checkbox } from '@dhis2-ui/checkbox'
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
import { CheckboxField } from '@dhis2-ui/checkbox'
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
