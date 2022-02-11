## TextArea

From [`src/text-area/text-area.js`](./src/text-area/text-area.js)

| prop             |                       type                       |          default          | required | description                                                                                                         |
| ---------------- | :----------------------------------------------: | :-----------------------: | :------: | ------------------------------------------------------------------------------------------------------------------- |
| **autoGrow**     |                    `Boolean`                     |                           |   :x:    | Grow the text area in response to overflow instead of adding a scroll bar                                           |
| **className**    |                     `String`                     |                           |   :x:    |
| **dataTest**     |                     `String`                     | `'dhis2-uicore-textarea'` |   :x:    |
| **dense**        |                    `Boolean`                     |                           |   :x:    | Compact mode                                                                                                        |
| **disabled**     |                    `Boolean`                     |                           |   :x:    | Disables the textarea and makes in non-interactive                                                                  |
| **error**        |         `sharedPropTypes.statusPropType`         |                           |   :x:    | Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props                 |
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
| **valid**        |         `sharedPropTypes.statusPropType`         |                           |   :x:    | Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props                 |
| **value**        |                     `String`                     |                           |   :x:    | Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers. |
| **warning**      |         `sharedPropTypes.statusPropType`         |                           |   :x:    | Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props                 |
| **width**        |                     `String`                     |         `'100%'`          |   :x:    | Width of the text area. Can be any valid CSS measurement                                                            |

## TextAreaField

From [`src/text-area-field/text-area-field.js`](./src/text-area-field/text-area-field.js)

| prop               |                       type                       |              default              | required | description                                                                                                          |
| ------------------ | :----------------------------------------------: | :-------------------------------: | :------: | -------------------------------------------------------------------------------------------------------------------- |
| **autoGrow**       |                    `Boolean`                     |                                   |   :x:    | Grow the text area in response to overflow instead of adding a scroll bar                                            |
| **className**      |                     `String`                     |                                   |   :x:    |
| **dataTest**       |                     `String`                     | `'dhis2-uiwidgets-textareafield'` |   :x:    |
| **dense**          |                    `Boolean`                     |                                   |   :x:    | Compact mode                                                                                                         |
| **disabled**       |                    `Boolean`                     |                                   |   :x:    | Disables the textarea and makes in non-interactive                                                                   |
| **error**          |         `sharedPropTypes.statusPropType`         |                                   |   :x:    | Applies 'error' styles for validation feedback. Mutually exclusive with `valid` and `warning` props                  |
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
| **valid**          |         `sharedPropTypes.statusPropType`         |                                   |   :x:    | Applies 'valid' styles for validation feedback. Mutually exclusive with `warning` and `error` props                  |
| **validationText** |                     `String`                     |                                   |   :x:    | Validation text below the textarea to provide validation feedback. Changes appearance depending on validation status |
| **value**          |                     `String`                     |                                   |   :x:    | Value in the textarea. Can be used to control component (recommended). Passed in object argument to event handlers.  |
| **warning**        |         `sharedPropTypes.statusPropType`         |                                   |   :x:    | Applies 'warning' styles for validation feedback. Mutually exclusive with `valid` and `error` props                  |
