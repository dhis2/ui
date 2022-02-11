## DataTableCell

From [`src/data-table/data-table-cell.js`](./src/data-table/data-table-cell.js)

| prop            |               type                |            default             | required | description                                                          |
| --------------- | :-------------------------------: | :----------------------------: | :------: | -------------------------------------------------------------------- |
| **active**      |             `Boolean`             |                                |   :x:    | To toggle background color, for example for editing                  |
| **align**       | `Enum('left', 'center', 'right')` |            `'left'`            |   :x:    |
| **bordered**    |             `Boolean`             |                                |   :x:    |
| **children**    |            `ReactNode`            |                                |   :x:    |
| **className**   |             `String`              |                                |   :x:    |
| **colSpan**     |             `String`              |                                |   :x:    |
| **dataTest**    |             `String`              | `'dhis2-uicore-datatablecell'` |   :x:    |
| **error**       |          `stylePropType`          |                                |   :x:    | Mutually exclusive with muted and valid                              |
| **fixed**       |             `Boolean`             |                                |   :x:    | When true a TableHeaderCell with sticky positioning will be rendered |
| **large**       |             `Boolean`             |                                |   :x:    |
| **left**        |     `requiredIfFixedPropType`     |            `'auto'`            |   :x:    | Required when fixed                                                  |
| **muted**       |          `stylePropType`          |                                |   :x:    | Mutually exclusive with error and valid                              |
| **onClick**     |            `Function`             |                                |   :x:    |
| **role**        |             `String`              |                                |   :x:    |
| **rowSpan**     |             `String`              |                                |   :x:    |
| **scope**       |             `String`              |                                |   :x:    |
| **staticStyle** |             `Boolean`             |                                |   :x:    | Surpress hover and active event styles                               |
| **tag**         |        `Enum('td', 'th')`         |                                |   :x:    | Render a TableDataCell or TableHeaderCell respectively               |
| **valid**       |          `stylePropType`          |                                |   :x:    | Mutually exclusive with error and muted                              |
| **width**       |     `requiredIfFixedPropType`     |            `'auto'`            |   :x:    | Required when fixed                                                  |

## DataTable

From [`src/data-table/data-table.js`](./src/data-table/data-table.js)

| prop             |                     type                      |          default           | required | description                                                                                                                                                                                                   |
| ---------------- | :-------------------------------------------: | :------------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**     |                  `ReactNode`                  |                            |   :x:    | Should be `<DataTableHead>`, `<DataTableBody>`, and `<DataTableFoot>` components                                                                                                                              |
| **className**    |                   `String`                    |                            |   :x:    |
| **dataTest**     |                   `String`                    | `'dhis2-uicore-datatable'` |   :x:    |
| **layout**       | `Enum('auto', 'fixed', 'initial', 'inherit')` |          `'auto'`          |   :x:    | Sets the `datatable-layout` property. Switching to `fixed` can prevent style issues when dealing with a datatable with multiple frozen columns or when dealing with filter elements in the datatable headers. |
| **role**         |                   `String`                    |                            |   :x:    |
| **scrollHeight** |                   `String`                    |                            |   :x:    | Sets max-height of scrollbox                                                                                                                                                                                  |
| **scrollWidth**  |                   `String`                    |                            |   :x:    | Sets max-width of scrollbox                                                                                                                                                                                   |
| **width**        |                   `String`                    |          `'100%'`          |   :x:    | Sets the `width` property. Providing an explicit width can prevent style issues when dealing with horizontally scrolling datatables with a fixed layout.                                                      |

## StackedTableBody

From [`src/stacked-table/stacked-table-body.js`](./src/stacked-table/stacked-table-body.js)

| prop          |    type     |              default              | required | description |
| ------------- | :---------: | :-------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                   |   :x:    |
| **className** |  `String`   |                                   |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablebody'` |   :x:    |

## StackedTableCellHead

From [`src/stacked-table/stacked-table-cell-head.js`](./src/stacked-table/stacked-table-cell-head.js)

| prop          |   type   |                default                | required | description |
| ------------- | :------: | :-----------------------------------: | :------: | ----------- |
| **children**  | `String` |                 `''`                  |   :x:    |
| **className** | `String` |                                       |   :x:    |
| **colSpan**   | `String` |                                       |   :x:    |
| **dataTest**  | `String` | `'dhis2-uicore-stackedtablecellhead'` |   :x:    |
| **rowSpan**   | `String` |                                       |   :x:    |

## StackedTableCell

