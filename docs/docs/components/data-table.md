---
title: Data table
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../collections/ui/src/table/API.md'

# Data table

A data table is used to display and allow interaction with data in a structured way.

<Demo
    path="datatable--default"
    height="300px"
/>

A minimal version of the demo looks like this.

```jsx
<DataTable>
    <TableHead>
        <DataTableRow>
            <DataTableColumnHeader>First name</DataTableColumnHeader>
        </DataTableRow>
    </TableHead>
    <TableBody>
        <DataTableRow>
            <DataTableCell>Onyekachukwu</DataTableCell>
        </DataTableRow>
    </TableBody>
    <TableFoot>
        <DataTableRow>
            <DataTableCell>Footer content</DataTableCell>
        </DataTableRow>
    </TableFoot>
</DataTable>
```

## Usage

### When to use

-   **Working with complex data**. Use a data table whenever a user needs to look at or work with complex data.

### When not to use

-   **Summarizing data**. Don't use a data table if a user doesn't need to look at all the data, but instead needs a summary. An alternative is a summary with optional access to the source data table if needed.

## Options

### Sorting

<Demo
    path="datatable--column-header-sorting"
    height="250px"
/>

-   Data table items can be sorted by different columns by clicking on the sort icon in a column header.
-   Always allow sorting of items by different columns unless the order is specific and shouldn't be changed.

### Filtering: Inline

<Demo
    path="datatable--inline-filtering"
    height="250px"
/>

-   Use inline filters in complex interfaces to offer filtering functionality without extra controls outside of the table.
-   If filtering is the main functionality of the data table, consider offering standalone filters.

### Fixed header

<Demo
    path="datatable--fixed-header"
    height="450px"
/>

-   Use a fixed header in data tables that are used to browse a lot of data. Fixed headers stay in view and make it easier to understand what cells contain.

### Fixed columns

<Demo
    path="datatable--fixed-first-column"
    height="350px"
/>

-   Use fixed columns in dense interfaces where the table might need to be scrolled horizontally.
-   Any number of columns can be fixed, but usually a single column is enough, as long as it provides a clear reference for the rest of the row.

### Expandable rows

<Demo
    path="datatable--expandable-content"
    height="280px"
/>

-   Use expandable rows if there's more useful information that doesn't fit well into columns, like paragraphs of text, images, or video.

### Selectable rows

<Demo
    path="datatable--selectable-rows"
    height="280px"
/>

-   Use selectable rows if a user can perform batch actions on rows in the data table, like selecting several rows and exporting or deleting them.

### Draggable rows

<Demo
    path="datatable--draggable-rows"
    height="350px"
/>

-   Use draggable rows if the order of rows in the data table has a meaningful impact. With draggable rows, a user can drag rows to change the order.

### Bordered cells

<Demo
    path="datatable--bordered-cells"
    height="350px"
/>

-   Use bordered cells when showing complex data that might have similar values, like long numbers, to help a user visually scan data values.

### Built-in styles

<Demo
    path="datatable--cell-styling"
    height="350px"
/>

-   A data table offers several built-in text styles.
-   Use the built-in styles to help offer a consistent data table experience across DHIS2 apps.

### Large cells

<Demo
    path="datatable--large-cells"
    height="350px"
/>

-   Use large cells can be used for data tables that will don't show a lot of rows.
-   Large cells can help users scan and work with a few rows.

## Patterns

Patterns are common ways of achieving some functionality. Patterns aren't offered as prebuilt components, but should be built and tweaked according to the use case.

### Pagination

==TODO: example==

-   Use the [`Pagination`](pagination.md) component in a data table footer to allow navigation between pages.

### Search

==TODO: example==

-   A text [`Input`](inputfield.md) offers a quick way to search for items in a data table.
-   Make it clear what attributes the search applies to with placeholder text, like _Search by name or code_.

### Filtering: Standalone

==TODO: example==

-   Use standalone filters when the filtering functionality is likely to be used as the main use case for the data table.
-   A common design is to use a [`Select`](select.md) control for each column, as in the demo above.

### Row actions

==TODO: example==

-   Row actions are often shown as buttons in the last column of a data table.
-   Use row actions to offer actions for every row in the table.
-   Row actions can add a lot of complexity to a page, so don't show too many buttons. It often makes sense to offer secondary actions through a context menu button.

### Status

==TODO: example==

-   Use a tag to show a status for every row in a data table.
-   Make sure every row has a status, even if a tag shows _None_ or _No status_. Don't leave status cells blank.

### State: Empty

==TODO: example==

-   Use the data table empty state to explain why there isn't anything to show and to offer a way of fixing that, if it's a problem.
-   In the example above, the empty data table tells the user that there aren't any patients and offers them a shortcut to start registering.
-   A data table empty state should be customized for each use case.

## Guidelines

### Using and combining options

-   Only use the options that target a specific user need for that data table.
-   Avoid using `expandable` and `reorderable` rows together. Dragging and dropping doesn't work well when each row can have a different height.
-   Avoid using `expandable` and `bordered` rows together. The cell borders make the relationship between the row and the expanded content unclear.

## API Reference

<API />

## Links

-   <a href="/demo/?path=datatable--default" target="_blank">Demo</a>
