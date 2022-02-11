## CircularLoader

From [`src/circular-loader/circular-loader.js`](./src/circular-loader/circular-loader.js)

| prop           |              type              |             default             | required | description |
| -------------- | :----------------------------: | :-----------------------------: | :------: | ----------- |
| **className**  |            `String`            |                                 |   :x:    |
| **dataTest**   |            `String`            | `'dhis2-uicore-circularloader'` |   :x:    |
| **extrasmall** | `sharedPropTypes.sizePropType` |                                 |   :x:    |
| **invert**     |           `Boolean`            |                                 |   :x:    |
| **large**      | `sharedPropTypes.sizePropType` |                                 |   :x:    |
| **small**      | `sharedPropTypes.sizePropType` |                                 |   :x:    |

## LinearLoader

From [`src/linear-loader/linear-loader.js`](./src/linear-loader/linear-loader.js)

| prop          |   type    |            default            |      required      | description                                           |
| ------------- | :-------: | :---------------------------: | :----------------: | ----------------------------------------------------- |
| **amount**    | `Number`  |                               | :white_check_mark: | The progression in percent without the '%' sign       |
| **className** | `String`  |                               |        :x:         |
| **dataTest**  | `String`  | `'dhis2-uicore-linearloader'` |        :x:         |
| **invert**    | `Boolean` |                               |        :x:         | Use inverted color scheme                             |
| **margin**    | `String`  |        `spacers.dp12`         |        :x:         | The margin around the loader, can be a full shorthand |
| **width**     | `String`  |           `'300px'`           |        :x:         | The width of the entire indicator                     |
