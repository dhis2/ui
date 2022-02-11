## MultiSelect

From [`src/multi-select/multi-select.js`](./src/multi-select/multi-select.js)

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

From [`src/multi-select-field/multi-select-field.js`](./src/multi-select-field/multi-select-field.js)

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

From [`src/multi-select-option/multi-select-option.js`](./src/multi-select-option/multi-select-option.js)

| prop          |    type    |              default               |      required      | description |
| ------------- | :--------: | :--------------------------------: | :----------------: | ----------- |
| **active**    | `Boolean`  |                                    |        :x:         |
| **className** |  `String`  |                                    |        :x:         |
| **dataTest**  |  `String`  | `'dhis2-uicore-multiselectoption'` |        :x:         |
| **disabled**  | `Boolean`  |                                    |        :x:         |
| **label**     |  `String`  |                                    | :white_check_mark: |
| **onClick**   | `Function` |                                    |        :x:         |
| **value**     |  `String`  |                                    | :white_check_mark: |

## SingleSelect

From [`src/single-select/single-select.js`](./src/single-select/single-select.js)

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

From [`src/single-select-field/single-select-field.js`](./src/single-select-field/single-select-field.js)

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

From [`src/single-select-option/single-select-option.js`](./src/single-select-option/single-select-option.js)

| prop          |    type    |               default               |      required      | description |
| ------------- | :--------: | :---------------------------------: | :----------------: | ----------- |
| **active**    | `Boolean`  |                                     |        :x:         |
| **className** |  `String`  |                                     |        :x:         |
| **dataTest**  |  `String`  | `'dhis2-uicore-singleselectoption'` |        :x:         |
| **disabled**  | `Boolean`  |                                     |        :x:         |
| **label**     |  `String`  |                                     | :white_check_mark: |
| **onClick**   | `Function` |                                     |        :x:         |
| **value**     |  `String`  |                                     | :white_check_mark: |
