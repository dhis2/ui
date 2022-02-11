## TransferOption

From [`src/transfer-option.js`](./src/transfer-option.js)

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

From [`src/transfer.js`](./src/transfer.js)

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