From [`src/stacked-table/stacked-table-cell.js`](./src/stacked-table/stacked-table-cell.js)

| prop             |       type        |              default              | required | description |
| ---------------- | :---------------: | :-------------------------------: | :------: | ----------- |
| **children**     |    `ReactNode`    |                                   |   :x:    |
| **className**    |     `String`      |                                   |   :x:    |
| **colSpan**      |     `String`      |                                   |   :x:    |
| **column**       |     `Number`      |                                   |   :x:    |
| **dataTest**     |     `String`      | `'dhis2-uicore-stackedtablecell'` |   :x:    |
| **headerLabels** | `Array[]<String>` |               `[]`                |   :x:    |
| **hideTitle**    |     `Boolean`     |                                   |   :x:    |
| **rowSpan**      |     `String`      |                                   |   :x:    |
| **title**        |     `String`      |                                   |   :x:    |

## StackedTableFoot

From [`src/stacked-table/stacked-table-foot.js`](./src/stacked-table/stacked-table-foot.js)

| prop          |    type     |              default              | required | description |
| ------------- | :---------: | :-------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                   |   :x:    |
| **className** |  `String`   |                                   |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablefoot'` |   :x:    |

## StackedTableHead

From [`src/stacked-table/stacked-table-head.js`](./src/stacked-table/stacked-table-head.js)

| prop          |    type     |              default              | required | description |
| ------------- | :---------: | :-------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                   |   :x:    |
| **className** |  `String`   |                                   |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablehead'` |   :x:    |

## StackedTableRowHead

From [`src/stacked-table/stacked-table-row-head.js`](./src/stacked-table/stacked-table-row-head.js)

| prop          |    type     |               default                | required | description |
| ------------- | :---------: | :----------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                      |   :x:    |
| **className** |  `String`   |                                      |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablerowhead'` |   :x:    |

## StackedTableRow

From [`src/stacked-table/stacked-table-row.js`](./src/stacked-table/stacked-table-row.js)

| prop          |    type     |             default              | required | description |
| ------------- | :---------: | :------------------------------: | :------: | ----------- |
| **children**  | `ReactNode` |                                  |   :x:    |
| **className** |  `String`   |                                  |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-stackedtablerow'` |   :x:    |

## StackedTable

From [`src/stacked-table/stacked-table.js`](./src/stacked-table/stacked-table.js)

| prop             |       type        |            default            | required | description                                                            |
| ---------------- | :---------------: | :---------------------------: | :------: | ---------------------------------------------------------------------- |
| **children**     |    `ReactNode`    |                               |   :x:    |
| **className**    |     `String`      |                               |   :x:    |
| **dataTest**     |     `String`      | `'dhis2-uicore-stackedtable'` |   :x:    |
| **headerLabels** | `Array[]<String>` |                               |   :x:    | Labels for columns. Use an empty string for a column without a header. |

## Table

From [`src/stacked-table/table.js`](./src/stacked-table/table.js)

| prop          |    type     | default |      required      | description |
| ------------- | :---------: | :-----: | :----------------: | ----------- |
| **children**  | `ReactNode` |         | :white_check_mark: |
| **className** |  `String`   |         |        :x:         |
| **dataTest**  |  `String`   |         |        :x:         |

## TableBody

From [`src/table/table-body.js`](./src/table/table-body.js)

| prop          |    type     |          default           | required | description                       |
| ------------- | :---------: | :------------------------: | :------: | --------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRow>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablebody'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableCellHead

From [`src/table/table-cell-head.js`](./src/table/table-cell-head.js)

| prop          |    type     |            default             | required | description                                                |
| ------------- | :---------: | :----------------------------: | :------: | ---------------------------------------------------------- |
| **children**  | `ReactNode` |                                |   :x:    |
| **className** |  `String`   |                                |   :x:    |
| **colSpan**   |  `String`   |                                |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablecellhead'` |   :x:    |
| **dense**     |  `Boolean`  |                                |   :x:    | Uses less padding and height for information-dense layouts |
| **role**      |  `String`   |                                |   :x:    |
| **rowSpan**   |  `String`   |                                |   :x:    |

## TableCell

From [`src/table/table-cell.js`](./src/table/table-cell.js)

| prop          |    type     |          default           | required | description                                                 |
| ------------- | :---------: | :------------------------: | :------: | ----------------------------------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    |
| **className** |  `String`   |                            |   :x:    |
| **colSpan**   |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablecell'` |   :x:    |
| **dense**     |  `Boolean`  |                            |   :x:    | Usees less padding and height for information-dense layouts |
| **role**      |  `String`   |                            |   :x:    |
| **rowSpan**   |  `String`   |                            |   :x:    |

