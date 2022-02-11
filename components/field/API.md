## Field

From [`src/field/field.js`](./src/field/field.js)

| prop               |    type     |        default         | required | description                                                                             |
| ------------------ | :---------: | :--------------------: | :------: | --------------------------------------------------------------------------------------- |
| **children**       | `ReactNode` |                        |   :x:    |
| **className**      |  `String`   |                        |   :x:    |
| **dataTest**       |  `String`   | `'dhis2-uicore-field'` |   :x:    |
| **disabled**       |  `Boolean`  |                        |   :x:    | Disabled status, shown when mouse is over label                                         |
| **error**          |  `custom`   |                        |   :x:    | Field status. Mutually exclusive with `valid` and `warning` props                       |
| **helpText**       |  `String`   |                        |   :x:    | Useful text within the field                                                            |
| **label**          |  `String`   |                        |   :x:    | Label at the top of the field                                                           |
| **name**           |  `String`   |                        |   :x:    | `name` will become the target of the `for`/`htmlFor` attribute on the `<label>` element |
| **required**       |  `Boolean`  |                        |   :x:    | Inidcates this field is required                                                        |
| **valid**          |  `custom`   |                        |   :x:    | Field status. Mutually exclusive with `error` and `warning` props                       |
| **validationText** |  `String`   |                        |   :x:    | Feedback given related to validation status of field                                    |
| **warning**        |  `custom`   |                        |   :x:    | Field status. Mutually exclusive with `valid` and `error` props                         |

## FieldGroup

From [`src/field-group/field-group.js`](./src/field-group/field-group.js)

| prop               |    type     |              default              | required | description                                                                                                                       |
| ------------------ | :---------: | :-------------------------------: | :------: | --------------------------------------------------------------------------------------------------------------------------------- |
| **children**       | `ReactNode` |                                   |   :x:    |
| **className**      |  `String`   |                                   |   :x:    |
| **dataTest**       |  `String`   | `'dhis2-uiwidgets-fieldsetfield'` |   :x:    |
| **disabled**       |  `Boolean`  |                                   |   :x:    | Disables the form controls within                                                                                                 |
| **error**          |  `custom`   |                                   |   :x:    | Applies 'error' styling to validation text for feedback. Mutually exclusive with `warning` and `valid` props                      |
| **helpText**       |  `String`   |                                   |   :x:    | Useful instructions for the user                                                                                                  |
| **label**          |  `String`   |                                   |   :x:    | Labels the Field Group                                                                                                            |
| **name**           |  `String`   |                                   |   :x:    | Name associate with the Field Group. Passed in object as argument to event handlers                                               |
| **required**       |  `Boolean`  |                                   |   :x:    | Adds an asterisk to indicate this field is required                                                                               |
| **valid**          |  `custom`   |                                   |   :x:    | Applies 'valid' styling to validation text for feedback. Mutually exclusive with `warning` and `error` props                      |
| **validationText** |  `String`   |                                   |   :x:    | Adds text at the bottom of the field to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses |
| **warning**        |  `custom`   |                                   |   :x:    | Applies 'warning' styling to validation text for feedback. Mutually exclusive with `valid` and `error` props                      |

## FieldSet

From [`src/field-set/field-set.js`](./src/field-set/field-set.js)

| prop          |    type     |          default          | required | description |
| ------------- | :---------: | :-----------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                           |   :x:    |
| **className** |  `String`   |                           |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-fieldset'` |   :x:    |
