## AlertBar

From [`src/alert-bar/alert-bar.js`](./src/alert-bar/alert-bar.js)

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

From [`src/alert-stack/alert-stack.js`](./src/alert-stack/alert-stack.js)

| prop          |    type     |           default           | required | description |
| ------------- | :---------: | :-------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                             |   :x:    |
| **className** |  `String`   |                             |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-alertstack'` |   :x:    |
