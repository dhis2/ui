## Switch

From [`src/switch/switch.js`](./src/switch/switch.js)

| prop             |               type               |         default         | required | description                                                                                              |
| ---------------- | :------------------------------: | :---------------------: | :------: | -------------------------------------------------------------------------------------------------------- |
| **ariaLabel**    |             `String`             |                         |   :x:    | Sets an aria-label attribute on the input                                                                |
| **checked**      |            `Boolean`             |         `false`         |   :x:    |
| **className**    |             `String`             |                         |   :x:    |
| **dataTest**     |             `String`             | `'dhis2-uicore-switch'` |   :x:    |
| **dense**        |            `Boolean`             |                         |   :x:    | Makes the switch smaller for information-dense layouts                                                   |
| **disabled**     |            `Boolean`             |                         |   :x:    | Disables the switch                                                                                      |
| **error**        | `sharedPropTypes.statusPropType` |                         |   :x:    | Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` prop types |
| **initialFocus** |            `Boolean`             |                         |   :x:    | Grab initial focus on the page                                                                           |
| **label**        |           `ReactNode`            |                         |   :x:    | Label for the switch. Can be a string or an element, for example an image                                |
| **name**         |             `String`             |                         |   :x:    | Name associated with the switch. Passed to event handlers in object                                      |
| **onBlur**       |            `Function`            |                         |   :x:    | Called with signature `({ name: string, value: string, checked: bool }, event)`                          |
| **onChange**     |            `Function`            |                         |   :x:    | Called with signature `({ name: string, value: string, checked: bool }, event)`                          |
| **onFocus**      |            `Function`            |                         |   :x:    | Called with signature `({ name: string, value: string, checked: bool }, event)`                          |
| **role**         |             `String`             |       `'switch'`        |   :x:    | Sets a role attribute on the input                                                                       |
| **tabIndex**     |             `String`             |                         |   :x:    |
| **valid**        | `sharedPropTypes.statusPropType` |                         |   :x:    | Applies 'valid' styles for validation feedback. Mutually exclusive with `error` and `warning` prop types |
| **value**        |             `String`             |                         |   :x:    | Value associated with the switch. Passed to event handlers in object                                     |
| **warning**      | `sharedPropTypes.statusPropType` |                         |   :x:    | Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` prop types |

## SwitchField

From [`src/switch-field/switch-field.js`](./src/switch-field/switch-field.js)

| prop               |               type               |             default             | required | description                                                                                                             |
| ------------------ | :------------------------------: | :-----------------------------: | :------: | ----------------------------------------------------------------------------------------------------------------------- |
| **checked**        |            `Boolean`             |                                 |   :x:    |
| **className**      |             `String`             |                                 |   :x:    |
| **dataTest**       |             `String`             | `'dhis2-uiwidgets-switchfield'` |   :x:    |
| **dense**          |            `Boolean`             |                                 |   :x:    | Smaller dimensions for information-dense layouts                                                                        |
| **disabled**       |            `Boolean`             |                                 |   :x:    | Disables the switch                                                                                                     |
| **error**          | `sharedPropTypes.statusPropType` |                                 |   :x:    | Applies 'error' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `valid` props |
| **helpText**       |             `String`             |                                 |   :x:    | Useful instructions for the user                                                                                        |
| **initialFocus**   |            `Boolean`             |                                 |   :x:    |
| **label**          |           `ReactNode`            |                                 |   :x:    | Labels the switch                                                                                                       |
| **name**           |             `String`             |                                 |   :x:    | Name associate with the switch. Passed in object as argument to event handlers                                          |
| **onBlur**         |            `Function`            |                                 |   :x:    | Called with signature ({ name: string, value: string, checked: bool }, event)                                           |
| **onChange**       |            `Function`            |                                 |   :x:    | Called with signature ({ name: string, value: string, checked: bool }, event)                                           |
| **onFocus**        |            `Function`            |                                 |   :x:    | Called with signature ({ name: string, value: string, checked: bool }, event)                                           |
| **required**       |            `Boolean`             |                                 |   :x:    | Adds an asterisk to indicate this field is required                                                                     |
| **tabIndex**       |             `String`             |                                 |   :x:    |
| **valid**          | `sharedPropTypes.statusPropType` |                                 |   :x:    | Applies 'valid' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `error` props |
| **validationText** |             `String`             |                                 |   :x:    | Adds text below the switch to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses |
| **value**          |             `String`             |                                 |   :x:    | Value associated with the switch. Passed in object as argument to event handlers                                        |
| **warning**        | `sharedPropTypes.statusPropType` |                                 |   :x:    | Applies 'warning' styling to switch and validation text for feedback. Mutually exclusive with `valid` and `error` props |
