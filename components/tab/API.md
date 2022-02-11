## Tab

From [`src/tab/tab.js`](./src/tab/tab.js)

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

From [`src/tab-bar/tab-bar.js`](./src/tab-bar/tab-bar.js)

| prop           |    type     |         default         | required | description                                                                                                                                                               |
| -------------- | :---------: | :---------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**   | `ReactNode` |                         |   :x:    |
| **className**  |  `String`   |                         |   :x:    |
| **dataTest**   |  `String`   | `'dhis2-uicore-tabbar'` |   :x:    |
| **fixed**      |  `Boolean`  |                         |   :x:    | Fixed tabs fill the width of their container. If false (i.e. fluid), tabs take up an amount of space defined by the tab name. Fluid tabs should be used most of the time. |
| **scrollable** |  `Boolean`  |                         |   :x:    | Enables horizontal scrolling for many tabs that don't fit the width of the container                                                                                      |
