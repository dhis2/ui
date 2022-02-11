## AlertBar

From [`alert/src/alert-bar/alert-bar.js`](../components/alert/src/alert-bar/alert-bar.js)

| prop          |    type    |          default          | required | description                                                                                             |
| ------------- | :--------: | :-----------------------: | :------: | ------------------------------------------------------------------------------------------------------- |
| **actions**   |  `custom`  |                           |   :x:    | An array of 0-2 action objects                                                                          |
| **children**  |  `String`  |                           |   :x:    | The message string for the alert                                                                        |
| **className** |  `String`  |                           |   :x:    |
| **critical**  |  `custom`  |                           |   :x:    | Alert bars with `critical` will not autohide                                                            |
| **dataTest**  |  `String`  | `'dhis2-uicore-alertbar'` |   :x:    |
| **duration**  |  `Number`  |          `8000`           |   :x:    |
| **hidden**    | `Boolean`  |                           |   :x:    |
| **icon**      |  `custom`  |          `true`           |   :x:    | A specific icon to override the default icon in the bar. If `false` is provided, no icon will be shown. |
| **onHidden**  | `Function` |                           |   :x:    |
| **permanent** | `Boolean`  |                           |   :x:    |
| **success**   |  `custom`  |                           |   :x:    |
| **warning**   |  `custom`  |                           |   :x:    | Alert bars with `warning` will not autohide                                                             |

## AlertStack

From [`alert/src/alert-stack/alert-stack.js`](../components/alert/src/alert-stack/alert-stack.js)

| prop          |    type     |           default           | required | description |
| ------------- | :---------: | :-------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                             |   :x:    |
| **className** |  `String`   |                             |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-alertstack'` |   :x:    |

## Box

From [`box/src/box.js`](../components/box/src/box.js)

| prop          |    type     |       default        | required | description |
| ------------- | :---------: | :------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                      |   :x:    |
| **className** |  `String`   |                      |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-box'` |   :x:    |
| **height**    |  `String`   |                      |   :x:    |
| **marginTop** |  `String`   |                      |   :x:    |
| **maxHeight** |  `String`   |                      |   :x:    |
| **maxWidth**  |  `String`   |                      |   :x:    |
| **minHeight** |  `String`   |                      |   :x:    |
| **minWidth**  |  `String`   |                      |   :x:    |
| **overflow**  |  `String`   |                      |   :x:    |
| **width**     |  `String`   |                      |   :x:    |

## Button

From [`button/src/button/button.js`](../components/button/src/button/button.js)

| prop             |                type                 |         default         | required | description                                                                                                                              |
| ---------------- | :---------------------------------: | :---------------------: | :------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **children**     |             `ReactNode`             |                         |   :x:    | Component to render inside the button                                                                                                    |
| **className**    |              `String`               |                         |   :x:    | A className that will be passed to the `<button>` element                                                                                |
| **dataTest**     |              `String`               | `'dhis2-uicore-button'` |   :x:    | A string that will be applied as a `data-test` attribute on the button element for identification during testing                         |
| **destructive**  |              `custom`               |                         |   :x:    | Indicates that the button makes potentially dangerous deletions or data changes. Mutually exclusive with `primary` and `secondary` props |
| **disabled**     |              `Boolean`              |                         |   :x:    | Applies a greyed-out appearance and makes the button non-interactive                                                                     |
| **icon**         |           `ReactElement`            |                         |   :x:    | An icon element to display inside the button                                                                                             |
| **initialFocus** |              `Boolean`              |                         |   :x:    | Use this variant to capture the initial focus on the page.                                                                               |
| **large**        |              `custom`               |                         |   :x:    | Makes the button large. Mutually exclusive with `small`                                                                                  |
| **loading**      |              `Boolean`              |                         |   :x:    | Sets the button into a loading state                                                                                                     |
| **name**         |              `String`               |                         |   :x:    | Sets `name` attribute on button element. Gets passed as part of the first argument to callbacks (see `onClick`).                         |
| **onBlur**       |             `Function`              |                         |   :x:    | Callback to trigger on de-focus (blur). Called with same args as `onClick`                                                               |
| **onClick**      |             `Function`              |                         |   :x:    | Callback to trigger on click. Called with args `({ value, name }, event)`                                                                |
| **onFocus**      |             `Function`              |                         |   :x:    | Callback to trigger on focus. Called with same args as `onClick`                                                                         |
| **primary**      |              `custom`               |                         |   :x:    | Applies 'primary' button appearance. Mutually exclusive with `destructive` and `secondary` props                                         |
| **secondary**    |              `custom`               |                         |   :x:    | Applies 'secondary' button appearance. Mutually exclusive with `primary` and `destructive` props                                         |
| **small**        |              `custom`               |                         |   :x:    | Makes the button small. Mutually exclusive with `large` prop                                                                             |
| **tabIndex**     |              `String`               |                         |   :x:    | Tab index for focusing the button with a keyboard                                                                                        |
| **toggled**      |              `Boolean`              |                         |   :x:    | Changes appearance of button to an on/off state                                                                                          |
| **type**         | `Enum('submit', 'reset', 'button')` |       `'button'`        |   :x:    | Sets `type` attribute on `<button>` element                                                                                              |
| **value**        |              `String`               |                         |   :x:    | Value associated with the button. Gets passed as part of the first argument to callbacks (see `onClick`).                                |

## ButtonStrip

From [`button/src/button-strip/button-strip.js`](../components/button/src/button-strip/button-strip.js)

| prop          |    type     |           default            | required | description                                                             |
| ------------- | :---------: | :--------------------------: | :------: | ----------------------------------------------------------------------- |
| **children**  | `ReactNode` |                              |   :x:    |
| **className** |  `String`   |                              |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-buttonstrip'` |   :x:    |
| **end**       |  `custom`   |                              |   :x:    | Horizontal alignment for buttons. Mutually exclusive with `middle` prop |
| **middle**    |  `custom`   |                              |   :x:    | Horizontal alignment. Mutually exclusive with `end` prop                |

## DropdownButton

From [`button/src/dropdown-button/dropdown-button.js`](../components/button/src/dropdown-button/dropdown-button.js)

| prop             |                type                 |             default             | required | description                                                                                                                                                                      |
| ---------------- | :---------------------------------: | :-----------------------------: | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**     |             `ReactNode`             |                                 |   :x:    | Children to render inside the buton                                                                                                                                              |
| **className**    |              `String`               |                                 |   :x:    |
| **component**    |           `ReactElement`            |                                 |   :x:    | Component to show/hide when button is clicked                                                                                                                                    |
| **dataTest**     |              `String`               | `'dhis2-uicore-dropdownbutton'` |   :x:    |
| **destructive**  |              `custom`               |                                 |   :x:    | Button variant. Mutually exclusive with `primary` and `secondary` props                                                                                                          |
| **disabled**     |              `Boolean`              |                                 |   :x:    | Make the button non-interactive                                                                                                                                                  |
| **icon**         |           `ReactElement`            |                                 |   :x:    |
| **initialFocus** |              `Boolean`              |                                 |   :x:    | Grants button initial focus on the page                                                                                                                                          |
| **large**        |              `custom`               |                                 |   :x:    | Button size. Mutually exclusive with `small` prop                                                                                                                                |
| **name**         |              `String`               |                                 |   :x:    |
| **onClick**      |              `custom`               |                                 |   :x:    | Callback triggered on click. Called with signature `({ name: string, value: string, open: bool }, event)` Is required when using the `open` prop to override the internal state. |
| **open**         |              `Boolean`              |                                 |   :x:    | Controls popper visibility. When implementing this prop the component becomes a controlled component                                                                             |
| **primary**      |              `custom`               |                                 |   :x:    | Button variant. Mutually exclusive with `destructive` and `secondary` props                                                                                                      |
| **secondary**    |              `custom`               |                                 |   :x:    | Button variant. Mutually exclusive with `primary` and `destructive` props                                                                                                        |
| **small**        |              `custom`               |                                 |   :x:    | Button size. Mutually exclusive with `large` prop                                                                                                                                |
| **tabIndex**     |              `String`               |                                 |   :x:    |
| **type**         | `Enum('submit', 'reset', 'button')` |                                 |   :x:    | Type of button. Can take advantage of different default behavior                                                                                                                 |
| **value**        |              `String`               |                                 |   :x:    |

## SplitButton

From [`button/src/split-button/split-button.js`](../components/button/src/split-button/split-button.js)

| prop             |                type                 |           default            | required | description                                                                                                   |
| ---------------- | :---------------------------------: | :--------------------------: | :------: | ------------------------------------------------------------------------------------------------------------- |
| **children**     |              `String`               |                              |   :x:    |
| **className**    |              `String`               |                              |   :x:    |
| **component**    |           `ReactElement`            |                              |   :x:    | Component to render when the dropdown is opened                                                               |
| **dataTest**     |              `String`               | `'dhis2-uicore-splitbutton'` |   :x:    |
| **destructive**  |              `custom`               |                              |   :x:    | Applies 'destructive' appearance to indicate purpose. Mutually exclusive with `primary` and `secondary` props |
| **disabled**     |              `Boolean`              |                              |   :x:    | Disables the button and makes it uninteractive                                                                |
| **icon**         |           `ReactElement`            |                              |   :x:    | An icon to add inside the button                                                                              |
| **initialFocus** |              `Boolean`              |                              |   :x:    | Grants the button the initial focus                                                                           |
| **large**        |              `custom`               |                              |   :x:    | Changes button size. Mutually exclusive with `small` prop                                                     |
| **name**         |              `String`               |                              |   :x:    |
| **onClick**      |             `Function`              |                              |   :x:    |
| **primary**      |              `custom`               |                              |   :x:    | Applies 'primary' appearance to indicate purpose. Mutually exclusive with `destructive` and `secondary` props |
| **secondary**    |              `custom`               |                              |   :x:    | Applies 'secondary' appearance to indicate purpose. Mutually exclusive with `primary` and `destructive` props |
| **small**        |              `custom`               |                              |   :x:    | Changes button size. Mutually exclusive with `large` prop                                                     |
| **tabIndex**     |              `String`               |                              |   :x:    |
| **type**         | `Enum('submit', 'reset', 'button')` |                              |   :x:    | Type of button. Applied to html `button` element                                                              |
| **value**        |              `String`               |                              |   :x:    | Value associated with the button. Passed in object to onClick handler                                         |

## Card

From [`card/src/card.js`](../components/card/src/card.js)

| prop          |    type     |        default        | required | description |
| ------------- | :---------: | :-------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                       |   :x:    |
| **className** |  `String`   |                       |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-card'` |   :x:    |

## Center

From [`center/src/center.js`](../components/center/src/center.js)

| prop          |               type                |             default              | required | description        |
| ------------- | :-------------------------------: | :------------------------------: | :------: | ------------------ |
| **children**  |            `ReactNode`            |                                  |   :x:    |
| **className** |             `String`              |                                  |   :x:    |
| **dataTest**  |             `String`              | `'dhis2-uicore-centeredcontent'` |   :x:    |
| **position**  | `Enum('top', 'middle', 'bottom')` |            `'middle'`            |   :x:    | Vertical alignment |

## Checkbox

From [`checkbox/src/checkbox/checkbox.js`](../components/checkbox/src/checkbox/checkbox.js)

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

From [`checkbox/src/checkbox-field/checkbox-field.js`](../components/checkbox/src/checkbox-field/checkbox-field.js)

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

## Chip

From [`chip/src/chip.js`](../components/chip/src/chip.js)

| prop          |      type      |        default        | required | description |
| ------------- | :------------: | :-------------------: | :------: | ----------- |
| **children**  |      `*`       |                       |   :x:    |
| **className** |    `String`    |                       |   :x:    |
| **dataTest**  |    `String`    | `'dhis2-uicore-chip'` |   :x:    |
| **dense**     |   `Boolean`    |                       |   :x:    |
| **disabled**  |   `Boolean`    |                       |   :x:    |
| **dragging**  |   `Boolean`    |                       |   :x:    |
| **icon**      | `ReactElement` |                       |   :x:    |
| **onClick**   |   `Function`   |                       |   :x:    |
| **onRemove**  |   `Function`   |                       |   :x:    |
| **overflow**  |   `Boolean`    |                       |   :x:    |
| **selected**  |   `Boolean`    |                       |   :x:    |

## Cover

From [`cover/src/cover.js`](../components/cover/src/cover.js)

| prop            |    type     |             default             | required | description                                     |
| --------------- | :---------: | :-----------------------------: | :------: | ----------------------------------------------- |
| **children**    | `ReactNode` |                                 |   :x:    |
| **className**   |  `String`   |                                 |   :x:    |
| **dataTest**    |  `String`   | `'dhis2-uicore-componentcover'` |   :x:    |
| **onClick**     | `Function`  |                                 |   :x:    |
| **translucent** |  `Boolean`  |                                 |   :x:    | Adds a semi-transparent background to the cover |

## CssReset

From [`css/src/css-reset/css-reset.js`](../components/css/src/css-reset/css-reset.js)

This component does not have any props.

## CssVariables

From [`css/src/css-variables/css-variables.js`](../components/css/src/css-variables/css-variables.js)

| prop           |   type    | default | required | description |
| -------------- | :-------: | :-----: | :------: | ----------- |
| **colors**     | `Boolean` | `false` |   :x:    |
| **elevations** | `Boolean` | `false` |   :x:    |
| **layers**     | `Boolean` | `false` |   :x:    |
| **spacers**    | `Boolean` | `false` |   :x:    |
| **theme**      | `Boolean` | `false` |   :x:    |

## Divider

From [`divider/src/divider.js`](../components/divider/src/divider.js)

| prop          |   type    |         default          | required | description |
| ------------- | :-------: | :----------------------: | :------: | ----------- |
| **className** | `String`  |                          |   :x:    |
| **dataTest**  | `String`  | `'dhis2-uicore-divider'` |   :x:    |
| **dense**     | `Boolean` |                          |   :x:    |
| **margin**    | `String`  |    `${spacers.dp8} 0`    |   :x:    |

## Field

From [`field/src/field/field.js`](../components/field/src/field/field.js)

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

From [`field/src/field-group/field-group.js`](../components/field/src/field-group/field-group.js)

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

From [`field/src/field-set/field-set.js`](../components/field/src/field-set/field-set.js)

| prop          |    type     |          default          | required | description |
| ------------- | :---------: | :-----------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                           |   :x:    |
| **className** |  `String`   |                           |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-fieldset'` |   :x:    |

## FileInput

From [`file-input/src/file-input/file-input.js`](../components/file-input/src/file-input/file-input.js)

