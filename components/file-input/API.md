## FileInput

From [`src/file-input/file-input.js`](./src/file-input/file-input.js)

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

From [`src/file-input-field/file-input-field.js`](./src/file-input-field/file-input-field.js)

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

## FileInputFieldWithList

From [`src/file-input-field-with-list/file-input-field-with-list.js`](./src/file-input-field-with-list/file-input-field-with-list.js)

| prop               |           type            |                  default                   |      required      | description                                                                                                                        |
| ------------------ | :-----------------------: | :----------------------------------------: | :----------------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| **accept**         |         `String`          |                                            |        :x:         | The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)     |
| **buttonLabel**    | `Union<String\|Function>` |      `() => i18n.t('Upload a file')`       |        :x:         | Text on the button                                                                                                                 |
| **buttonLabel<1>** |         `String`          |                                            |        :x:         |
| **buttonLabel<2>** |        `Function`         |                                            |        :x:         |
| **className**      |         `String`          |                                            |        :x:         |
| **dataTest**       |         `String`          | `'dhis2-uiwidgets-fileinputfieldwithlist'` |        :x:         |
| **disabled**       |         `Boolean`         |                                            |        :x:         | Disables the button                                                                                                                |
| **error**          |         `custom`          |                                            |        :x:         | Applies 'error' styling to the button and validation text. Mutually exclusive with `warning` and `valid` props                     |
| **files**          |      `Array[]<File>`      |                    `[]`                    |        :x:         |
| **helpText**       |         `String`          |                                            |        :x:         | Useful guiding text for the user                                                                                                   |
| **initialFocus**   |         `Boolean`         |                                            |        :x:         |
| **label**          |         `String`          |                                            |        :x:         | A descriptive label above the button                                                                                               |
| **large**          |         `custom`          |                                            |        :x:         | Size of the button. Mutually exclusive with the `small` prop                                                                       |
| **multiple**       |         `Boolean`         |                                            |        :x:         | The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple) |
| **name**           |         `String`          |                                            |        :x:         | Name associated with input. Passed to event handler callbacks                                                                      |
| **onBlur**         |        `Function`         |                                            |        :x:         |
| **onChange**       |        `Function`         |                                            | :white_check_mark: | Called with signature `({ name: string, files: [File] }, event)`                                                                   |
| **onFocus**        |        `Function`         |                                            |        :x:         |
| **placeholder**    | `Union<String\|Function>` |   `() => i18n.t('No file uploaded yet')`   |        :x:         | Placeholder below the button                                                                                                       |
| **placeholder<1>** |         `String`          |                                            |        :x:         |
| **placeholder<2>** |        `Function`         |                                            |        :x:         |
| **removeText**     | `Union<String\|Function>` |          `() => i18n.t('Remove')`          |        :x:         | Text used for the button that removes a file from the list                                                                         |
| **removeText<1>**  |         `String`          |                                            |        :x:         |
| **removeText<2>**  |        `Function`         |                                            |        :x:         |
| **required**       |         `Boolean`         |                                            |        :x:         | Adds an asterisk to indicate this field is required                                                                                |
| **small**          |         `custom`          |                                            |        :x:         | Size of the button. Mutually exclusive with the `large` prop                                                                       |
| **tabIndex**       |         `String`          |                                            |        :x:         |
| **valid**          |         `custom`          |                                            |        :x:         | Applies 'valid' styling to the button and validation text. Mutually exclusive with `warning` and `error` props                     |
| **validationText** |         `String`          |                                            |        :x:         | Text below the button that provides validation feedback                                                                            |
| **warning**        |         `custom`          |                                            |        :x:         | Applies 'warning' styling to the button and validation text. Mutually exclusive with `valid` and `error` props                     |

## FileListItem

From [`src/file-list/file-list-item.js`](./src/file-list/file-list-item.js)

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

From [`src/file-list/file-list-placeholder.js`](./src/file-list/file-list-placeholder.js)

| prop         |   type   |               default                | required | description |
| ------------ | :------: | :----------------------------------: | :------: | ----------- |
| **children** | `String` |                                      |   :x:    |
| **dataTest** | `String` | `'dhis2-uicore-filelistplaceholder'` |   :x:    |

## FileList

From [`src/file-list/file-list.js`](./src/file-list/file-list.js)

| prop          |    type     |          default          | required | description |
| ------------- | :---------: | :-----------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                           |   :x:    |
| **className** |  `String`   |                           |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-filelist'` |   :x:    |