## TableFoot

From [`src/table/table-foot.js`](./src/table/table-foot.js)

| prop          |    type     |          default           | required | description                       |
| ------------- | :---------: | :------------------------: | :------: | --------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRow>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablefoot'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableHead

From [`src/table/table-head.js`](./src/table/table-head.js)

| prop          |    type     |          default           | required | description                           |
| ------------- | :---------: | :------------------------: | :------: | ------------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRowHead>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablehead'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableRowHead

From [`src/table/table-row-head.js`](./src/table/table-row-head.js)

| prop                      |    type     |            default            | required | description                                    |
| ------------------------- | :---------: | :---------------------------: | :------: | ---------------------------------------------- |
| **children**              | `ReactNode` |                               |   :x:    | Should be `<TableCellHead>` components         |
| **className**             |  `String`   |                               |   :x:    |
| **dataTest**              |  `String`   | `'dhis2-uicore-tablerowhead'` |   :x:    |
| **role**                  |  `String`   |                               |   :x:    |
| **suppressZebraStriping** |  `Boolean`  |                               |   :x:    | Disables the default row striping for this row |

## TableRow

From [`src/table/table-row.js`](./src/table/table-row.js)

| prop                      |    type     |          default          | required | description                                             |
| ------------------------- | :---------: | :-----------------------: | :------: | ------------------------------------------------------- |
| **children**              | `ReactNode` |                           |   :x:    | Should be `<TableCell>` or `<TableCellHead>` components |
| **className**             |  `String`   |                           |   :x:    |
| **dataTest**              |  `String`   | `'dhis2-uicore-tablerow'` |   :x:    |
| **role**                  |  `String`   |                           |   :x:    |
| **suppressZebraStriping** |  `Boolean`  |                           |   :x:    | Disables the default row striping for this row          |

## Table

From [`src/table/table.js`](./src/table/table.js)

| prop                      |    type     |        default         | required | description                                                          |
| ------------------------- | :---------: | :--------------------: | :------: | -------------------------------------------------------------------- |
| **children**              | `ReactNode` |                        |   :x:    | Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components |
| **className**             |  `String`   |                        |   :x:    |
| **dataTest**              |  `String`   | `'dhis2-uicore-table'` |   :x:    |
| **role**                  |  `String`   |                        |   :x:    |
| **suppressZebraStriping** |  `Boolean`  |                        |   :x:    | Remove the default striping on alternating rows                      |

## DataTableColumnHeader

From [`src/data-table/data-table-column-header/data-table-column-header.js`](./src/data-table/data-table-column-header/data-table-column-header.js)

| prop                               |               type                |              default               | required | description |
| ---------------------------------- | :-------------------------------: | :--------------------------------: | :------: | ----------- |
| **align**                          | `Enum('left', 'center', 'right')` |                                    |   :x:    |
| **children**                       |            `ReactNode`            |                                    |   :x:    |
| **className**                      |             `String`              |                                    |   :x:    |
| **colSpan**                        |             `String`              |                                    |   :x:    |
| **dataTest**                       |             `String`              | `'dhis2-uicore-datatablecellhead'` |   :x:    |
| **filter**                         |           `requiredIf(            |
| (props) => props.onFilterIconClick |                                   |         props.showFilter,          |

    PropTypes.node

)`| | :x: | The filter element (JSX), required when onFilterIconClick or showFilter are present **fixed** |`Boolean`| | :x: | **large** |`Boolean`| | :x: | **left** |`requiredIf((props) => props.fixed && !props.top, PropTypes.string)`| | :x: | Left or top required when fixed **name** |`String`| | :x: | Can be used to match a column with a property name **onFilterIconClick** |`requiredIf((props) => props.filter, PropTypes.func)`| | :x: | **onSortIconClick** |`requiredIf((props) => props.sortDirection, PropTypes.func)`| | :x: | Sort icon click callback with`nextSortDirection`and`name`in payload **role** |`String`| | :x: | **rowSpan** |`String`| | :x: | **scope** |`String`| | :x: | **showFilter** |`requiredIf((props) => props.filter, PropTypes.bool)`| | :x: | **sortDirection** |`requiredIf(
(props) => props.onSortIconClick,
PropTypes.oneOf(SORT_DIRECTIONS)
)`| | :x: | **sortIconTitle** |`String`| | :x: | **top** |`requiredIf((props) => props.fixed && !props.left, PropTypes.string)`| | :x: | Left or top required when fixed **width** |`String` | | :x: |

