### Field

#### Usage

To use `Field`, you can import the component from the `@dhis2/ui` library  


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

To use `FieldGroup`, you can import the component from the `@dhis2/ui` library  


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

To use `FieldSet`, you can import the component from the `@dhis2/ui` library  


```js
import { FieldSet } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-fieldset'`|||
