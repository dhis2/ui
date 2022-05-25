### DataTableCell

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { DataTableCell } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { DataTable } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableBody } from '@dhis2-ui/table'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablebody'`|||

### StackedTableCellHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableCellHead } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableCell } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableFoot } from '@dhis2-ui/table'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablefoot'`|||

### StackedTableHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableHead } from '@dhis2-ui/table'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablehead'`|||

### StackedTableRowHead

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableRowHead } from '@dhis2-ui/table'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablerowhead'`|||

### StackedTableRow

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTableRow } from '@dhis2-ui/table'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-stackedtablerow'`|||

### StackedTable

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { StackedTable } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Table } from '@dhis2-ui/table'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*||
|className|string||||
|dataTest|string||||

### TableBody

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableBody } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableCellHead } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableCell } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableFoot } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableHead } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableRowHead } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableRow } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Table } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { DataTableColumnHeader } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { DataTableRow } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableBody } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableFoot } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableHead } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TableRow } from '@dhis2-ui/table'
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

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Table } from '@dhis2-ui/table'
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