| prop             |    type    |          default           | required | description                                                                                                                        |
| ---------------- | :--------: | :------------------------: | :------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| **accept**       |  `String`  |           `'*'`            |   :x:    | The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)     |
| **buttonLabel**  |  `String`  |                            |   :x:    |
| **className**    |  `String`  |                            |   :x:    |
| **dataTest**     |  `String`  | `'dhis2-uicore-fileinput'` |   :x:    |
| **disabled**     | `Boolean`  |                            |   :x:    |
| **error**        |  `custom`  |                            |   :x:    | Input status. Mutually exclusive with `warning` and `valid`                                                                        |
| **initialFocus** | `Boolean`  |                            |   :x:    |
| **large**        |  `custom`  |                            |   :x:    | Button size. Mutually exclusive with `small`                                                                                       |
| **multiple**     | `Boolean`  |                            |   :x:    | The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple) |
| **name**         |  `String`  |                            |   :x:    |
| **onBlur**       | `Function` |                            |   :x:    | Called with signature `(object, event)`                                                                                            |
| **onChange**     | `Function` |                            |   :x:    | Called with signature `(object, event)`                                                                                            |
| **onFocus**      | `Function` |                            |   :x:    | Called with signature `(object, event)`                                                                                            |
| **small**        |  `custom`  |                            |   :x:    | Button size. Mutually exclusive with `large`                                                                                       |
| **tabIndex**     |  `String`  |                            |   :x:    |
| **valid**        |  `custom`  |                            |   :x:    | Input status. Mutually exclusive with `warning` and `error`                                                                        |
| **warning**      |  `custom`  |                            |   :x:    | Input status. Mutually exclusive with `valid` and `error`                                                                          |

## FileInputField

From [`file-input/src/file-input-field/file-input-field.js`](../components/file-input/src/file-input-field/file-input-field.js)

| prop               |           type            |                default                 | required | description                                                                                                                        |
| ------------------ | :-----------------------: | :------------------------------------: | :------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| **accept**         |         `String`          |                 `'*'`                  |   :x:    | The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)     |
| **buttonLabel**    | `Union<String\|Function>` |    `() => i18n.t('Upload a file')`     |   :x:    | Text on the button                                                                                                                 |
| **buttonLabel<1>** |         `String`          |                                        |   :x:    |
| **buttonLabel<2>** |        `Function`         |                                        |   :x:    |
| **children**       |        `ReactNode`        |                                        |   :x:    |
| **className**      |         `String`          |                                        |   :x:    |
| **dataTest**       |         `String`          |   `'dhis2-uiwidgets-fileinputfield'`   |   :x:    |
| **disabled**       |         `Boolean`         |                                        |   :x:    | Disables the button                                                                                                                |
| **error**          |         `custom`          |                                        |   :x:    | Applies 'error' styling to the validation text. Mutually exclusive with `warning` and `valid` props                                |
| **helpText**       |         `String`          |                                        |   :x:    | Useful guiding text for the user                                                                                                   |
| **initialFocus**   |         `Boolean`         |                                        |   :x:    |
| **label**          |         `String`          |                                        |   :x:    | A descriptive label above the button                                                                                               |
| **large**          |         `custom`          |                                        |   :x:    | Size of the button. Mutually exclusive with the `small` prop                                                                       |
| **multiple**       |         `Boolean`         |                                        |   :x:    | The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple) |
| **name**           |         `String`          |                                        |   :x:    | Name associated with input. Passed to event handler callbacks                                                                      |
| **onBlur**         |        `Function`         |                                        |   :x:    |
| **onChange**       |        `Function`         |                                        |   :x:    | Called with signature `({ name: string, files: [] }, event)`                                                                       |
| **onFocus**        |        `Function`         |                                        |   :x:    |
| **placeholder**    | `Union<String\|Function>` | `() => i18n.t('No file uploaded yet')` |   :x:    | Placeholder below the button                                                                                                       |
| **placeholder<1>** |         `String`          |                                        |   :x:    |
| **placeholder<2>** |        `Function`         |                                        |   :x:    |
| **required**       |         `Boolean`         |                                        |   :x:    | Adds an asterisk to indicate this field is required                                                                                |
| **small**          |         `custom`          |                                        |   :x:    | Size of the button. Mutually exclusive with the `large` prop                                                                       |
| **tabIndex**       |         `String`          |                                        |   :x:    |
| **valid**          |         `custom`          |                                        |   :x:    | Applies 'valid' styling to the validation text. Mutually exclusive with `warning` and `error` props                                |
| **validationText** |         `String`          |                                        |   :x:    | Text below the button that provides validation feedback                                                                            |
| **warning**        |         `custom`          |                                        |   :x:    | Applies 'warning' styling to the validation text. Mutually exclusive with `valid` and `error` props                                |

## FileListItem

From [`file-input/src/file-list/file-list-item.js`](../components/file-input/src/file-list/file-list-item.js)

| prop           |    type    |            default            |      required      | description |
| -------------- | :--------: | :---------------------------: | :----------------: | ----------- |
| **cancelText** |  `String`  |                               |        :x:         |
| **className**  |  `String`  |                               |        :x:         |
| **dataTest**   |  `String`  | `'dhis2-uicore-filelistitem'` |        :x:         |
| **label**      |  `String`  |                               |        :x:         |
| **loading**    | `Boolean`  |                               |        :x:         |
| **onCancel**   | `Function` |                               |        :x:         |
| **onRemove**   | `Function` |                               | :white_check_mark: |
| **removeText** |  `String`  |                               |        :x:         |

## FileListPlaceholder

From [`file-input/src/file-list/file-list-placeholder.js`](../components/file-input/src/file-list/file-list-placeholder.js)

| prop         |   type   |               default                | required | description |
| ------------ | :------: | :----------------------------------: | :------: | ----------- |
| **children** | `String` |                                      |   :x:    |
| **dataTest** | `String` | `'dhis2-uicore-filelistplaceholder'` |   :x:    |

## FileList

From [`file-input/src/file-list/file-list.js`](../components/file-input/src/file-list/file-list.js)

| prop          |    type     |          default          | required | description |
| ------------- | :---------: | :-----------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                           |   :x:    |
| **className** |  `String`   |                           |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-filelist'` |   :x:    |

## HeaderBar

From [`header-bar/src/header-bar.js`](../components/header-bar/src/header-bar.js)

| prop          |   type   | default | required | description |
| ------------- | :------: | :-----: | :------: | ----------- |
| **appName**   | `String` |         |   :x:    |
| **className** | `String` |         |   :x:    |

## Logo

From [`header-bar/src/logo.js`](../components/header-bar/src/logo.js)

This component does not have any props.

## Help

From [`help/src/help.js`](../components/help/src/help.js)

| prop          |   type   |        default        | required | description |
| ------------- | :------: | :-------------------: | :------: | ----------- |
| **children**  | `String` |                       |   :x:    |
| **className** | `String` |                       |   :x:    |
| **dataTest**  | `String` | `'dhis2-uicore-help'` |   :x:    |
| **error**     | `custom` |                       |   :x:    |
| **valid**     | `custom` |                       |   :x:    |
| **warning**   | `custom` |                       |   :x:    |

## Input

From [`input/src/input/input.js`](../components/input/src/input/input.js)

| prop             |                                                                 type                                                                 |        default         | required | description                                                                                                                                 |
| ---------------- | :----------------------------------------------------------------------------------------------------------------------------------: | :--------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **autoComplete** |                                                               `String`                                                               |                        |   :x:    | The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete)                    |
| **className**    |                                                               `String`                                                               |                        |   :x:    |
| **dataTest**     |                                                               `String`                                                               | `'dhis2-uicore-input'` |   :x:    |
| **dense**        |                                                              `Boolean`                                                               |                        |   :x:    | Makes the input smaller                                                                                                                     |
| **disabled**     |                                                              `Boolean`                                                               |                        |   :x:    | Disables the input                                                                                                                          |
| **error**        |                                                               `custom`                                                               |                        |   :x:    | Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props                                     |
| **initialFocus** |                                                              `Boolean`                                                               |                        |   :x:    | The input grabs initial focus on the page                                                                                                   |
| **loading**      |                                                              `Boolean`                                                               |                        |   :x:    | Adds a loading indicator beside the input                                                                                                   |
| **max**          |                                                               `String`                                                               |                        |   :x:    | The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max), for use when `type` is `'number'`   |
| **min**          |                                                               `String`                                                               |                        |   :x:    | The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min), for use when `type` is `'number'`   |
| **name**         |                                                               `String`                                                               |                        |   :x:    | Name associated with the input. Passed to event handler callbacks in object                                                                 |
| **onBlur**       |                                                              `Function`                                                              |                        |   :x:    | Called with signature `({ name: string, value: string }, event)`                                                                            |
| **onChange**     |                                                              `Function`                                                              |                        |   :x:    | Called with signature `({ name: string, value: string }, event)`                                                                            |
| **onFocus**      |                                                              `Function`                                                              |                        |   :x:    | Called with signature `({ name: string, value: string }, event)`                                                                            |
| **placeholder**  |                                                               `String`                                                               |                        |   :x:    | Placeholder text for the input                                                                                                              |
| **readOnly**     |                                                              `Boolean`                                                               |                        |   :x:    | Makes the input read-only                                                                                                                   |
| **role**         |                                                               `String`                                                               |                        |   :x:    | Sets a role attribute on the input                                                                                                          |
| **step**         |                                                               `String`                                                               |                        |   :x:    | The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'` |
| **tabIndex**     |                                                               `String`                                                               |                        |   :x:    |
| **type**         | `Enum('text', 'number', 'password', 'email', 'url', 'tel', 'date', 'datetime', 'datetime-local', 'month', 'week', 'time', 'search')` |        `'text'`        |   :x:    | The native input `type` attribute                                                                                                           |
| **valid**        |                                                               `custom`                                                               |                        |   :x:    | Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props                                     |
| **value**        |                                                               `String`                                                               |                        |   :x:    | Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object                         |
| **warning**      |                                                               `custom`                                                               |                        |   :x:    | Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props                                     |

## InputField

From [`input/src/input-field/input-field.js`](../components/input/src/input-field/input-field.js)

