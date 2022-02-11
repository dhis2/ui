## Checkbox

From [`src/checkbox/checkbox.js`](./src/checkbox/checkbox.js)

| prop              |    type     |          default          | required | description                             |
| ----------------- | :---------: | :-----------------------: | :------: | --------------------------------------- |
| **checked**       |  `custom`   |          `false`          |   :x:    |
| **className**     |  `String`   |                           |   :x:    |
| **dataTest**      |  `String`   | `'dhis2-uicore-checkbox'` |   :x:    |
| **dense**         |  `Boolean`  |                           |   :x:    |
| **disabled**      |  `Boolean`  |                           |   :x:    |
| **error**         |  `custom`   |                           |   :x:    |
| **indeterminate** |  `custom`   |          `false`          |   :x:    |
| **initialFocus**  |  `Boolean`  |                           |   :x:    |
| **label**         | `ReactNode` |                           |   :x:    |
| **name**          |  `String`   |                           |   :x:    |
| **onBlur**        | `Function`  |                           |   :x:    |
| **onChange**      | `Function`  |                           |   :x:    | Called with signature `(object, event)` |
| **onFocus**       | `Function`  |                           |   :x:    |
| **tabIndex**      |  `String`   |                           |   :x:    |
| **valid**         |  `custom`   |                           |   :x:    |
| **value**         |  `String`   |                           |   :x:    |
| **warning**       |  `custom`   |                           |   :x:    |

## CheckboxField

From [`src/checkbox-field/checkbox-field.js`](./src/checkbox-field/checkbox-field.js)

| prop               |    type     |              default              | required | description                                                                                                               |
| ------------------ | :---------: | :-------------------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------- |
| **checked**        |  `Boolean`  |                                   |   :x:    |
| **className**      |  `String`   |                                   |   :x:    |
| **dataTest**       |  `String`   | `'dhis2-uiwidgets-checkboxfield'` |   :x:    |
| **dense**          |  `Boolean`  |                                   |   :x:    | Smaller dimensions for information-dense layouts                                                                          |
| **disabled**       |  `Boolean`  |                                   |   :x:    | Disables the checkbox                                                                                                     |
| **error**          |  `custom`   |                                   |   :x:    | Applies 'error' styling to checkbox and validation text for feedback. Mutually exclusive with `warning` and `valid` props |
| **helpText**       |  `String`   |                                   |   :x:    | Useful instructions for the user                                                                                          |
| **initialFocus**   |  `Boolean`  |                                   |   :x:    |
| **label**          | `ReactNode` |                                   |   :x:    | Labels the checkbox                                                                                                       |
| **name**           |  `String`   |                                   |   :x:    | Name associate with the checkbox. Passed in object as argument to event handlers                                          |
| **onBlur**         | `Function`  |                                   |   :x:    | Called with signature `({ name: string, value: string, checked: bool }, event)`                                           |
| **onChange**       | `Function`  |                                   |   :x:    | Called with signature `({ name: string, value: string, checked: bool }, event)`                                           |
| **onFocus**        | `Function`  |                                   |   :x:    | Called with signature `({ name: string, value: string, checked: bool }, event)`                                           |
| **required**       |  `Boolean`  |                                   |   :x:    | Adds an asterisk to indicate this field is required                                                                       |
| **tabIndex**       |  `String`   |                                   |   :x:    |
| **valid**          |  `custom`   |                                   |   :x:    | Applies 'valid' styling to checkbox and validation text for feedback. Mutually exclusive with `warning` and `error` props |
| **validationText** |  `String`   |                                   |   :x:    | Adds text below the checkbox to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses |
| **value**          |  `String`   |                                   |   :x:    | Value associated with the checkbox. Passed in object as argument to event handlers                                        |
| **warning**        |  `custom`   |                                   |   :x:    | Applies 'warning' styling to checkbox and validation text for feedback. Mutually exclusive with `valid` and `error` props |
