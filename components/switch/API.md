### Switch

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { Switch } from '@dhis2-ui/switch'
```

#### Props

| Name         | Type     | Default                 | Required | Description                                                                                              |
| ------------ | -------- | ----------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| ariaLabel    | string   |                         |          | Sets an aria-label attribute on the input                                                                |
| checked      | boolean  | `false`                 |          |                                                                                                          |
| className    | string   |                         |          |                                                                                                          |
| dataTest     | string   | `'dhis2-uicore-switch'` |          |                                                                                                          |
| dense        | boolean  |                         |          | Makes the switch smaller for information-dense layouts                                                   |
| disabled     | boolean  |                         |          | Disables the switch                                                                                      |
| error        | custom   |                         |          | Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` prop types |
| initialFocus | boolean  |                         |          | Grab initial focus on the page                                                                           |
| label        | node     |                         |          | Label for the switch. Can be a string or an element, for example an image                                |
| name         | string   |                         |          | Name associated with the switch. Passed to event handlers in object                                      |
| role         | string   | `'switch'`              |          | Sets a role attribute on the input                                                                       |
| tabIndex     | string   |                         |          |                                                                                                          |
| valid        | custom   |                         |          | Applies 'valid' styles for validation feedback. Mutually exclusive with `error` and `warning` prop types |
| value        | string   |                         |          | Value associated with the switch. Passed to event handlers in object                                     |
| warning      | custom   |                         |          | Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` prop types |
| onBlur       | function |                         |          | Called with signature `({ name: string, value: string, checked: bool }, event)`                          |
| onChange     | function |                         |          | Called with signature `({ name: string, value: string, checked: bool }, event)`                          |
| onFocus      | function |                         |          | Called with signature `({ name: string, value: string, checked: bool }, event)`                          |

### SwitchField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { SwitchField } from '@dhis2-ui/switch'
```

#### Props

| Name           | Type     | Default                         | Required | Description                                                                                                             |
| -------------- | -------- | ------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| checked        | boolean  |                                 |          |                                                                                                                         |
| className      | string   |                                 |          |                                                                                                                         |
| dataTest       | string   | `'dhis2-uiwidgets-switchfield'` |          |                                                                                                                         |
| dense          | boolean  |                                 |          | Smaller dimensions for information-dense layouts                                                                        |
| disabled       | boolean  |                                 |          | Disables the switch                                                                                                     |
| error          | custom   |                                 |          | Applies 'error' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `valid` props |
| helpText       | string   |                                 |          | Useful instructions for the user                                                                                        |
| initialFocus   | boolean  |                                 |          |                                                                                                                         |
| label          | node     |                                 |          | Labels the switch                                                                                                       |
| name           | string   |                                 |          | Name associate with the switch. Passed in object as argument to event handlers                                          |
| required       | boolean  |                                 |          | Adds an asterisk to indicate this field is required                                                                     |
| tabIndex       | string   |                                 |          |                                                                                                                         |
| valid          | custom   |                                 |          | Applies 'valid' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `error` props |
| validationText | string   |                                 |          | Adds text below the switch to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses |
| value          | string   |                                 |          | Value associated with the switch. Passed in object as argument to event handlers                                        |
| warning        | custom   |                                 |          | Applies 'warning' styling to switch and validation text for feedback. Mutually exclusive with `valid` and `error` props |
| onBlur         | function |                                 |          | Called with signature ({ name: string, value: string, checked: bool }, event)                                           |
| onChange       | function |                                 |          | Called with signature ({ name: string, value: string, checked: bool }, event)                                           |
| onFocus        | function |                                 |          | Called with signature ({ name: string, value: string, checked: bool }, event)                                           |
