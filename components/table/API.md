### DataTableCell

#### Usage

To use `DataTableCell`, you can import the component from the `@dhis2/ui` library  


```js
import { DataTableCell } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|active|boolean|||To toggle border color, for example for editing|
|align|'left' │ 'center' │ 'right'|`'left'`|||
|backgroundColor|string|||Sets background color of the cell. Disables dynamic background colors from active, hover, and selected states|
|bordered|boolean||||
|children|node||||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-datatablecell'`|||
|error|custom|||Mutually exclusive with muted and valid|
|fixed|boolean|||When true a TableHeaderCell with sticky positioning will be rendered|
|large|boolean||||
|left|custom|`'auto'`||Required when fixed|
|muted|custom|||Mutually exclusive with error and valid|
|role|string||||
|rowSpan|string||||
|scope|string||||
|staticStyle|boolean|||Surpress hover and active event styles|
|tag|'td' │ 'th'|||Render a TableDataCell or TableHeaderCell respectively|
|valid|custom|||Mutually exclusive with error and muted|
|width|custom|`'auto'`||Required when fixed|
|onClick|function||||

### DataTable

#### Usage

To use `DataTable`, you can import the component from the `@dhis2/ui` library  


```js
import { DataTable } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<DataTableHead>`, `<DataTableBody>`, and `<DataTableFoot>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-datatable'`|||
|layout|'auto' │ 'fixed' │ 'initial' │ 'inherit'|`'auto'`||Sets the `datatable-layout` property. Switching to `fixed` can prevent style<br/>issues when dealing with a datatable with multiple frozen columns or when dealing<br/>with filter elements in the datatable headers.|
|role|string||||
|scrollHeight|string|||Sets max-height of scrollbox|
|scrollWidth|string|||Sets max-width of scrollbox|
|width|string|`'100%'`||Sets the `width` property. Providing an explicit width can prevent style<br/>issues when dealing with horizontally scrolling datatables with a fixed layout.|

### StackedTableBody

#### Usage

To use `StackedTableBody`, you can import the component from the `@dhis2/ui` library  


```js
import { StackedTableBody } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablebody'`|||

### StackedTableCellHead

#### Usage

To use `StackedTableCellHead`, you can import the component from the `@dhis2/ui` library  


```js
import { StackedTableCellHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|string|`''`|||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-stackedtablecellhead'`|||
|rowSpan|string||||

### StackedTableCell

#### Usage

To use `StackedTableCell`, you can import the component from the `@dhis2/ui` library  


```js
import { StackedTableCell } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|colSpan|string||||
|column|number||||
|dataTest|string|`'dhis2-uicore-stackedtablecell'`|||
|headerLabels|arrayOf(string)|`[]`|||
|hideTitle|boolean||||
|rowSpan|string||||
|title|string||||

### StackedTableFoot

#### Usage

To use `StackedTableFoot`, you can import the component from the `@dhis2/ui` library  


```js
import { StackedTableFoot } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablefoot'`|||

### StackedTableHead

#### Usage

To use `StackedTableHead`, you can import the component from the `@dhis2/ui` library  


```js
import { StackedTableHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablehead'`|||

### StackedTableRowHead

#### Usage

To use `StackedTableRowHead`, you can import the component from the `@dhis2/ui` library  


```js
import { StackedTableRowHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablerowhead'`|||

### StackedTableRow

#### Usage

To use `StackedTableRow`, you can import the component from the `@dhis2/ui` library  


```js
import { StackedTableRow } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablerow'`|||

### StackedTable

#### Usage

To use `StackedTable`, you can import the component from the `@dhis2/ui` library  


```js
import { StackedTable } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtable'`|||
|headerLabels|arrayOf(string)|||Labels for columns. Use an empty string for a column without a header.|

### Table

#### Usage

To use `Table`, you can import the component from the `@dhis2/ui` library  


```js
import { Table } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*||
|className|string||||
|dataTest|string||||

### TableBody

#### Usage

To use `TableBody`, you can import the component from the `@dhis2/ui` library  


```js
import { TableBody } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRow>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablebody'`|||
|role|string||||

### TableCellHead

#### Usage

To use `TableCellHead`, you can import the component from the `@dhis2/ui` library  


```js
import { TableCellHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-tablecellhead'`|||
|dense|boolean|||Uses less padding and height for information-dense layouts|
|role|string||||
|rowSpan|string||||

### TableCell

#### Usage

To use `TableCell`, you can import the component from the `@dhis2/ui` library  


