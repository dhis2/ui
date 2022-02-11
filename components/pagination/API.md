## Pagination

From [`src/pagination.js`](./src/pagination.js)

| prop                      |           type            |                                                                  default                                                                  |      required      | description |
| ------------------------- | :-----------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :----------------: | ----------- |
| **className**             |         `String`          |                                                                                                                                           |        :x:         |
| **dataTest**              |         `String`          |                                                      `'dhis2-uiwidgets-pagination'`                                                       |        :x:         |
| **hidePageSelect**        |         `Boolean`         |                                                                                                                                           |        :x:         |
| **hidePageSizeSelect**    |         `Boolean`         |                                                                                                                                           |        :x:         |
| **hidePageSummary**       |         `Boolean`         |                                                                                                                                           |        :x:         |
| **nextPageText**          | `Union<String\|Function>` |                                                          `() => i18n.t('Next')`                                                           |        :x:         |
| **nextPageText<1>**       |         `String`          |                                                                                                                                           |        :x:         |
| **nextPageText<2>**       |        `Function`         |                                                                                                                                           |        :x:         |
| **onPageChange**          |        `Function`         |                                                                                                                                           |        :x:         |
| **onPageSizeChange**      |        `Function`         |                                                                                                                                           |        :x:         |
| **page**                  |         `Number`          |                                                                                                                                           | :white_check_mark: |
| **pageCount**             |         `Number`          |                                                                                                                                           | :white_check_mark: |
| **pageSelectText**        | `Union<String\|Function>` |                                                          `() => i18n.t('Page')`                                                           |        :x:         |
| **pageSelectText<1>**     |         `String`          |                                                                                                                                           |        :x:         |
| **pageSelectText<2>**     |        `Function`         |                                                                                                                                           |        :x:         |
| **pageSize**              |         `Number`          |                                                                                                                                           | :white_check_mark: |
| **pageSizeSelectText**    | `Union<String\|Function>` |                                                     `() => i18n.t('Items per page')`                                                      |        :x:         |
| **pageSizeSelectText<1>** |         `String`          |                                                                                                                                           |        :x:         |
| **pageSizeSelectText<2>** |        `Function`         |                                                                                                                                           |        :x:         |
| **pageSizes**             |     `Array[]<String>`     |                                            `['5', '10', '20', '30', '40', '50', '75', '100']`                                             |        :x:         |
| **pageSummaryText**       | `Union<String\|Function>` | `(interpolationObject) => i18n.t( 'Page {{page}} of {{pageCount}}, items {{firstItem}}-{{lastItem}} of {{total}}', interpolationObject )` |        :x:         |
| **pageSummaryText<1>**    |         `String`          |                                                                                                                                           |        :x:         |
| **pageSummaryText<2>**    |        `Function`         |                                                                                                                                           |        :x:         |
| **previousPageText**      | `Union<String\|Function>` |                                                        `() => i18n.t('Previous')`                                                         |        :x:         |
| **previousPageText<1>**   |         `String`          |                                                                                                                                           |        :x:         |
| **previousPageText<2>**   |        `Function`         |                                                                                                                                           |        :x:         |
| **total**                 |         `Number`          |                                                                                                                                           | :white_check_mark: |