## DataTableRow

From [`src/data-table/data-table-row/data-table-row.js`](./src/data-table/data-table-row/data-table-row.js)

| prop                  |     type     |            default            | required | description                                                                   |
| --------------------- | :----------: | :---------------------------: | :------: | ----------------------------------------------------------------------------- |
| **children**          | `ReactNode`  |                               |   :x:    | Should be `<DataTableCell>` or `<DataTableCellHead>` components               |
| **className**         |   `String`   |                               |   :x:    |
| **dataTest**          |   `String`   | `'dhis2-uicore-datatablerow'` |   :x:    |
| **draggable**         |  `Boolean`   |                               |   :x:    | Renders and additional table cell with drag icon and applies draggable styles |
| **expandableContent** | `requiredIf( |

    (props) => props.onExpandToggle,
    PropTypes.node

)`| | :x: | This content will be rendered into an additional row with fullwidth cell and the presence of this prop will display an additional table cell with expand icon **expanded** |`Boolean`| | :x: | Toggles expand icon (up/down) and expandable content visibility **onExpandToggle** |`requiredIf(
(props) => props.expandableContent,
PropTypes.func
)`| | :x: | Callback for expand icon cell clicks **role** |`String`| | :x: | **selected** |`Boolean` | | :x: | Adds a green background color

## TableBody

From [`src/data-table/table-elements/table-body.js`](./src/data-table/table-elements/table-body.js)

| prop          |    type     |          default           | required | description                       |
| ------------- | :---------: | :------------------------: | :------: | --------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRow>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablebody'` |   :x:    |
| **loading**   |  `Boolean`  |                            |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableFoot

From [`src/data-table/table-elements/table-foot.js`](./src/data-table/table-elements/table-foot.js)

| prop          |    type     |          default           | required | description                       |
| ------------- | :---------: | :------------------------: | :------: | --------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRow>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablefoot'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableHead

From [`src/data-table/table-elements/table-head.js`](./src/data-table/table-elements/table-head.js)

| prop          |    type     |          default           | required | description                           |
| ------------- | :---------: | :------------------------: | :------: | ------------------------------------- |
| **children**  | `ReactNode` |                            |   :x:    | Should be `<TableRowHead>` components |
| **className** |  `String`   |                            |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablehead'` |   :x:    |
| **role**      |  `String`   |                            |   :x:    |

## TableRow

From [`src/data-table/table-elements/table-row.js`](./src/data-table/table-elements/table-row.js)

| prop          |    type     |          default          | required | description                                                     |
| ------------- | :---------: | :-----------------------: | :------: | --------------------------------------------------------------- |
| **children**  | `ReactNode` |                           |   :x:    | Should be `<TableDataCell>` or `<TableDataCellHead>` components |
| **className** |  `String`   |                           |   :x:    |
| **dataTest**  |  `String`   | `'dhis2-uicore-tablerow'` |   :x:    |
| **draggable** |  `Boolean`  |                           |   :x:    | Applies draggable cursor styles                                 |
| **role**      |  `String`   |                           |   :x:    |
| **selected**  |  `Boolean`  |                           |   :x:    | Sets a selected (teal) background color                         |

## Table

From [`src/data-table/table-elements/table.js`](./src/data-table/table-elements/table.js)

| prop           |                     type                      |        default         | required | description                                                                                                                                                                                       |
| -------------- | :-------------------------------------------: | :--------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **borderless** |                   `Boolean`                   |                        |   :x:    | Removes border from the table                                                                                                                                                                     |
| **children**   |                  `ReactNode`                  |                        |   :x:    | Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components                                                                                                                              |
| **className**  |                   `String`                    |                        |   :x:    |
| **dataTest**   |                   `String`                    | `'dhis2-uicore-table'` |   :x:    |
| **layout**     | `Enum('auto', 'fixed', 'initial', 'inherit')` |        `'auto'`        |   :x:    | Sets the `table-layout` property. Switching to `fixed` can prevent style issues when dealing with a table with multiple frozen columns or when dealing with filter elements in the table headers. |
| **role**       |                   `String`                    |                        |   :x:    |
| **width**      |                   `String`                    |        `'100%'`        |   :x:    | Sets the `width` property. Providing an explicit width can prevent style issues when dealing with horizontally scrolling tables with a fixed layout.                                              |