| prop               |    type    |            default             | required | description                                                                                                                                 |
| ------------------ | :--------: | :----------------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **autoComplete**   |  `String`  |                                |   :x:    | The [native `autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete)                    |
| **className**      |  `String`  |                                |   :x:    |
| **dataTest**       |  `String`  | `'dhis2-uiwidgets-inputfield'` |   :x:    |
| **dense**          | `Boolean`  |                                |   :x:    | Makes the input smaller                                                                                                                     |
| **disabled**       | `Boolean`  |                                |   :x:    | Disables the input                                                                                                                          |
| **error**          |  `custom`  |                                |   :x:    | Applies 'error' appearance for validation feedback. Mutually exclusive with `valid` and `warning` props                                     |
| **helpText**       |  `String`  |                                |   :x:    | Guiding text for how to use this input                                                                                                      |
| **initialFocus**   | `Boolean`  |                                |   :x:    | The input grabs initial focus on the page                                                                                                   |
| **inputWidth**     |  `String`  |                                |   :x:    | Defines the width of the input. Can be any valid CSS measurement                                                                            |
| **label**          |  `String`  |                                |   :x:    | Label text for the input                                                                                                                    |
| **loading**        | `Boolean`  |                                |   :x:    | Adds a loading indicator beside the input                                                                                                   |
| **max**            |  `String`  |                                |   :x:    | The [native `max` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max), for use when `type` is `'number'`   |
| **min**            |  `String`  |                                |   :x:    | The [native `min` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min), for use when `type` is `'number'`   |
| **name**           |  `String`  |                                |   :x:    | Name associated with the input. Passed to event handler callbacks in object                                                                 |
| **onBlur**         | `Function` |                                |   :x:    | Called with signature `({ name: string, value: string }, event)`                                                                            |
| **onChange**       | `Function` |                                |   :x:    | Called with signature `({ name: string, value: string }, event)`                                                                            |
| **onFocus**        | `Function` |                                |   :x:    | Called with signature `({ name: string, value: string }, event)`                                                                            |
| **placeholder**    |  `String`  |                                |   :x:    | Placeholder text for the input                                                                                                              |
| **readOnly**       | `Boolean`  |                                |   :x:    | Makes the input read-only                                                                                                                   |
| **required**       | `Boolean`  |                                |   :x:    | Indicates this input is required                                                                                                            |
| **step**           |  `String`  |                                |   :x:    | The [native `step` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step), for use when `type` is `'number'` |
| **tabIndex**       |  `String`  |                                |   :x:    |
| **type**           |  `custom`  |                                |   :x:    | Type of input                                                                                                                               |
| **valid**          |  `custom`  |                                |   :x:    | Applies 'valid' appearance for validation feedback. Mutually exclusive with `error` and `warning` props                                     |
| **validationText** |  `String`  |                                |   :x:    | Text below input for validation feedback. Receives styles depending on validation status                                                    |
| **value**          |  `String`  |                                |   :x:    | Value in the input. Can be used to control the component (recommended). Passed to event handler callbacks in object                         |
| **warning**        |  `custom`  |                                |   :x:    | Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props                                     |

## IntersectionDetector

From [`intersection-detector/src/intersection-detector.js`](../components/intersection-detector/src/intersection-detector.js)

| prop                |     type      |                default                |      required      | description                                                                                                                                                                                                                                                                                     |
| ------------------- | :-----------: | :-----------------------------------: | :----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**        |      `*`      |                                       |        :x:         |
| **className**       |   `String`    |                                       |        :x:         |
| **dataTest**        |   `String`    | `'dhis2-uicore-intersectiondetector'` |        :x:         |
| **onChange**        |  `Function`   |                                       | :white_check_mark: | Called with signature `({ isIntersecting: bool })`                                                                                                                                                                                                                                              |
| **rootRef**         |    `Shape`    |                                       | :white_check_mark: | React ref on other component to detect intersections with                                                                                                                                                                                                                                       |
| **rootRef.current** | `HTMLElement` |                                       |        :x:         |
| **threshold**       |   `Number`    |                  `0`                  |        :x:         | The [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) value: a value from 0.0 to 1.0 that controls the point at which an intersecting component is considered 'intersected' or 'visible' and the onChange callback triggers |

## Label

From [`label/src/label.js`](../components/label/src/label.js)

| prop          |   type    |        default         | required | description |
| ------------- | :-------: | :--------------------: | :------: | ----------- |
| **children**  | `String`  |                        |   :x:    |
| **className** | `String`  |                        |   :x:    |
| **dataTest**  | `String`  | `'dhis2-uicore-label'` |   :x:    |
| **disabled**  | `Boolean` |                        |   :x:    |
| **htmlFor**   | `String`  |                        |   :x:    |
| **required**  | `Boolean` |                        |   :x:    |

## Layer

From [`layer/src/layer.js`](../components/layer/src/layer.js)

| prop              |            type             |        default         | required | description                                   |
| ----------------- | :-------------------------: | :--------------------: | :------: | --------------------------------------------- |
| **children**      |         `ReactNode`         |                        |   :x:    |
| **className**     |          `String`           |                        |   :x:    |
| **dataTest**      |          `String`           | `'dhis2-uicore-layer'` |   :x:    |
| **disablePortal** |          `Boolean`          |                        |   :x:    | Disable the Portal, useful for nesting layers |
| **level**         |   `Union<Number\|String>`   |        `'auto'`        |   :x:    | Z-index level                                 |
| **level<1>**      |          `Number`           |                        |   :x:    |
| **level<2>**      |          `String`           |                        |   :x:    |
| **onClick**       |         `Function`          |                        |   :x:    | Click handler                                 |
| **position**      | `Enum('absolute', 'fixed')` |       `'fixed'`        |   :x:    |
| **translucent**   |          `Boolean`          |                        |   :x:    | Adds a semi-transparent background            |

## Legend

From [`legend/src/legend.js`](../components/legend/src/legend.js)

| prop          |    type     |         default         | required | description                                    |
| ------------- | :---------: | :---------------------: | :------: | ---------------------------------------------- |
| **children**  | `ReactNode` |                         |   :x:    |
| **className** |  `String`   |                         |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-legend'` |   :x:    |
| **required**  |  `Boolean`  |                         |   :x:    | Indicates the associated field set is required |

## CircularLoader

From [`loader/src/circular-loader/circular-loader.js`](../components/loader/src/circular-loader/circular-loader.js)

| prop           |   type    |             default             | required | description |
| -------------- | :-------: | :-----------------------------: | :------: | ----------- |
| **className**  | `String`  |                                 |   :x:    |
| **dataTest**   | `String`  | `'dhis2-uicore-circularloader'` |   :x:    |
| **extrasmall** | `custom`  |                                 |   :x:    |
| **invert**     | `Boolean` |                                 |   :x:    |
| **large**      | `custom`  |                                 |   :x:    |
| **small**      | `custom`  |                                 |   :x:    |

## LinearLoader

From [`loader/src/linear-loader/linear-loader.js`](../components/loader/src/linear-loader/linear-loader.js)

| prop          |   type    |            default            |      required      | description                                           |
| ------------- | :-------: | :---------------------------: | :----------------: | ----------------------------------------------------- |
| **amount**    | `Number`  |                               | :white_check_mark: | The progression in percent without the '%' sign       |
| **className** | `String`  |                               |        :x:         |
| **dataTest**  | `String`  | `'dhis2-uicore-linearloader'` |        :x:         |
| **invert**    | `Boolean` |                               |        :x:         | Use inverted color scheme                             |
| **margin**    | `String`  |        `spacers.dp12`         |        :x:         | The margin around the loader, can be a full shorthand |
| **width**     | `String`  |           `'300px'`           |        :x:         | The width of the entire indicator                     |

## LogoIcon

From [`logo/src/logo.js`](../components/logo/src/logo.js)

| prop          |   type   |          default          | required | description |
| ------------- | :------: | :-----------------------: | :------: | ----------- |
| **className** | `String` |                           |   :x:    |
| **dataTest**  | `String` | `'dhis2-uicore-logoicon'` |   :x:    |

## LogoIconWhite

From [`logo/src/logo.js`](../components/logo/src/logo.js)

| prop          |   type   |            default             | required | description |
| ------------- | :------: | :----------------------------: | :------: | ----------- |
| **className** | `String` |                                |   :x:    |
| **dataTest**  | `String` | `'dhis2-uicore-logoiconwhite'` |   :x:    |

## Logo

From [`logo/src/logo.js`](../components/logo/src/logo.js)

| prop          |   type   |        default        | required | description |
| ------------- | :------: | :-------------------: | :------: | ----------- |
| **className** | `String` |                       |   :x:    |
| **dataTest**  | `String` | `'dhis2-uicore-logo'` |   :x:    |

## LogoWhite

From [`logo/src/logo.js`](../components/logo/src/logo.js)

| prop          |   type   |          default           | required | description |
| ------------- | :------: | :------------------------: | :------: | ----------- |
| **className** | `String` |                            |   :x:    |
| **dataTest**  | `String` | `'dhis2-uicore-logowhite'` |   :x:    |

## FlyoutMenu

From [`menu/src/flyout-menu/flyout-menu.js`](../components/menu/src/flyout-menu/flyout-menu.js)

| prop          |    type     |        default        | required | description                                          |
| ------------- | :---------: | :-------------------: | :------: | ---------------------------------------------------- |
| **children**  | `ReactNode` |                       |   :x:    | Typically, but not limited to, `MenuItem` components |
| **className** |  `String`   |                       |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-menu'` |   :x:    |
| **dense**     |  `Boolean`  |                       |   :x:    | Menu uses smaller dimensions                         |
| **maxHeight** |  `String`   |       `'auto'`        |   :x:    |
| **maxWidth**  |  `String`   |       `'380px'`       |   :x:    |

## Menu

From [`menu/src/menu/menu.js`](../components/menu/src/menu/menu.js)

| prop          |    type     |          default          | required | description                                                               |
| ------------- | :---------: | :-----------------------: | :------: | ------------------------------------------------------------------------- |
| **children**  | `ReactNode` |                           |   :x:    | Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader`              |
| **className** |  `String`   |                           |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-menulist'` |   :x:    |
| **dense**     |  `Boolean`  |                           |   :x:    | Applies `dense` property to all child components unless already specified |

## MenuDivider

From [`menu/src/menu-divider/menu-divider.js`](../components/menu/src/menu-divider/menu-divider.js)

| prop          |   type    |           default            | required | description |
| ------------- | :-------: | :--------------------------: | :------: | ----------- |
| **className** | `String`  |                              |   :x:    |
| **dataTest**  | `String`  | `'dhis2-uicore-menudivider'` |   :x:    |
| **dense**     | `Boolean` |                              |   :x:    |

## MenuItem

From [`menu/src/menu-item/menu-item.js`](../components/menu/src/menu-item/menu-item.js)

| prop              |    type     |          default          | required | description                                                                                             |
| ----------------- | :---------: | :-----------------------: | :------: | ------------------------------------------------------------------------------------------------------- |
| **active**        |  `Boolean`  |                           |   :x:    |
| **chevron**       |  `Boolean`  |                           |   :x:    |
| **children**      | `ReactNode` |                           |   :x:    | Nested menu items can become submenus. See `showSubMenu` and `toggleSubMenu` props, and 'Children' demo |
| **className**     |  `String`   |                           |   :x:    |
| **dataTest**      |  `String`   | `'dhis2-uicore-menuitem'` |   :x:    |
| **dense**         |  `Boolean`  |                           |   :x:    |
| **destructive**   |  `Boolean`  |                           |   :x:    |
| **disabled**      |  `Boolean`  |                           |   :x:    |
| **href**          |  `String`   |                           |   :x:    | For using menu item as a link                                                                           |
| **icon**          | `ReactNode` |                           |   :x:    | An icon for the left side of the menu item                                                              |
| **label**         | `ReactNode` |                           |   :x:    | Text in the menu item                                                                                   |
| **onClick**       | `Function`  |                           |   :x:    | Click handler called with signature `({ value: string }, event)`                                        |
| **showSubMenu**   |  `Boolean`  |                           |   :x:    | When true, nested menu items are shown in a Popper                                                      |
| **target**        |  `String`   |                           |   :x:    | For using menu item as a link                                                                           |
| **toggleSubMenu** | `Function`  |                           |   :x:    | On click, this function is called (without args)                                                        |
| **value**         |  `String`   |                           |   :x:    | Value associated with item. Passed as an argument to onClick handler.                                   |

## MenuSectionHeader

From [`menu/src/menu-section-header/menu-section-header.js`](../components/menu/src/menu-section-header/menu-section-header.js)

| prop            |    type     |              default               | required | description |
| --------------- | :---------: | :--------------------------------: | :------: | ----------- |
| **className**   |  `String`   |                                    |   :x:    |
| **dataTest**    |  `String`   | `'dhis2-uicore-menusectionheader'` |   :x:    |
| **dense**       |  `Boolean`  |                                    |   :x:    |
| **hideDivider** |  `Boolean`  |                                    |   :x:    |
| **label**       | `ReactNode` |                                    |   :x:    |

## Modal

From [`modal/src/modal/modal.js`](../components/modal/src/modal/modal.js)

| prop          |    type     |        default         | required | description                         |
| ------------- | :---------: | :--------------------: | :------: | ----------------------------------- |
| **children**  | `ReactNode` |                        |   :x:    |
| **className** |  `String`   |                        |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-modal'` |   :x:    |
| **fluid**     |  `Boolean`  |                        |   :x:    |
| **hide**      |  `Boolean`  |                        |   :x:    |
| **large**     |  `custom`   |                        |   :x:    |
| **onClose**   | `Function`  |                        |   :x:    | Callback used when the Modal closes |
| **position**  |  `custom`   |        `'top'`         |   :x:    |
| **small**     |  `custom`   |                        |   :x:    |

## ModalActions

From [`modal/src/modal-actions/modal-actions.js`](../components/modal/src/modal-actions/modal-actions.js)

| prop         |    type     |            default            | required | description |
| ------------ | :---------: | :---------------------------: | :------: | ----------- |
| **children** | `ReactNode` |                               |   :x:    |
| **dataTest** |  `String`   | `'dhis2-uicore-modalactions'` |   :x:    |

## ModalContent

From [`modal/src/modal-content/modal-content.js`](../components/modal/src/modal-content/modal-content.js)

| prop          |    type     |            default            | required | description |
| ------------- | :---------: | :---------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                               |   :x:    |
| **className** |  `String`   |                               |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-modalcontent'` |   :x:    |

## ModalTitle

From [`modal/src/modal-title/modal-title.js`](../components/modal/src/modal-title/modal-title.js)

| prop         |   type   |           default           | required | description |
| ------------ | :------: | :-------------------------: | :------: | ----------- |
| **children** | `String` |                             |   :x:    |
| **dataTest** | `String` | `'dhis2-uicore-modaltitle'` |   :x:    |

## Node

From [`node/src/node.js`](../components/node/src/node.js)

| prop          |      type      |        default        | required | description                                                                               |
| ------------- | :------------: | :-------------------: | :------: | ----------------------------------------------------------------------------------------- |
| **children**  |  `ReactNode`   |                       |   :x:    | Content below this level of the hierarchy; children are revealed when this leaf is 'open' |
| **className** |    `String`    |                       |   :x:    |
| **component** | `ReactElement` |                       |   :x:    | Content/label for this leaf, for example a checkbox                                       |
| **dataTest**  |    `String`    | `'dhis2-uicore-node'` |   :x:    |
| **icon**      |  `ReactNode`   |                       |   :x:    | A custom icon to use instead of a toggle arrow                                            |
| **onClose**   |   `Function`   |                       |   :x:    |
| **onOpen**    |   `Function`   |                       |   :x:    |
| **open**      |   `Boolean`    |                       |   :x:    |

## NoticeBox

From [`notice-box/src/notice-box.js`](../components/notice-box/src/notice-box.js)

| prop          |    type     |          default           | required | description                                                                |
| ------------- | :---------: | :------------------------: | :------: | -------------------------------------------------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-noticebox'` |   :x:    |
| **error**     |  `custom`   |                            |   :x:    | Applies 'error' message styles. Mutually exclusive with the `warning` prop |
| **title**     |  `String`   |                            |   :x:    |
| **warning**   |  `custom`   |                            |   :x:    | Applies 'warning' message styles. Mutually exclusive with the `error` prop |

## OrganisationUnitTree

From [`organisation-unit-tree/src/organisation-unit-tree/organisation-unit-tree.js`](../components/organisation-unit-tree/src/organisation-unit-tree/organisation-unit-tree.js)

| prop                            |               type               |             default             |      required      | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------- | :------------------------------: | :-----------------------------: | :----------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **autoExpandLoadingError**      |            `Boolean`             |                                 |        :x:         | When set, the error when loading children fails will be shown automatically                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **dataTest**                    |             `String`             | `'dhis2-uiwidgets-orgunittree'` |        :x:         |
| **disableSelection**            |            `Boolean`             |                                 |        :x:         | When set to true, no unit can be selected                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **expanded**                    |             `custom`             |                                 |        :x:         |
| **filter**                      |  `Array[]<orgUnitPathPropType>`  |              `[]`               |        :x:         | All organisation units with a path that includes the provided paths will be shown. All others will not be rendered. When not provided, all org units will be shown.                                                                                                                                                                                                                                                                                                                                                                                          |
| **forceReload**                 |            `Boolean`             |                                 |        :x:         | When true, everything will be reloaded. In order to load it again after reloading, `forceReload` has to be set to `false` and then to `true` again                                                                                                                                                                                                                                                                                                                                                                                                           |
| **handleCollapse**              |             `custom`             |                                 |        :x:         |
| **handleExpand**                |             `custom`             |                                 |        :x:         |
| **highlighted**                 |  `Array[]<orgUnitPathPropType>`  |              `[]`               |        :x:         | All units provided to "highlighted" as path will be visually highlighted. Note: The d2-ui component used two props for this: _ searchResults _ highlightSearchResults                                                                                                                                                                                                                                                                                                                                                                                        |
| **initiallyExpanded**           |  `Array[]<orgUnitPathPropType>`  |              `[]`               |        :x:         | An array of OU paths that will be expanded automatically as soon as they are encountered. The path of an OU is the UIDs of the OU and all its parent OUs separated by slashes (/) Note: This replaces "openFirstLevel" as that's redundant                                                                                                                                                                                                                                                                                                                   |
| **isUserDataViewFallback**      |            `Boolean`             |                                 |        :x:         | When provided, the 'isUserDataViewFallback' option will be sent when requesting the org units                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **onChange**                    |            `Function`            |                                 | :white_check_mark: | Will be called with the following object: `{ id: string, displayName: string, path: string, checked: boolean, selected: string[] }`                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **onChildrenLoaded**            |            `Function`            |                                 |        :x:         | Called with the children's data that was loaded                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **onCollapse**                  |            `Function`            |                                 |        :x:         | Called with `{ path: string }` with the path of the parent of the level closed                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **onExpand**                    |            `Function`            |                                 |        :x:         | Called with `{ path: string }` with the path of the parent of the level opened                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **renderNodeLabel**             |            `Function`            |    `defaultRenderNodeLabel`     |        :x:         | Renders the actual node component for each leaf, can be used to customize the node. The default function just returns the node's displayName Shape of the object passed to the callback: `` { label: string, node: { displayName: string, id: string, // Only provided once `loading` is false path?: string, // Only provided once `loading` is false children?: Array.<{ id: string, path: string, displayName: string }> }, loading: boolean, error: string, open: boolean, selected: string[], singleSelection: boolean, disableSelection: boolean, } `` |
| **roots**                       | `Union<String\|Array[]<String>>` |                                 | :white_check_mark: | Root org unit ID(s)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **roots<1>**                    |             `String`             |                                 |        :x:         |
| **roots<2>**                    |        `Array[]<String>`         |                                 |        :x:         |
| **selected**                    |  `Array[]<orgUnitPathPropType>`  |              `[]`               |        :x:         | An array of paths of selected OUs. The path of an OU is the UIDs of the OU and all its parent OUs separated by slashes (`/`)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **singleSelection**             |            `Boolean`             |                                 |        :x:         | When set, no checkboxes will be displayed and only the first selected path in `selected` will be highlighted                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **suppressAlphabeticalSorting** |            `Boolean`             |                                 |        :x:         | Turns off alphabetical sorting of units                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Label

From [`organisation-unit-tree/src/organisation-unit-node/label/label.js`](../components/organisation-unit-tree/src/organisation-unit-node/label/label.js)

| prop                            |              type              | default |      required      | description |
| ------------------------------- | :----------------------------: | :-----: | :----------------: | ----------- |
| **checked**                     |           `Boolean`            |         |        :x:         |
| **children**                    |              `*`               |         | :white_check_mark: |
| **dataTest**                    |            `String`            |         | :white_check_mark: |
| **disableSelection**            |           `Boolean`            |         |        :x:         |
| **fullPath**                    |            `String`            |         | :white_check_mark: |
| **hasChildren**                 |           `Boolean`            |         | :white_check_mark: |
| **hasSelectedDescendants**      |           `Boolean`            |         |        :x:         |
| **highlighted**                 |           `Boolean`            |         |        :x:         |
| **loading**                     |           `Boolean`            |         | :white_check_mark: |
| **node**                        |            `Shape`             |         | :white_check_mark: |
| **node.children**               |        `Array[]<Shape>`        |         |        :x:         |
| **node.children[].displayName** |            `String`            |         | :white_check_mark: |
| **node.children[].id**          |            `String`            |         | :white_check_mark: |
| **node.displayName**            |            `String`            |         | :white_check_mark: |
| **node.id**                     |            `String`            |         | :white_check_mark: |
| **node.path**                   |            `String`            |         |        :x:         |
| **onChange**                    |           `Function`           |         | :white_check_mark: |
| **onToggleOpen**                |           `Function`           |         | :white_check_mark: |
| **open**                        |           `Boolean`            |         | :white_check_mark: |
| **rootId**                      |            `String`            |         | :white_check_mark: |
| **selected**                    | `Array[]<orgUnitPathPropType>` |         |        :x:         |
| **singleSelection**             |           `Boolean`            |         |        :x:         |

## Pagination

From [`pagination/src/pagination.js`](../components/pagination/src/pagination.js)

| prop                      |           type            |                                                                  default                                                                  |      required      | description |
| ------------------------- | :-----------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :----------------: | ----------- |
| **className**             |         `String`          |                                                                                                                                           |        :x:         |
| **dataTest**              |         `String`          |                                                      `'dhis2-uiwidgets-pagination'`                                                       |        :x:         |
| **hidePageSelect**        |         `Boolean`         |                                                                                                                                           |        :x:         |
| **hidePageSizeSelect**    |         `Boolean`         |                                                                                                                                           |        :x:         |
| **hidePageSummary**       |         `Boolean`         |                                                                                                                                           |        :x:         |
| **nextPageText**          | `Union<String\|Function>` |                                                          `() => i18n.t('Next')`                                                           |        :x:         |
| **nextPageText<1>**       |         `String`          |                                                                                                                                           |        :x:         |
| **nextPageText<2>**       |        `Function`         |                                                                                                                                           |        :x:         |
| **onPageChange**          |        `Function`         |                                                                                                                                           |        :x:         |
| **onPageSizeChange**      |        `Function`         |                                                                                                                                           |        :x:         |
| **page**                  |         `Number`          |                                                                                                                                           | :white_check_mark: |
| **pageCount**             |         `Number`          |                                                                                                                                           | :white_check_mark: |
| **pageSelectText**        | `Union<String\|Function>` |                                                          `() => i18n.t('Page')`                                                           |        :x:         |
| **pageSelectText<1>**     |         `String`          |                                                                                                                                           |        :x:         |
| **pageSelectText<2>**     |        `Function`         |                                                                                                                                           |        :x:         |
| **pageSize**              |         `Number`          |                                                                                                                                           | :white_check_mark: |
| **pageSizeSelectText**    | `Union<String\|Function>` |                                                     `() => i18n.t('Items per page')`                                                      |        :x:         |
| **pageSizeSelectText<1>** |         `String`          |                                                                                                                                           |        :x:         |
| **pageSizeSelectText<2>** |        `Function`         |                                                                                                                                           |        :x:         |
| **pageSizes**             |     `Array[]<String>`     |                                            `['5', '10', '20', '30', '40', '50', '75', '100']`                                             |        :x:         |
| **pageSummaryText**       | `Union<String\|Function>` | `(interpolationObject) => i18n.t( 'Page {{page}} of {{pageCount}}, items {{firstItem}}-{{lastItem}} of {{total}}', interpolationObject )` |        :x:         |
| **pageSummaryText<1>**    |         `String`          |                                                                                                                                           |        :x:         |
| **pageSummaryText<2>**    |        `Function`         |                                                                                                                                           |        :x:         |
| **previousPageText**      | `Union<String\|Function>` |                                                        `() => i18n.t('Previous')`                                                         |        :x:         |
| **previousPageText<1>**   |         `String`          |                                                                                                                                           |        :x:         |
| **previousPageText<2>**   |        `Function`         |                                                                                                                                           |        :x:         |
| **total**                 |         `Number`          |                                                                                                                                           | :white_check_mark: |

## Popover

From [`popover/src/popover.js`](../components/popover/src/popover.js)

| prop                       |    type     |         default          |      required      | description                                                                                   |
| -------------------------- | :---------: | :----------------------: | :----------------: | --------------------------------------------------------------------------------------------- |
| **arrow**                  |  `Boolean`  |          `true`          |        :x:         | Show or hide the arrow                                                                        |
| **children**               | `ReactNode` |                          | :white_check_mark: |
| **className**              |  `String`   |                          |        :x:         |
| **dataTest**               |  `String`   | `'dhis2-uicore-popover'` |        :x:         |
| **elevation**              |  `String`   |    `elevations.e200`     |        :x:         | Box-shadow to create appearance of elevation. Use `elevations` constants from the UI library. |
| **maxWidth**               |  `Number`   |          `360`           |        :x:         |
| **observePopperResize**    |  `Boolean`  |                          |        :x:         |
| **observeReferenceResize** |  `Boolean`  |                          |        :x:         |
| **onClickOutside**         | `Function`  |                          |        :x:         |
| **placement**              |  `custom`   |         `'top'`          |        :x:         |
| **reference**              |  `custom`   |                          |        :x:         | A React ref that refers to the element the Popover should position against                    |

## Popper

From [`popper/src/popper.js`](../components/popper/src/popper.js)

| prop                       |            type             |         default         |      required      | description                                                                                                                            |
| -------------------------- | :-------------------------: | :---------------------: | :----------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| **children**               |         `ReactNode`         |                         | :white_check_mark: | Content inside the Popper                                                                                                              |
| **className**              |          `String`           |                         |        :x:         |
| **dataTest**               |          `String`           | `'dhis2-uicore-popper'` |        :x:         |
| **modifiers**              |      `Array[]<Shape>`       |          `[]`           |        :x:         | A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)                               |
| **modifiers[].name**       |          `String`           |                         |        :x:         |
| **modifiers[].options**    |          `Object`           |                         |        :x:         |
| **observePopperResize**    |          `Boolean`          |                         |        :x:         | Makes the Popper update position when the **Popper content** changes size                                                              |
| **observeReferenceResize** |          `Boolean`          |                         |        :x:         | Makes the Popper update position when the **reference element** changes size                                                           |
| **onFirstUpdate**          |         `Function`          |                         |        :x:         | A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)                               |
| **placement**              |          `custom`           |        `'auto'`         |        :x:         | A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)                               |
| **reference**              |          `custom`           |                         |        :x:         | A React ref, DOM node, or [virtual element](https://popper.js.org/docs/v2/virtual-elements/) for the popper to position itself against |
| **strategy**               | `Enum('absolute', 'fixed')` |                         |        :x:         | A property of the `createPopper` options. See [popper docs](https://popper.js.org/docs/v2/constructors/)                               |

## Radio

From [`radio/src/radio.js`](../components/radio/src/radio.js)

| prop             |    type     |        default         | required | description                                                                            |
| ---------------- | :---------: | :--------------------: | :------: | -------------------------------------------------------------------------------------- |
| **checked**      |  `Boolean`  |                        |   :x:    |
| **className**    |  `String`   |                        |   :x:    |
| **dataTest**     |  `String`   | `'dhis2-uicore-radio'` |   :x:    |
| **dense**        |  `Boolean`  |                        |   :x:    |
| **disabled**     |  `Boolean`  |                        |   :x:    |
| **error**        |  `custom`   |                        |   :x:    | Adds 'error' styling for feedback. Mutually exclusive with `valid` and `warning` props |
| **initialFocus** |  `Boolean`  |                        |   :x:    |
| **label**        | `ReactNode` |                        |   :x:    |
| **name**         |  `String`   |                        |   :x:    | Name associated with this element. Passed in object to event handler functions         |
| **onBlur**       | `Function`  |                        |   :x:    | Called with the signature `({ name: string, value: string, checked: bool }, event)`    |
| **onChange**     | `Function`  |                        |   :x:    | Called with the signature `({ name: string, value: string, checked: bool }, event)`    |
| **onFocus**      | `Function`  |                        |   :x:    | Called with the signature `({ name: string, value: string, checked: bool }, event)`    |
| **tabIndex**     |  `String`   |                        |   :x:    |
| **valid**        |  `custom`   |                        |   :x:    | Adds 'valid' styling for feedback. Mutually exclusive with `error` and `warning` props |
| **value**        |  `String`   |                        |   :x:    | Value associated with this element. Passed in object to event handler functions        |
| **warning**      |  `custom`   |                        |   :x:    | Adds 'warning' styling for feedback. Mutually exclusive with `valid` and `error` props |

## Required

From [`required/src/required.js`](../components/required/src/required.js)

| prop         |   type   | default |      required      | description |
| ------------ | :------: | :-----: | :----------------: | ----------- |
| **dataTest** | `String` |         | :white_check_mark: |

## SegmentedControl

From [`segmented-control/src/segmented-control.js`](../components/segmented-control/src/segmented-control.js)

A segmented control is used to select between options that relate to another
area of content. All of the options in a segmented control should be closely related.

Do not use a segmented control as a standalone selection, it should always be
used as a selector for other content. For example, do not use a segmented
control in place of radio buttons when making a single, standalone choice.

See specification: [Design System](https://github.com/dhis2/design-system/blob/master/molecules/segmented-control.md)

```js
import { SegmentedControl } from '@dhis2/ui'
```

| prop                   |       type       | default |      required      | description                                                                         |
| ---------------------- | :--------------: | :-----: | :----------------: | ----------------------------------------------------------------------------------- |
| **onChange**           |    `Function`    |         | :white_check_mark: | Called with the signature `({ value: string }, event)`                              |
| **options**            | `Array[]<Shape>` |         | :white_check_mark: | Options to populate the segmented control                                           |
| **options[].disabled** |    `Boolean`     |         |        :x:         |
| **options[].label**    |     `String`     |         | :white_check_mark: |
| **options[].value**    |     `String`     |         | :white_check_mark: |
| **selected**           |     `String`     |         | :white_check_mark: | An option to select; should match the `value` property of the option to be selected |

## Input

From [`select/src/multi-select/input.js`](../components/select/src/multi-select/input.js)

| prop               |       type        |  default  |      required      | description |
| ------------------ | :---------------: | :-------: | :----------------: | ----------- |
| **className**      |     `String`      |           |        :x:         |
| **clearText**      |     `custom`      |           |        :x:         |
| **clearable**      |     `Boolean`     |           |        :x:         |
| **dataTest**       |     `String`      |           | :white_check_mark: |
| **disabled**       |     `Boolean`     |           |        :x:         |
| **inputMaxHeight** |     `String`      | `'100px'` |        :x:         |
| **onChange**       |    `Function`     |           |        :x:         |
| **options**        |    `ReactNode`    |           |        :x:         |
| **placeholder**    |     `String`      |           |        :x:         |
| **prefix**         |     `String`      |           |        :x:         |
| **selected**       | `Array[]<String>` |           |        :x:         |

## Menu

From [`select/src/multi-select/menu.js`](../components/select/src/multi-select/menu.js)

| prop         |       type        | default |      required      | description |
| ------------ | :---------------: | :-----: | :----------------: | ----------- |
| **dataTest** |     `String`      |         | :white_check_mark: |
| **empty**    |    `ReactNode`    |  `''`   |        :x:         |
| **onChange** |    `Function`     |         |        :x:         |
| **options**  |    `ReactNode`    |         |        :x:         |
| **selected** | `Array[]<String>` |         |        :x:         |

## MultiSelect

From [`select/src/multi-select/multi-select.js`](../components/select/src/multi-select/multi-select.js)

| prop                  |       type        |           default            | required | description                             |
| --------------------- | :---------------: | :--------------------------: | :------: | --------------------------------------- |
| **children**          |    `ReactNode`    |                              |   :x:    |
| **className**         |     `String`      |                              |   :x:    |
| **clearText**         |     `custom`      |                              |   :x:    | Required if `clearable` prop is `true`  |
| **clearable**         |     `Boolean`     |                              |   :x:    | Adds a 'clear' option to the menu       |
| **dataTest**          |     `String`      | `'dhis2-uicore-multiselect'` |   :x:    |
| **dense**             |     `Boolean`     |                              |   :x:    |
| **disabled**          |     `Boolean`     |                              |   :x:    |
| **empty**             |    `ReactNode`    |                              |   :x:    |
| **error**             |     `custom`      |                              |   :x:    |
| **filterPlaceholder** |     `String`      |                              |   :x:    |
| **filterable**        |     `Boolean`     |                              |   :x:    | Adds a 'filter' field to the menu       |
| **initialFocus**      |     `Boolean`     |                              |   :x:    |
| **inputMaxHeight**    |     `String`      |                              |   :x:    |
| **loading**           |     `Boolean`     |                              |   :x:    |
| **loadingText**       |     `String`      |                              |   :x:    |
| **maxHeight**         |     `String`      |                              |   :x:    |
| **noMatchText**       |     `custom`      |                              |   :x:    | Required if `filterable` prop is `true` |
| **onBlur**            |    `Function`     |                              |   :x:    |
| **onChange**          |    `Function`     |                              |   :x:    |
| **onFocus**           |    `Function`     |                              |   :x:    |
| **placeholder**       |     `String`      |                              |   :x:    |
| **prefix**            |     `String`      |                              |   :x:    |
| **selected**          | `Array[]<String>` |             `[]`             |   :x:    |
| **tabIndex**          |     `String`      |                              |   :x:    |
| **valid**             |     `custom`      |                              |   :x:    |
| **warning**           |     `custom`      |                              |   :x:    |

## MultiSelectField

From [`select/src/multi-select-field/multi-select-field.js`](../components/select/src/multi-select-field/multi-select-field.js)

| prop                     |             type             |                 default                  | required | description                                                                                          |
| ------------------------ | :--------------------------: | :--------------------------------------: | :------: | ---------------------------------------------------------------------------------------------------- |
| **children**             |         `ReactNode`          |                                          |   :x:    | Should be `MultiSelectOption` components                                                             |
| **className**            |           `String`           |                                          |   :x:    |
| **clearText**            |  `Union<String\|Function>`   |         `() => i18n.t('Clear')`          |   :x:    | Label for the button that clears selections                                                          |
| **clearText<1>**         |           `String`           |                                          |   :x:    |
| **clearText<2>**         |          `Function`          |                                          |   :x:    |
| **clearable**            |          `Boolean`           |                                          |   :x:    | Adds a button to the MultiSelect that clears selections when pressed                                 |
| **dataTest**             |           `String`           |   `'dhis2-uiwidgets-multiselectfield'`   |   :x:    |
| **dense**                |          `Boolean`           |                                          |   :x:    | Makes the MultiSelect smaller                                                                        |
| **disabled**             |          `Boolean`           |                                          |   :x:    | Disables the MultiSelect                                                                             |
| **empty**                | `Union<ReactNode\|Function>` |     `() => i18n.t('No data found')`      |   :x:    | Text to display when there are no options                                                            |
| **empty<1>**             |         `ReactNode`          |                                          |   :x:    |
| **empty<2>**             |          `Function`          |                                          |   :x:    |
| **error**                |           `custom`           |                                          |   :x:    | Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props |
| **filterPlaceholder**    | `Union<ReactNode\|Function>` | `() => i18n.t('Type to filter options')` |   :x:    | Placeholder text to show in the filter field when it is empty                                        |
| **filterPlaceholder<1>** |         `ReactNode`          |                                          |   :x:    |
| **filterPlaceholder<2>** |          `Function`          |                                          |   :x:    |
| **filterable**           |          `Boolean`           |                                          |   :x:    | Adds a field to filter options                                                                       |
| **helpText**             |           `String`           |                                          |   :x:    | Useful guiding text to display below the MultiSelect                                                 |
| **initialFocus**         |          `Boolean`           |                                          |   :x:    | Grabs initial focus on the page                                                                      |
| **inputMaxHeight**       |           `String`           |                                          |   :x:    | Constrains the height of the input                                                                   |
| **inputWidth**           |           `String`           |                                          |   :x:    | Sets the width of the input. Can be any valid CSS measurement                                        |
| **label**                |           `String`           |                                          |   :x:    | Text for the label above the MultiSelect                                                             |
| **loading**              |          `Boolean`           |                                          |   :x:    | Applies a loading appearance to the dropdown options                                                 |
| **loadingText**          |  `Union<String\|Function>`   |    `() => i18n.t('Loading options')`     |   :x:    | Text to display when `loading` is true                                                               |
| **loadingText<1>**       |           `String`           |                                          |   :x:    |
| **loadingText<2>**       |          `Function`          |                                          |   :x:    |
| **maxHeight**            |           `String`           |                                          |   :x:    | Constrains height of the MultiSelect                                                                 |
| **noMatchText**          |  `Union<String\|Function>`   |    `() => i18n.t('No options found')`    |   :x:    | Text to display when there are no filter results                                                     |
| **noMatchText<1>**       |           `String`           |                                          |   :x:    |
| **noMatchText<2>**       |          `Function`          |                                          |   :x:    |
| **onBlur**               |          `Function`          |                                          |   :x:    | Called with signature `({ selected: [String] }, event)`                                              |
| **onChange**             |          `Function`          |                                          |   :x:    | Called with signature `({ selected: [String] }, event)`                                              |
| **onFocus**              |          `Function`          |                                          |   :x:    | Called with signature `({ selected: [String] }, event)`                                              |
| **placeholder**          |           `String`           |                                          |   :x:    | Placeholder text when the MultiSelect is empty                                                       |
| **prefix**               |           `String`           |                                          |   :x:    | Leading text to prefix selections                                                                    |
| **required**             |          `Boolean`           |                                          |   :x:    | Indicates that a selection is required                                                               |
| **selected**             |      `Array[]<String>`       |                   `[]`                   |   :x:    | Selected items in the MultiSelect (each string should refer to the item's `value` attribute)         |
| **tabIndex**             |           `String`           |                                          |   :x:    |
| **valid**                |           `custom`           |                                          |   :x:    | Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props |
| **validationText**       |           `String`           |                                          |   :x:    | Text to provide form validation feedback. Receives styles according to validation status             |
| **warning**              |           `custom`           |                                          |   :x:    | Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props |

## MultiSelectOption

From [`select/src/multi-select-option/multi-select-option.js`](../components/select/src/multi-select-option/multi-select-option.js)

| prop          |    type    |              default               |      required      | description |
| ------------- | :--------: | :--------------------------------: | :----------------: | ----------- |
| **active**    | `Boolean`  |                                    |        :x:         |
| **className** |  `String`  |                                    |        :x:         |
| **dataTest**  |  `String`  | `'dhis2-uicore-multiselectoption'` |        :x:         |
| **disabled**  | `Boolean`  |                                    |        :x:         |
| **label**     |  `String`  |                                    | :white_check_mark: |
| **onClick**   | `Function` |                                    |        :x:         |
| **value**     |  `String`  |                                    | :white_check_mark: |

## Input

From [`select/src/single-select/input.js`](../components/select/src/single-select/input.js)

| prop               |    type     |  default  |      required      | description |
| ------------------ | :---------: | :-------: | :----------------: | ----------- |
| **className**      |  `String`   |           |        :x:         |
| **clearText**      |  `custom`   |           |        :x:         |
| **clearable**      |  `Boolean`  |           |        :x:         |
| **dataTest**       |  `String`   |           | :white_check_mark: |
| **disabled**       |  `Boolean`  |           |        :x:         |
| **inputMaxHeight** |  `String`   | `'100px'` |        :x:         |
| **onChange**       | `Function`  |           |        :x:         |
| **options**        | `ReactNode` |           |        :x:         |
| **placeholder**    |  `String`   |           |        :x:         |
| **prefix**         |  `String`   |           |        :x:         |
| **selected**       |  `String`   |           |        :x:         |

## Menu

From [`select/src/single-select/menu.js`](../components/select/src/single-select/menu.js)

| prop                 |    type     | default |      required      | description |
| -------------------- | :---------: | :-----: | :----------------: | ----------- |
| **dataTest**         |  `String`   |         | :white_check_mark: |
| **empty**            | `ReactNode` |  `''`   |        :x:         |
| **handleClose**      | `Function`  |         |        :x:         |
| **handleFocusInput** | `Function`  |         |        :x:         |
| **onChange**         | `Function`  |         |        :x:         |
| **options**          | `ReactNode` |         |        :x:         |
| **selected**         |  `String`   |         |        :x:         |

## SingleSelect

From [`select/src/single-select/single-select.js`](../components/select/src/single-select/single-select.js)

| prop                  |    type     |            default            | required | description                                                                                             |
| --------------------- | :---------: | :---------------------------: | :------: | ------------------------------------------------------------------------------------------------------- |
| **children**          | `ReactNode` |                               |   :x:    |
| **className**         |  `String`   |                               |   :x:    |
| **clearText**         |  `custom`   |                               |   :x:    | Text on button that clears selection. Required if `clearable` prop is true                              |
| **clearable**         |  `Boolean`  |                               |   :x:    | Adds a button to clear selection                                                                        |
| **dataTest**          |  `String`   | `'dhis2-uicore-singleselect'` |   :x:    |
| **dense**             |  `Boolean`  |                               |   :x:    |
| **disabled**          |  `Boolean`  |                               |   :x:    |
| **empty**             | `ReactNode` |                               |   :x:    | Text or component to display when there are no options                                                  |
| **error**             |  `custom`   |                               |   :x:    | Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props |
| **filterPlaceholder** |  `String`   |                               |   :x:    |
| **filterable**        |  `Boolean`  |                               |   :x:    | Adds a filter field to add text to filter options                                                       |
| **initialFocus**      |  `Boolean`  |                               |   :x:    |
| **inputMaxHeight**    |  `String`   |                               |   :x:    |
| **loading**           |  `Boolean`  |                               |   :x:    |
| **loadingText**       |  `String`   |                               |   :x:    |
| **maxHeight**         |  `String`   |                               |   :x:    |
| **noMatchText**       |  `custom`   |                               |   :x:    | Text to show when filter returns no results. Required if `filterable` prop is true                      |
| **onBlur**            | `Function`  |                               |   :x:    |
| **onChange**          | `Function`  |                               |   :x:    |
| **onFocus**           | `Function`  |                               |   :x:    |
| **placeholder**       |  `String`   |                               |   :x:    |
| **prefix**            |  `String`   |                               |   :x:    |
| **selected**          |  `String`   |             `''`              |   :x:    |
| **tabIndex**          |  `String`   |                               |   :x:    |
| **valid**             |  `custom`   |                               |   :x:    | Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `error` props |
| **warning**           |  `custom`   |                               |   :x:    | Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props |

## SingleSelectField

From [`select/src/single-select-field/single-select-field.js`](../components/select/src/single-select-field/single-select-field.js)

| prop                     |             type             |                 default                  | required | description                                                                                          |
| ------------------------ | :--------------------------: | :--------------------------------------: | :------: | ---------------------------------------------------------------------------------------------------- |
| **children**             |         `ReactNode`          |                                          |   :x:    | Should be `SingleSelectOption` components                                                            |
| **className**            |           `String`           |                                          |   :x:    |
| **clearText**            |  `Union<String\|Function>`   |         `() => i18n.t('Clear')`          |   :x:    | Label for the button that clears selections                                                          |
| **clearText<1>**         |           `String`           |                                          |   :x:    |
| **clearText<2>**         |          `Function`          |                                          |   :x:    |
| **clearable**            |          `Boolean`           |                                          |   :x:    | Adds a button to the SingleSelect that clears selections when pressed                                |
| **dataTest**             |           `String`           |  `'dhis2-uiwidgets-singleselectfield'`   |   :x:    |
| **dense**                |          `Boolean`           |                                          |   :x:    | Makes the SingleSelect smaller                                                                       |
| **disabled**             |          `Boolean`           |                                          |   :x:    | Disables the SingleSelect                                                                            |
| **empty**                | `Union<ReactNode\|Function>` |     `() => i18n.t('No data found')`      |   :x:    | Text to display when there are no options                                                            |
| **empty<1>**             |         `ReactNode`          |                                          |   :x:    |
| **empty<2>**             |          `Function`          |                                          |   :x:    |
| **error**                |           `custom`           |                                          |   :x:    | Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props |
| **filterPlaceholder**    | `Union<ReactNode\|Function>` | `() => i18n.t('Type to filter options')` |   :x:    | Placeholder text to show in the filter field when it is empty                                        |
| **filterPlaceholder<1>** |         `ReactNode`          |                                          |   :x:    |
| **filterPlaceholder<2>** |          `Function`          |                                          |   :x:    |
| **filterable**           |          `Boolean`           |                                          |   :x:    | Adds a field to filter options                                                                       |
| **helpText**             |           `String`           |                                          |   :x:    | Useful guiding text to display below the SingleSelect                                                |
| **initialFocus**         |          `Boolean`           |                                          |   :x:    | Grabs initial focus on the page                                                                      |
| **inputMaxHeight**       |           `String`           |                                          |   :x:    | Constrains the height of the input                                                                   |
| **inputWidth**           |           `String`           |                                          |   :x:    | Sets the width of the input. Can be any valid CSS measurement                                        |
| **label**                |           `String`           |                                          |   :x:    | Text for the label above the SingleSelect                                                            |
| **loading**              |          `Boolean`           |                                          |   :x:    | Applies a loading appearance to the dropdown options                                                 |
| **loadingText**          |  `Union<String\|Function>`   |    `() => i18n.t('Loading options')`     |   :x:    | Text to display when `loading` is true                                                               |
| **loadingText<1>**       |           `String`           |                                          |   :x:    |
| **loadingText<2>**       |          `Function`          |                                          |   :x:    |
| **maxHeight**            |           `String`           |                                          |   :x:    | Constrains height of the SingleSelect                                                                |
| **noMatchText**          |  `Union<String\|Function>`   |    `() => i18n.t('No options found')`    |   :x:    | Text to display when there are no filter results                                                     |
| **noMatchText<1>**       |           `String`           |                                          |   :x:    |
| **noMatchText<2>**       |          `Function`          |                                          |   :x:    |
| **onBlur**               |          `Function`          |                                          |   :x:    | Called with signature `({ selected: string }, event)`                                                |
| **onChange**             |          `Function`          |                                          |   :x:    | Called with signature `({ selected: string }, event)`                                                |
| **onFocus**              |          `Function`          |                                          |   :x:    | Called with signature `({ selected: string }, event)`                                                |
| **placeholder**          |           `String`           |                                          |   :x:    | Placeholder text when the SingleSelect is empty                                                      |
| **prefix**               |           `String`           |                                          |   :x:    | Leading text to prefix selections                                                                    |
| **required**             |          `Boolean`           |                                          |   :x:    | Indicates that a selection is required                                                               |
| **selected**             |           `String`           |                   `''`                   |   :x:    | Selected item in the SingleSelect (the string should refer to the item's `value` attribute)          |
| **tabIndex**             |           `String`           |                                          |   :x:    |
| **valid**                |           `custom`           |                                          |   :x:    | Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props |
| **validationText**       |           `String`           |                                          |   :x:    | Text to provide form validation feedback. Receives styles according to validation status             |
| **warning**              |           `custom`           |                                          |   :x:    | Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props |

## SingleSelectOption

From [`select/src/single-select-option/single-select-option.js`](../components/select/src/single-select-option/single-select-option.js)

| prop          |    type    |               default               |      required      | description |
| ------------- | :--------: | :---------------------------------: | :----------------: | ----------- |
| **active**    | `Boolean`  |                                     |        :x:         |
| **className** |  `String`  |                                     |        :x:         |
| **dataTest**  |  `String`  | `'dhis2-uicore-singleselectoption'` |        :x:         |
| **disabled**  | `Boolean`  |                                     |        :x:         |
| **label**     |  `String`  |                                     | :white_check_mark: |
| **onClick**   | `Function` |                                     |        :x:         |
| **value**     |  `String`  |                                     | :white_check_mark: |

## SelectorBar

From [`selector-bar/src/selector-bar/selector-bar.js`](../components/selector-bar/src/selector-bar/selector-bar.js)

| prop                       |    type    |         default          |      required      | description |
| -------------------------- | :--------: | :----------------------: | :----------------: | ----------- |
| **additionalContent**      |    `*`     |                          |        :x:         |
| **children**               |    `*`     |                          | :white_check_mark: |
| **className**              |  `String`  |                          |        :x:         |
| **dataTest**               |  `String`  | `'dhis2-ui-selectorbar'` |        :x:         |
| **disableClearSelections** | `Boolean`  |                          |        :x:         |
| **onClearSelectionClick**  | `Function` |                          |        :x:         |

## SelectorBarItem

From [`selector-bar/src/selector-bar-item/selector-bar-item.js`](../components/selector-bar/src/selector-bar-item/selector-bar-item.js)

The reason this component expects the "open" state and "setOpen" function is
because certain actions inside the props.children might have to set "open"
to false as well.
A good example is selecting a value (which is not a click outside) and this
component neither has any control over that component nor does it have a way
to "observe" that behavior. Especially for selection bar items that allow
"multiple" selections, this would be more or less impossible to predict
inside this component

| prop               |    type    |           default            |      required      | description |
| ------------------ | :--------: | :--------------------------: | :----------------: | ----------- |
| **children**       |    `*`     |                              | :white_check_mark: |
| **className**      |  `String`  |                              |        :x:         |
| **dataTest**       |  `String`  | `'dhis2-ui-selectorbaritem'` |        :x:         |
| **disabled**       | `Boolean`  |                              |        :x:         |
| **label**          |  `String`  |                              | :white_check_mark: |
| **noValueMessage** |  `String`  |                              | :white_check_mark: |
| **open**           | `Boolean`  |                              | :white_check_mark: |
| **setOpen**        | `Function` |                              | :white_check_mark: |
| **value**          |  `String`  |                              |        :x:         |

## SharingDialog

From [`sharing-dialog/src/sharing-dialog.js`](../components/sharing-dialog/src/sharing-dialog.js)

| prop                                        |        type        |                                    default                                     |      required      | description                                                 |
| ------------------------------------------- | :----------------: | :----------------------------------------------------------------------------: | :----------------: | ----------------------------------------------------------- |
| **id**                                      |      `String`      |                                                                                | :white_check_mark: | The id of the object to share                               |
| **initialSharingSettings**                  |      `Shape`       | `{ name: '', allowPublic: true, public: ACCESS_NONE, groups: {}, users: {}, }` |        :x:         | Used to seed the component with data to show whilst loading |
| **initialSharingSettings.allowPublic**      |     `Boolean`      |                                                                                | :white_check_mark: |
| **initialSharingSettings.groups**           | `Object[#]<Shape>` |                                                                                |        :x:         |
| **initialSharingSettings.groups[#].access** |      `String`      |                                                                                | :white_check_mark: |
| **initialSharingSettings.groups[#].id**     |      `String`      |                                                                                | :white_check_mark: |
| **initialSharingSettings.groups[#].name**   |      `String`      |                                                                                | :white_check_mark: |
| **initialSharingSettings.name**             |      `String`      |                                                                                |        :x:         |
| **initialSharingSettings.public**           |   `Enum(import {   |

    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,

} from './constants.js', import {
ACCESS_NONE,
ACCESS_VIEW_ONLY,
ACCESS_VIEW_AND_EDIT,
VISUALIZATION,
DASHBOARD,
} from './constants.js', import {
ACCESS_NONE,
ACCESS_VIEW_ONLY,
ACCESS_VIEW_AND_EDIT,
VISUALIZATION,
DASHBOARD,
} from './constants.js')`| | :x: | **initialSharingSettings.users** |`Object[#]<Shape>`| | :x: | **initialSharingSettings.users[#].access** |`String`| | :white_check_mark: | **initialSharingSettings.users[#].id** |`String`| | :white_check_mark: | **initialSharingSettings.users[#].name** |`String`| | :white_check_mark: | **onClose** |`Function`|`() => {}`| :x: | **onError** |`Function`|`() => {}`| :x: | **onSave** |`Function`|`() => {}`| :x: | **type** |`Enum(import {
ACCESS_NONE,
ACCESS_VIEW_ONLY,
ACCESS_VIEW_AND_EDIT,
VISUALIZATION,
DASHBOARD,
} from './constants.js', import {
ACCESS_NONE,
ACCESS_VIEW_ONLY,
ACCESS_VIEW_AND_EDIT,
VISUALIZATION,
DASHBOARD,
} from './constants.js')` | | :white_check_mark: | The type of object to share

## Modal

From [`sharing-dialog/src/modal/modal.js`](../components/sharing-dialog/src/modal/modal.js)

| prop         |    type     | default |      required      | description |
| ------------ | :---------: | :-----: | :----------------: | ----------- |
| **children** | `ReactNode` |         | :white_check_mark: |
| **name**     |  `String`   |         |        :x:         |
| **onClose**  | `Function`  |         |        :x:         |

## Switch

From [`switch/src/switch/switch.js`](../components/switch/src/switch/switch.js)

| prop             |    type     |         default         | required | description                                                                                              |
| ---------------- | :---------: | :---------------------: | :------: | -------------------------------------------------------------------------------------------------------- |
| **ariaLabel**    |  `String`   |                         |   :x:    | Sets an aria-label attribute on the input                                                                |
| **checked**      |  `Boolean`  |         `false`         |   :x:    |
| **className**    |  `String`   |                         |   :x:    |
| **dataTest**     |  `String`   | `'dhis2-uicore-switch'` |   :x:    |
| **dense**        |  `Boolean`  |                         |   :x:    | Makes the switch smaller for information-dense layouts                                                   |
| **disabled**     |  `Boolean`  |                         |   :x:    | Disables the switch                                                                                      |
| **error**        |  `custom`   |                         |   :x:    | Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` prop types |
| **initialFocus** |  `Boolean`  |                         |   :x:    | Grab initial focus on the page                                                                           |
| **label**        | `ReactNode` |                         |   :x:    | Label for the switch. Can be a string or an element, for example an image                                |
| **name**         |  `String`   |                         |   :x:    | Name associated with the switch. Passed to event handlers in object                                      |
| **onBlur**       | `Function`  |                         |   :x:    | Called with signature `({ name: string, value: string, checked: bool }, event)`                          |
| **onChange**     | `Function`  |                         |   :x:    | Called with signature `({ name: string, value: string, checked: bool }, event)`                          |
| **onFocus**      | `Function`  |                         |   :x:    | Called with signature `({ name: string, value: string, checked: bool }, event)`                          |
| **role**         |  `String`   |       `'switch'`        |   :x:    | Sets a role attribute on the input                                                                       |
| **tabIndex**     |  `String`   |                         |   :x:    |
| **valid**        |  `custom`   |                         |   :x:    | Applies 'valid' styles for validation feedback. Mutually exclusive with `error` and `warning` prop types |
| **value**        |  `String`   |                         |   :x:    | Value associated with the switch. Passed to event handlers in object                                     |
| **warning**      |  `custom`   |                         |   :x:    | Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` prop types |

## SwitchField

From [`switch/src/switch-field/switch-field.js`](../components/switch/src/switch-field/switch-field.js)

| prop               |    type     |             default             | required | description                                                                                                             |
| ------------------ | :---------: | :-----------------------------: | :------: | ----------------------------------------------------------------------------------------------------------------------- |
| **checked**        |  `Boolean`  |                                 |   :x:    |
| **className**      |  `String`   |                                 |   :x:    |
| **dataTest**       |  `String`   | `'dhis2-uiwidgets-switchfield'` |   :x:    |
| **dense**          |  `Boolean`  |                                 |   :x:    | Smaller dimensions for information-dense layouts                                                                        |
| **disabled**       |  `Boolean`  |                                 |   :x:    | Disables the switch                                                                                                     |
| **error**          |  `custom`   |                                 |   :x:    | Applies 'error' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `valid` props |
| **helpText**       |  `String`   |                                 |   :x:    | Useful instructions for the user                                                                                        |
| **initialFocus**   |  `Boolean`  |                                 |   :x:    |
| **label**          | `ReactNode` |                                 |   :x:    | Labels the switch                                                                                                       |
| **name**           |  `String`   |                                 |   :x:    | Name associate with the switch. Passed in object as argument to event handlers                                          |
| **onBlur**         | `Function`  |                                 |   :x:    | Called with signature ({ name: string, value: string, checked: bool }, event)                                           |
| **onChange**       | `Function`  |                                 |   :x:    | Called with signature ({ name: string, value: string, checked: bool }, event)                                           |
| **onFocus**        | `Function`  |                                 |   :x:    | Called with signature ({ name: string, value: string, checked: bool }, event)                                           |
| **required**       |  `Boolean`  |                                 |   :x:    | Adds an asterisk to indicate this field is required                                                                     |
| **tabIndex**       |  `String`   |                                 |   :x:    |
| **valid**          |  `custom`   |                                 |   :x:    | Applies 'valid' styling to switch and validation text for feedback. Mutually exclusive with `warning` and `error` props |
| **validationText** |  `String`   |                                 |   :x:    | Adds text below the switch to provide validation feedback. Acquires styles from `valid`, `warning` and `error` statuses |
| **value**          |  `String`   |                                 |   :x:    | Value associated with the switch. Passed in object as argument to event handlers                                        |
| **warning**        |  `custom`   |                                 |   :x:    | Applies 'warning' styling to switch and validation text for feedback. Mutually exclusive with `valid` and `error` props |

## Tab

From [`tab/src/tab/tab.js`](../components/tab/src/tab/tab.js)

| prop          |      type      |       default        | required | description                             |
| ------------- | :------------: | :------------------: | :------: | --------------------------------------- |
| **children**  |  `ReactNode`   |                      |   :x:    |
| **className** |    `String`    |                      |   :x:    |
| **dataTest**  |    `String`    | `'dhis2-uicore-tab'` |   :x:    |
| **disabled**  |   `Boolean`    |                      |   :x:    |
| **icon**      | `ReactElement` |                      |   :x:    |
| **onClick**   |   `Function`   |                      |   :x:    | Called with the signature `({}, event)` |
| **selected**  |   `Boolean`    |                      |   :x:    | Indicates this tab is selected          |

## TabBar

From [`tab/src/tab-bar/tab-bar.js`](../components/tab/src/tab-bar/tab-bar.js)

| prop           |    type     |         default         | required | description                                                                                                                                                               |
| -------------- | :---------: | :---------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**   | `ReactNode` |                         |   :x:    |
| **className**  |  `String`   |                         |   :x:    |
| **dataTest**   |  `String`   | `'dhis2-uicore-tabbar'` |   :x:    |
| **fixed**      |  `Boolean`  |                         |   :x:    | Fixed tabs fill the width of their container. If false (i.e. fluid), tabs take up an amount of space defined by the tab name. Fluid tabs should be used most of the time. |
| **scrollable** |  `Boolean`  |                         |   :x:    | Enables horizontal scrolling for many tabs that don't fit the width of the container                                                                                      |

## DataTableCell

From [`table/src/data-table/data-table-cell.js`](../components/table/src/data-table/data-table-cell.js)

| prop            |               type                |            default             | required | description                                                          |
| --------------- | :-------------------------------: | :----------------------------: | :------: | -------------------------------------------------------------------- |
| **active**      |             `Boolean`             |                                |   :x:    | To toggle background color, for example for editing                  |
| **align**       | `Enum('left', 'center', 'right')` |            `'left'`            |   :x:    |
| **bordered**    |             `Boolean`             |                                |   :x:    |
| **children**    |            `ReactNode`            |                                |   :x:    |
| **className**   |             `String`              |                                |   :x:    |
| **colSpan**     |             `String`              |                                |   :x:    |
| **dataTest**    |             `String`              | `'dhis2-uicore-datatablecell'` |   :x:    |
| **error**       |             `custom`              |                                |   :x:    | Mutually exclusive with muted and valid                              |
| **fixed**       |             `Boolean`             |                                |   :x:    | When true a TableHeaderCell with sticky positioning will be rendered |
| **large**       |             `Boolean`             |                                |   :x:    |
| **left**        |             `custom`              |            `'auto'`            |   :x:    | Required when fixed                                                  |
| **muted**       |             `custom`              |                                |   :x:    | Mutually exclusive with error and valid                              |
| **onClick**     |            `Function`             |                                |   :x:    |
| **role**        |             `String`              |                                |   :x:    |
| **rowSpan**     |             `String`              |                                |   :x:    |
| **scope**       |             `String`              |                                |   :x:    |
| **staticStyle** |             `Boolean`             |                                |   :x:    | Surpress hover and active event styles                               |
| **tag**         |        `Enum('td', 'th')`         |                                |   :x:    | Render a TableDataCell or TableHeaderCell respectively               |
| **valid**       |             `custom`              |                                |   :x:    | Mutually exclusive with error and muted                              |
| **width**       |             `custom`              |            `'auto'`            |   :x:    | Required when fixed                                                  |

## DataTable

From [`table/src/data-table/data-table.js`](../components/table/src/data-table/data-table.js)

| prop             |                     type                      |          default           | required | description                                                                                                                                                                                                   |
| ---------------- | :-------------------------------------------: | :------------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**     |                  `ReactNode`                  |                            |   :x:    | Should be `<DataTableHead>`, `<DataTableBody>`, and `<DataTableFoot>` components                                                                                                                              |
| **className**    |                   `String`                    |                            |   :x:    |
| **dataTest**     |                   `String`                    | `'dhis2-uicore-datatable'` |   :x:    |
| **layout**       | `Enum('auto', 'fixed', 'initial', 'inherit')` |          `'auto'`          |   :x:    | Sets the `datatable-layout` property. Switching to `fixed` can prevent style issues when dealing with a datatable with multiple frozen columns or when dealing with filter elements in the datatable headers. |
| **role**         |                   `String`                    |                            |   :x:    |
| **scrollHeight** |                   `String`                    |                            |   :x:    | Sets max-height of scrollbox                                                                                                                                                                                  |
| **scrollWidth**  |                   `String`                    |                            |   :x:    | Sets max-width of scrollbox                                                                                                                                                                                   |
| **width**        |                   `String`                    |          `'100%'`          |   :x:    | Sets the `width` property. Providing an explicit width can prevent style issues when dealing with horizontally scrolling datatables with a fixed layout.                                                      |

## StackedTableBody

From [`table/src/stacked-table/stacked-table-body.js`](../components/table/src/stacked-table/stacked-table-body.js)

| prop          |    type     |              default              | required | description |
| ------------- | :---------: | :-------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                   |   :x:    |
| **className** |  `String`   |                                   |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablebody'` |   :x:    |

## StackedTableCellHead

From [`table/src/stacked-table/stacked-table-cell-head.js`](../components/table/src/stacked-table/stacked-table-cell-head.js)

| prop          |   type   |                default                | required | description |
| ------------- | :------: | :-----------------------------------: | :------: | ----------- |
| **children**  | `String` |                 `''`                  |   :x:    |
| **className** | `String` |                                       |   :x:    |
| **colSpan**   | `String` |                                       |   :x:    |
| **dataTest**  | `String` | `'dhis2-uicore-stackedtablecellhead'` |   :x:    |
| **rowSpan**   | `String` |                                       |   :x:    |

## StackedTableCell

From [`table/src/stacked-table/stacked-table-cell.js`](../components/table/src/stacked-table/stacked-table-cell.js)

| prop             |       type        |              default              | required | description |
| ---------------- | :---------------: | :-------------------------------: | :------: | ----------- |
| **children**     |    `ReactNode`    |                                   |   :x:    |
| **className**    |     `String`      |                                   |   :x:    |
| **colSpan**      |     `String`      |                                   |   :x:    |
| **column**       |     `Number`      |                                   |   :x:    |
| **dataTest**     |     `String`      | `'dhis2-uicore-stackedtablecell'` |   :x:    |
| **headerLabels** | `Array[]<String>` |               `[]`                |   :x:    |
| **hideTitle**    |     `Boolean`     |                                   |   :x:    |
| **rowSpan**      |     `String`      |                                   |   :x:    |
| **title**        |     `String`      |                                   |   :x:    |

## StackedTableFoot

From [`table/src/stacked-table/stacked-table-foot.js`](../components/table/src/stacked-table/stacked-table-foot.js)

| prop          |    type     |              default              | required | description |
| ------------- | :---------: | :-------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                   |   :x:    |
| **className** |  `String`   |                                   |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablefoot'` |   :x:    |

## StackedTableHead

From [`table/src/stacked-table/stacked-table-head.js`](../components/table/src/stacked-table/stacked-table-head.js)

| prop          |    type     |              default              | required | description |
| ------------- | :---------: | :-------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                   |   :x:    |
| **className** |  `String`   |                                   |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablehead'` |   :x:    |

## StackedTableRowHead

From [`table/src/stacked-table/stacked-table-row-head.js`](../components/table/src/stacked-table/stacked-table-row-head.js)

| prop          |    type     |               default                | required | description |
| ------------- | :---------: | :----------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                      |   :x:    |
| **className** |  `String`   |                                      |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablerowhead'` |   :x:    |

## StackedTableRow

From [`table/src/stacked-table/stacked-table-row.js`](../components/table/src/stacked-table/stacked-table-row.js)

| prop          |    type     |             default              | required | description |
| ------------- | :---------: | :------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                  |   :x:    |
| **className** |  `String`   |                                  |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablerow'` |   :x:    |

## StackedTable

From [`table/src/stacked-table/stacked-table.js`](../components/table/src/stacked-table/stacked-table.js)

| prop             |       type        |            default            | required | description                                                            |
| ---------------- | :---------------: | :---------------------------: | :------: | ---------------------------------------------------------------------- |
| **children**     |    `ReactNode`    |                               |   :x:    |
| **className**    |     `String`      |                               |   :x:    |
| **dataTest**     |     `String`      | `'dhis2-uicore-stackedtable'` |   :x:    |
| **headerLabels** | `Array[]<String>` |                               |   :x:    | Labels for columns. Use an empty string for a column without a header. |

## Table

From [`table/src/stacked-table/table.js`](../components/table/src/stacked-table/table.js)

| prop          |    type     | default |      required      | description |
| ------------- | :---------: | :-----: | :----------------: | ----------- |
| **children**  | `ReactNode` |         | :white_check_mark: |
| **className** |  `String`   |         |        :x:         |
| **dataTest**  |  `String`   |         |        :x:         |

## TableBody

From [`table/src/table/table-body.js`](../components/table/src/table/table-body.js)

| prop          |    type     |          default           | required | description                       |
| ------------- | :---------: | :------------------------: | :------: | --------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRow>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablebody'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableCellHead

From [`table/src/table/table-cell-head.js`](../components/table/src/table/table-cell-head.js)

| prop          |    type     |            default             | required | description                                                |
| ------------- | :---------: | :----------------------------: | :------: | ---------------------------------------------------------- |
| **children**  | `ReactNode` |                                |   :x:    |
| **className** |  `String`   |                                |   :x:    |
| **colSpan**   |  `String`   |                                |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablecellhead'` |   :x:    |
| **dense**     |  `Boolean`  |                                |   :x:    | Uses less padding and height for information-dense layouts |
| **role**      |  `String`   |                                |   :x:    |
| **rowSpan**   |  `String`   |                                |   :x:    |

## TableCell

From [`table/src/table/table-cell.js`](../components/table/src/table/table-cell.js)

| prop          |    type     |          default           | required | description                                                 |
| ------------- | :---------: | :------------------------: | :------: | ----------------------------------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    |
| **className** |  `String`   |                            |   :x:    |
| **colSpan**   |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablecell'` |   :x:    |
| **dense**     |  `Boolean`  |                            |   :x:    | Usees less padding and height for information-dense layouts |
| **role**      |  `String`   |                            |   :x:    |
| **rowSpan**   |  `String`   |                            |   :x:    |

## TableFoot

From [`table/src/table/table-foot.js`](../components/table/src/table/table-foot.js)

| prop          |    type     |          default           | required | description                       |
| ------------- | :---------: | :------------------------: | :------: | --------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRow>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablefoot'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableHead

From [`table/src/table/table-head.js`](../components/table/src/table/table-head.js)

| prop          |    type     |          default           | required | description                           |
| ------------- | :---------: | :------------------------: | :------: | ------------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRowHead>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablehead'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableRowHead

From [`table/src/table/table-row-head.js`](../components/table/src/table/table-row-head.js)

| prop                      |    type     |            default            | required | description                                    |
| ------------------------- | :---------: | :---------------------------: | :------: | ---------------------------------------------- |
| **children**              | `ReactNode` |                               |   :x:    | Should be `<TableCellHead>` components         |
| **className**             |  `String`   |                               |   :x:    |
| **dataTest**              |  `String`   | `'dhis2-uicore-tablerowhead'` |   :x:    |
| **role**                  |  `String`   |                               |   :x:    |
| **suppressZebraStriping** |  `Boolean`  |                               |   :x:    | Disables the default row striping for this row |

## TableRow

From [`table/src/table/table-row.js`](../components/table/src/table/table-row.js)

| prop                      |    type     |          default          | required | description                                             |
| ------------------------- | :---------: | :-----------------------: | :------: | ------------------------------------------------------- |
| **children**              | `ReactNode` |                           |   :x:    | Should be `<TableCell>` or `<TableCellHead>` components |
| **className**             |  `String`   |                           |   :x:    |
| **dataTest**              |  `String`   | `'dhis2-uicore-tablerow'` |   :x:    |
| **role**                  |  `String`   |                           |   :x:    |
| **suppressZebraStriping** |  `Boolean`  |                           |   :x:    | Disables the default row striping for this row          |

## Table

From [`table/src/table/table.js`](../components/table/src/table/table.js)

| prop                      |    type     |        default         | required | description                                                          |
| ------------------------- | :---------: | :--------------------: | :------: | -------------------------------------------------------------------- |
| **children**              | `ReactNode` |                        |   :x:    | Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components |
| **className**             |  `String`   |                        |   :x:    |
| **dataTest**              |  `String`   | `'dhis2-uicore-table'` |   :x:    |
| **role**                  |  `String`   |                        |   :x:    |
| **suppressZebraStriping** |  `Boolean`  |                        |   :x:    | Remove the default striping on alternating rows                      |

## DataTableColumnHeader

From [`table/src/data-table/data-table-column-header/data-table-column-header.js`](../components/table/src/data-table/data-table-column-header/data-table-column-header.js)

| prop                  |               type                |              default               | required | description                                                                         |
| --------------------- | :-------------------------------: | :--------------------------------: | :------: | ----------------------------------------------------------------------------------- |
| **align**             | `Enum('left', 'center', 'right')` |                                    |   :x:    |
| **children**          |            `ReactNode`            |                                    |   :x:    |
| **className**         |             `String`              |                                    |   :x:    |
| **colSpan**           |             `String`              |                                    |   :x:    |
| **dataTest**          |             `String`              | `'dhis2-uicore-datatablecellhead'` |   :x:    |
| **filter**            |             `custom`              |                                    |   :x:    | The filter element (JSX), required when onFilterIconClick or showFilter are present |
| **fixed**             |             `Boolean`             |                                    |   :x:    |
| **large**             |             `Boolean`             |                                    |   :x:    |
| **left**              |             `custom`              |                                    |   :x:    | Left or top required when fixed                                                     |
| **name**              |             `String`              |                                    |   :x:    | Can be used to match a column with a property name                                  |
| **onFilterIconClick** |             `custom`              |                                    |   :x:    |
| **onSortIconClick**   |             `custom`              |                                    |   :x:    | Sort icon click callback with `nextSortDirection` and `name` in payload             |
| **role**              |             `String`              |                                    |   :x:    |
| **rowSpan**           |             `String`              |                                    |   :x:    |
| **scope**             |             `String`              |                                    |   :x:    |
| **showFilter**        |             `custom`              |                                    |   :x:    |
| **sortDirection**     |             `custom`              |                                    |   :x:    |
| **sortIconTitle**     |             `String`              |                                    |   :x:    |
| **top**               |             `custom`              |                                    |   :x:    | Left or top required when fixed                                                     |
| **width**             |             `String`              |                                    |   :x:    |

## DataTableRow

From [`table/src/data-table/data-table-row/data-table-row.js`](../components/table/src/data-table/data-table-row/data-table-row.js)

| prop                  |    type     |            default            | required | description                                                                                                                                                   |
| --------------------- | :---------: | :---------------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**          | `ReactNode` |                               |   :x:    | Should be `<DataTableCell>` or `<DataTableCellHead>` components                                                                                               |
| **className**         |  `String`   |                               |   :x:    |
| **dataTest**          |  `String`   | `'dhis2-uicore-datatablerow'` |   :x:    |
| **draggable**         |  `Boolean`  |                               |   :x:    | Renders and additional table cell with drag icon and applies draggable styles                                                                                 |
| **expandableContent** |  `custom`   |                               |   :x:    | This content will be rendered into an additional row with fullwidth cell and the presence of this prop will display an additional table cell with expand icon |
| **expanded**          |  `Boolean`  |                               |   :x:    | Toggles expand icon (up/down) and expandable content visibility                                                                                               |
| **onExpandToggle**    |  `custom`   |                               |   :x:    | Callback for expand icon cell clicks                                                                                                                          |
| **role**              |  `String`   |                               |   :x:    |
| **selected**          |  `Boolean`  |                               |   :x:    | Adds a green background color                                                                                                                                 |

## TableBody

From [`table/src/data-table/table-elements/table-body.js`](../components/table/src/data-table/table-elements/table-body.js)

| prop          |    type     |          default           | required | description                       |
| ------------- | :---------: | :------------------------: | :------: | --------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRow>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablebody'` |   :x:    |
| **loading**   |  `Boolean`  |                            |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableFoot

From [`table/src/data-table/table-elements/table-foot.js`](../components/table/src/data-table/table-elements/table-foot.js)

| prop          |    type     |          default           | required | description                       |
| ------------- | :---------: | :------------------------: | :------: | --------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRow>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablefoot'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableHead

From [`table/src/data-table/table-elements/table-head.js`](../components/table/src/data-table/table-elements/table-head.js)

| prop          |    type     |          default           | required | description                           |
| ------------- | :---------: | :------------------------: | :------: | ------------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRowHead>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablehead'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableRow

From [`table/src/data-table/table-elements/table-row.js`](../components/table/src/data-table/table-elements/table-row.js)

| prop          |    type     |          default          | required | description                                                     |
| ------------- | :---------: | :-----------------------: | :------: | --------------------------------------------------------------- |
| **children**  | `ReactNode` |                           |   :x:    | Should be `<TableDataCell>` or `<TableDataCellHead>` components |
| **className** |  `String`   |                           |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablerow'` |   :x:    |
| **draggable** |  `Boolean`  |                           |   :x:    | Applies draggable cursor styles                                 |
| **role**      |  `String`   |                           |   :x:    |
| **selected**  |  `Boolean`  |                           |   :x:    | Sets a selected (teal) background color                         |

## Table

From [`table/src/data-table/table-elements/table.js`](../components/table/src/data-table/table-elements/table.js)

| prop           |                     type                      |        default         | required | description                                                                                                                                                                                       |
| -------------- | :-------------------------------------------: | :--------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **borderless** |                   `Boolean`                   |                        |   :x:    | Removes border from the table                                                                                                                                                                     |
| **children**   |                  `ReactNode`                  |                        |   :x:    | Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components                                                                                                                              |
| **className**  |                   `String`                    |                        |   :x:    |
| **dataTest**   |                   `String`                    | `'dhis2-uicore-table'` |   :x:    |
| **layout**     | `Enum('auto', 'fixed', 'initial', 'inherit')` |        `'auto'`        |   :x:    | Sets the `table-layout` property. Switching to `fixed` can prevent style issues when dealing with a table with multiple frozen columns or when dealing with filter elements in the table headers. |
| **role**       |                   `String`                    |                        |   :x:    |
| **width**      |                   `String`                    |        `'100%'`        |   :x:    | Sets the `width` property. Providing an explicit width can prevent style issues when dealing with horizontally scrolling tables with a fixed layout.                                              |

## Tag

From [`tag/src/tag.js`](../components/tag/src/tag.js)

| prop          |    type     |       default        | required | description                                                                                                                                                             |
| ------------- | :---------: | :------------------: | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **bold**      |  `Boolean`  |                      |   :x:    | Use bold tags where it is important that the tag is seen by the user in an information dense interface. Bold tags should be reserved for edge cases and not overused.   |
| **children**  |  `String`   |                      |   :x:    |
| **className** |  `String`   |                      |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tag'` |   :x:    |
| **icon**      | `ReactNode` |                      |   :x:    | Tags can contain icons. Use icons where they will help users easily identify the content of the tag. Tags must have a text label and cannot display only an icon.       |
| **maxWidth**  |  `String`   |      `'240px'`       |   :x:    |
| **negative**  |  `custom`   |                      |   :x:    | Red 'negative' tags imply an error or a problem. `neutral`, `positive`, and `negative` are mutually exclusive props                                                     |
| **neutral**   |  `custom`   |                      |   :x:    | Blue 'neutral' tags are used when a tag _could_ have valid or error status but is currently neutral. `neutral`, `positive`, and `negative` are mutually exclusive props |
| **positive**  |  `custom`   |                      |   :x:    | Green 'valid' tags should be used to indicate validity or success. `neutral`, `positive`, and `negative` are mutually exclusive props                                   |

## TextArea

From [`text-area/src/text-area/text-area.js`](../components/text-area/src/text-area/text-area.js)

| prop             |                       type                       |          default          | required | description                                                                                                         |
| ---------------- | :----------------------------------------------: | :-----------------------: | :------: | ------------------------------------------------------------------------------------------------------------------- |
| **autoGrow**     |                    `Boolean`                     |                           |   :x:    | Grow the text area in response to overflow instead of adding a scroll bar                                           |
| **className**    |                     `String`                     |                           |   :x:    |
| **dataTest**     |                     `String`                     | `'dhis2-uicore-textarea'` |   :x:    |
| **dense**        |                    `Boolean`                     |                           |   :x:    | Compact mode                                                                                                        |
| **disabled**     |                    `Boolean`                     |                           |   :x:    | Disables the textarea and makes in non-interactive                                                                  |
| **error**        |                     `custom`                     |                           |   :x:    | Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props                 |
| **initialFocus** |                    `Boolean`                     |                           |   :x:    | Grabs initial focus on the page                                                                                     |
| **loading**      |                    `Boolean`                     |                           |   :x:    | Adds a loading spinner                                                                                              |
| **name**         |                     `String`                     |                           |   :x:    | Name associated with the text area. Passed in object argument to event handlers.                                    |
| **onBlur**       |                    `Function`                    |                           |   :x:    | Called with signature ({ name: string, value: string }, event)                                                      |
| **onChange**     |                    `Function`                    |                           |   :x:    | Called with signature ({ name: string, value: string }, event)                                                      |
| **onFocus**      |                    `Function`                    |                           |   :x:    | Called with signature ({ name: string, value: string }, event)                                                      |
| **placeholder**  |                     `String`                     |                           |   :x:    | Placeholder text for an empty textarea                                                                              |
| **readOnly**     |                    `Boolean`                     |                           |   :x:    | Makes the textarea read-only                                                                                        |
| **resize**       | `Enum('none', 'both', 'horizontal', 'vertical')` |       `'vertical'`        |   :x:    | [Resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) for the textarea element                 |
| **rows**         |                     `Number`                     |            `4`            |   :x:    | Initial height of the textarea, in lines of text                                                                    |
| **tabIndex**     |                     `String`                     |                           |   :x:    |
| **valid**        |                     `custom`                     |                           |   :x:    | Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props                 |
| **value**        |                     `String`                     |                           |   :x:    | Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers. |
| **warning**      |                     `custom`                     |                           |   :x:    | Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props                 |
| **width**        |                     `String`                     |         `'100%'`          |   :x:    | Width of the text area. Can be any valid CSS measurement                                                            |

## TextAreaField

From [`text-area/src/text-area-field/text-area-field.js`](../components/text-area/src/text-area-field/text-area-field.js)

| prop               |                       type                       |              default              | required | description                                                                                                          |
| ------------------ | :----------------------------------------------: | :-------------------------------: | :------: | -------------------------------------------------------------------------------------------------------------------- |
| **autoGrow**       |                    `Boolean`                     |                                   |   :x:    | Grow the text area in response to overflow instead of adding a scroll bar                                            |
| **className**      |                     `String`                     |                                   |   :x:    |
| **dataTest**       |                     `String`                     | `'dhis2-uiwidgets-textareafield'` |   :x:    |
| **dense**          |                    `Boolean`                     |                                   |   :x:    | Compact mode                                                                                                         |
| **disabled**       |                    `Boolean`                     |                                   |   :x:    | Disables the textarea and makes in non-interactive                                                                   |
| **error**          |                     `custom`                     |                                   |   :x:    | Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props                  |
| **helpText**       |                     `String`                     |                                   |   :x:    | Adds useful help text below the textarea                                                                             |
| **initialFocus**   |                    `Boolean`                     |                                   |   :x:    | Grabs initial focus on the page                                                                                      |
| **inputWidth**     |                     `String`                     |                                   |   :x:    | Sets the width of the textarea. Minimum 220px. Any valid CSS measurement can be used                                 |
| **label**          |                     `String`                     |                                   |   :x:    | Labels the textarea                                                                                                  |
| **loading**        |                    `Boolean`                     |                                   |   :x:    | Adds a loading spinner                                                                                               |
| **name**           |                     `String`                     |                                   |   :x:    | Name associated with the text area. Passed in object argument to event handlers.                                     |
| **onBlur**         |                    `Function`                    |                                   |   :x:    | Called with signature ({ name: string, value: string }, event)                                                       |
| **onChange**       |                    `Function`                    |                                   |   :x:    | Called with signature ({ name: string, value: string }, event)                                                       |
| **onFocus**        |                    `Function`                    |                                   |   :x:    | Called with signature ({ name: string, value: string }, event)                                                       |
| **placeholder**    |                     `String`                     |                                   |   :x:    | Placeholder text for an empty textarea                                                                               |
| **readOnly**       |                    `Boolean`                     |                                   |   :x:    | Makes the textarea read-only                                                                                         |
| **required**       |                    `Boolean`                     |                                   |   :x:    | Adds an asterisk to the label to indicate this field is required                                                     |
| **resize**         | `Enum('none', 'both', 'horizontal', 'vertical')` |           `'vertical'`            |   :x:    | [Resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) for the textarea element                  |
| **rows**           |                     `Number`                     |                `4`                |   :x:    | Initial height of the textarea, in lines of text                                                                     |
| **tabIndex**       |                     `String`                     |                                   |   :x:    |
| **valid**          |                     `custom`                     |                                   |   :x:    | Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props                  |
| **validationText** |                     `String`                     |                                   |   :x:    | Validation text below the textarea to provide validation feedback. Changes appearance depending on validation status |
| **value**          |                     `String`                     |                                   |   :x:    | Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers.  |
| **warning**        |                     `custom`                     |                                   |   :x:    | Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props                  |

## Tooltip

From [`tooltip/src/tooltip.js`](../components/tooltip/src/tooltip.js)

| prop            |                   type                   |         default          | required | description                                                                                                                                                                                                   |
| --------------- | :--------------------------------------: | :----------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**    |       `Union<ReactNode\|Function>`       |                          |   :x:    | If child is a function, it's called with `{ onMouseOver, onMouseOut, ref }` args to apply to a reference element. If child is a node, it is wrapped in a `span` with the appropriate attributes and handlers. |
| **children<1>** |               `ReactNode`                |                          |   :x:    |
| **children<2>** |                `Function`                |                          |   :x:    |
| **className**   |                 `String`                 |                          |   :x:    |
| **closeDelay**  |                 `Number`                 |          `200`           |   :x:    | Time (in ms) until tooltip closes after mouse out                                                                                                                                                             |
| **content**     |               `ReactNode`                |                          |   :x:    | Content to display when the tooltip is open                                                                                                                                                                   |
| **dataTest**    |                 `String`                 | `'dhis2-uicore-tooltip'` |   :x:    |
| **maxWidth**    |                 `Number`                 |          `300`           |   :x:    | Max width of the tooltip in px                                                                                                                                                                                |
| **openDelay**   |                 `Number`                 |          `200`           |   :x:    | Time (in ms) until tooltip open after mouse over                                                                                                                                                              |
| **placement**   | `Enum('top', 'right', 'bottom', 'left')` |         `'top'`          |   :x:    | Where to place the tooltip relative to its reference                                                                                                                                                          |

## TransferOption

From [`transfer/src/transfer-option.js`](../components/transfer/src/transfer-option.js)

| prop              |    type    |             default             |      required      | description |
| ----------------- | :--------: | :-----------------------------: | :----------------: | ----------- |
| **className**     |  `String`  |                                 |        :x:         |
| **dataTest**      |  `String`  | `'dhis2-uicore-transferoption'` |        :x:         |
| **disabled**      | `Boolean`  |                                 |        :x:         |
| **highlighted**   | `Boolean`  |                                 |        :x:         |
| **label**         |  `String`  |                                 | :white_check_mark: |
| **onClick**       | `Function` |                                 |        :x:         |
| **onDoubleClick** | `Function` |                                 |        :x:         |
| **value**         |  `String`  |                                 | :white_check_mark: |

## Transfer

From [`transfer/src/transfer.js`](../components/transfer/src/transfer.js)

| prop                        |        type         |                   default                    |      required      | description |
| --------------------------- | :-----------------: | :------------------------------------------: | :----------------: | ----------- |
| **addAllText**              |      `String`       |                                              |        :x:         |
| **addIndividualText**       |      `String`       |                                              |        :x:         |
| **className**               |      `String`       |                                              |        :x:         |
| **dataTest**                |      `String`       |          `'dhis2-uicore-transfer'`           |        :x:         |
| **disabled**                |      `Boolean`      |                                              |        :x:         |
| **enableOrderChange**       |      `Boolean`      |                                              |        :x:         |
| **filterCallback**          |     `Function`      |           `defaultFilterCallback`            |        :x:         |
| **filterCallbackPicked**    |     `Function`      |           `defaultFilterCallback`            |        :x:         |
| **filterLabel**             |      `String`       |                                              |        :x:         |
| **filterLabelPicked**       |      `String`       |                                              |        :x:         |
| **filterPlaceholder**       |      `String`       |                                              |        :x:         |
| **filterPlaceholderPicked** |      `String`       |                                              |        :x:         |
| **filterable**              |      `Boolean`      |                                              |        :x:         |
| **filterablePicked**        |      `Boolean`      |                                              |        :x:         |
| **height**                  |      `String`       |                  `'240px'`                   |        :x:         |
| **hideFilterInput**         |      `Boolean`      |                                              |        :x:         |
| **hideFilterInputPicked**   |      `Boolean`      |                                              |        :x:         |
| **initialSearchTerm**       |      `String`       |                     `''`                     |        :x:         |
| **initialSearchTermPicked** |      `String`       |                     `''`                     |        :x:         |
| **leftFooter**              |     `ReactNode`     |                                              |        :x:         |
| **leftHeader**              |     `ReactNode`     |                                              |        :x:         |
| **loading**                 |      `Boolean`      |                                              |        :x:         |
| **loadingPicked**           |      `Boolean`      |                                              |        :x:         |
| **maxSelections**           | `Enum(1, Infinity)` |                  `Infinity`                  |        :x:         |
| **onChange**                |     `Function`      |                                              | :white_check_mark: |
| **onEndReached**            |     `Function`      |                                              |        :x:         |
| **onEndReachedPicked**      |     `Function`      |                                              |        :x:         |
| **onFilterChange**          |     `Function`      |                                              |        :x:         |
| **onFilterChangePicked**    |     `Function`      |                                              |        :x:         |
| **options**                 |  `Array[]<Shape>`   |                                              | :white_check_mark: |
| **optionsWidth**            |      `String`       |                  `'320px'`                   |        :x:         |
| **options[].disabled**      |      `Boolean`      |                                              |        :x:         |
| **options[].label**         |      `String`       |                                              | :white_check_mark: |
| **options[].value**         |      `String`       |                                              | :white_check_mark: |
| **removeAllText**           |      `String`       |                                              |        :x:         |
| **removeIndividualText**    |      `String`       |                                              |        :x:         |
| **renderOption**            |     `Function`      | `(option) => <TransferOption {...option} />` |        :x:         |
| **rightFooter**             |     `ReactNode`     |                                              |        :x:         |
| **rightHeader**             |     `ReactNode`     |                                              |        :x:         |
| **searchTerm**              |      `String`       |                                              |        :x:         |
| **searchTermPicked**        |      `String`       |                                              |        :x:         |
| **selected**                |  `Array[]<String>`  |                     `[]`                     |        :x:         |
| **selectedEmptyComponent**  |     `ReactNode`     |                                              |        :x:         |
| **selectedWidth**           |      `String`       |                  `'320px'`                   |        :x:         |
| **sourceEmptyPlaceholder**  |     `ReactNode`     |                                              |        :x:         |

## UserAvatar

From [`user-avatar/src/user-avatar.js`](../components/user-avatar/src/user-avatar.js)

An avatar is a visual icon that represents a user.

Use an avatar to give extra information when a user is mentioned or displayed in DHIS2. The avatar shows a user uploaded photograph or initials. The avatar is intended to give context and help to identify different users. An avatar is usually shown alongside the user name, but can be used alone to show a visual hint of a user.

See specification: [Design System](https://github.com/dhis2/design-system/blob/master/atoms/avatar.md)

```js
import { UserAvatar } from '@dhis2/ui'
```

| prop           |   type   |           default           |      required      | description |
| -------------- | :------: | :-------------------------: | :----------------: | ----------- |
| **avatarId**   | `String` |                             |        :x:         |
| **className**  | `String` |                             |        :x:         |
| **dataTest**   | `String` | `'dhis2-uicore-useravatar'` |        :x:         |
| **extralarge** | `custom` |                             |        :x:         |
| **extrasmall** | `custom` |                             |        :x:         |
| **large**      | `custom` |                             |        :x:         |
| **medium**     | `custom` |                             |        :x:         |
| **name**       | `String` |                             | :white_check_mark: |
| **small**      | `custom` |                             |        :x:         |
