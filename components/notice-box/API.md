## NoticeBox

From [`src/notice-box.js`](./src/notice-box.js)

| prop          |                           type                            |          default           | required | description                                                                |
| ------------- | :-------------------------------------------------------: | :------------------------: | :------: | -------------------------------------------------------------------------- |
| **children**  |                        `ReactNode`                        |                            |   :x:    |
| **className** |                         `String`                          |                            |   :x:    |
| **dataTest**  |                         `String`                          | `'dhis2-uicore-noticebox'` |   :x:    |
| **error**     | `mutuallyExclusive(['error', 'warning'], PropTypes.bool)` |                            |   :x:    | Applies 'error' message styles. Mutually exclusive with the `warning` prop |
| **title**     |                         `String`                          |                            |   :x:    |
| **warning**   | `mutuallyExclusive(['error', 'warning'], PropTypes.bool)` |                            |   :x:    | Applies 'warning' message styles. Mutually exclusive with the `error` prop |
