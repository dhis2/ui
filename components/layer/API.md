## Layer

From [`src/layer.js`](./src/layer.js)

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
