## Node

From [`src/node.js`](./src/node.js)

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