```js
import { TableCell } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-tablecell'`|||
|dense|boolean|||Usees less padding and height for information-dense layouts|
|role|string||||
|rowSpan|string||||

### TableFoot

#### Usage

To use `TableFoot`, you can import the component from the `@dhis2/ui` library  


```js
import { TableFoot } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRow>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablefoot'`|||
|role|string||||

### TableHead

#### Usage

To use `TableHead`, you can import the component from the `@dhis2/ui` library  


```js
import { TableHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRowHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablehead'`|||
|role|string||||

### TableRowHead

#### Usage

To use `TableRowHead`, you can import the component from the `@dhis2/ui` library  


```js
import { TableRowHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableCellHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablerowhead'`|||
|role|string||||
|suppressZebraStriping|boolean|||Disables the default row striping for this row|

### TableRow

#### Usage

To use `TableRow`, you can import the component from the `@dhis2/ui` library  


```js
import { TableRow } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableCell>` or `<TableCellHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablerow'`|||
|role|string||||
|suppressZebraStriping|boolean|||Disables the default row striping for this row|

### Table

#### Usage

To use `Table`, you can import the component from the `@dhis2/ui` library  


```js
import { Table } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-table'`|||
|role|string||||
|suppressZebraStriping|boolean|||Remove the default striping on alternating rows|

### DataTableColumnHeader

#### Usage

To use `DataTableColumnHeader`, you can import the component from the `@dhis2/ui` library  


```js
import { DataTableColumnHeader } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|align|'left' │ 'center' │ 'right'||||
|children|node||||
|className|string||||
|colSpan|string||||
|dataTest|string|`'dhis2-uicore-datatablecellhead'`|||
|filter|custom(function)|||The filter element (JSX), required when onFilterIconClick or showFilter are present|
|fixed|boolean||||
|large|boolean||||
|left|custom(function)|||Left or top required when fixed|
|name|string|||Can be used to match a column with a property name|
|role|string||||
|rowSpan|string||||
|scope|string||||
|showFilter|custom(function)||||
|sortDirection|custom(function)||||
|sortIconTitle|string||||
|top|custom(function)|||Left or top required when fixed|
|width|string||||
|onFilterIconClick|custom(function)||||
|onSortIconClick|custom(function)|||Sort icon click callback with `nextSortDirection` and `name` in payload|

### DataTableRow

#### Usage

To use `DataTableRow`, you can import the component from the `@dhis2/ui` library  


```js
import { DataTableRow } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<DataTableCell>` or `<DataTableCellHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-datatablerow'`|||
|draggable|boolean|||Renders and additional table cell with drag icon and applies draggable styles|
|expandableContent|custom(function)|||This content will be rendered into an additional row with fullwidth cell and the presence of this prop will display an additional table cell with expand icon|
|expanded|boolean|||Toggles expand icon (up/down) and expandable content visibility|
|role|string||||
|selected|boolean|||Adds a green background color|
|onExpandToggle|custom(function)|||Callback for expand icon cell clicks|

### TableBody

#### Usage

To use `TableBody`, you can import the component from the `@dhis2/ui` library  


```js
import { TableBody } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRow>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablebody'`|||
|loading|boolean||||
|role|string||||

### TableFoot

#### Usage

To use `TableFoot`, you can import the component from the `@dhis2/ui` library  


```js
import { TableFoot } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRow>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablefoot'`|||
|role|string||||

### TableHead

#### Usage

To use `TableHead`, you can import the component from the `@dhis2/ui` library  


```js
import { TableHead } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableRowHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablehead'`|||
|role|string||||

### TableRow

#### Usage

To use `TableRow`, you can import the component from the `@dhis2/ui` library  


```js
import { TableRow } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `<TableDataCell>` or `<TableDataCellHead>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-tablerow'`|||
|draggable|boolean|||Applies draggable cursor styles|
|role|string||||
|selected|boolean|||Sets a selected (teal) background color|

### Table

#### Usage

To use `Table`, you can import the component from the `@dhis2/ui` library  


```js
import { Table } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|borderless|boolean|||Removes border from the table|
|children|node|||Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components|
|className|string||||
|dataTest|string|`'dhis2-uicore-table'`|||
|layout|'auto' │ 'fixed' │ 'initial' │ 'inherit'|`'auto'`||Sets the `table-layout` property. Switching to `fixed` can prevent style<br/>issues when dealing with a table with multiple frozen columns or when dealing<br/>with filter elements in the table headers.|
|role|string||||
|width|string|`'100%'`||Sets the `width` property. Providing an explicit width can prevent style<br/>issues when dealing with horizontally scrolling tables with a fixed layout.|
