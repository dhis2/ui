---
title: Data table
---

import { Demo } from '../../src/components/DemoComponent.jsx'

# Data table

A data table is used to display and allow interaction with data in a structured way.

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--default" target="_blank">Storybook demo: Date table</a>.</p> 
</Demo>

## Usage

### When to use

-   **Working with complex data**. Use a data table whenever a user needs to look at or work with complex data.

### When not to use

-   **Summarizing data**. Don't use a data table if a user doesn't need to look at all the data, but instead needs a summary. An alternative is a summary with optional access to the source data table if needed.

## Options

### Sorting

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--column-header-sorting" target="_blank">Storybook demo: Sorting</a>.</p> 
</Demo>

-   Data table items can be sorted by different columns by clicking on the sort icon in a column header.
-   Always allow sorting of items by different columns unless the order is specific and shouldn't be changed.

### Filtering: Inline

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--inline-filtering" target="_blank">Storybook demo: Filtering inline</a>.</p> 
</Demo>

-   Use inline filters in complex interfaces to offer filtering functionality without extra controls outside of the table.
-   If filtering is the main functionality of the data table, consider offering standalone filters. Read more about the standalone filters pattern here ==TODO: LINK==.

### Fixed header

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--fixed-header" target="_blank">Storybook demo: Fixed header</a>.</p> 
</Demo>

-   Use a fixed header in data tables that are used to browse a lot of data. Fixed headers stay in view and make it easier to understand what cells contain.

### Fixed columns

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--fixed-first-column" target="_blank">Storybook demo: Fixed column</a>.</p> 
</Demo>

-   Use fixed columns in dense interfaces where the table might need to be scrolled horizontally.
-   Any number of columns can be fixed, but usually a single column is enough, as long as it provides a clear reference for the rest of the row.

### Expandable rows

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--expandable-content" target="_blank">Storybook demo: Expandable rows</a>.</p> 
</Demo>

-   Use expandable rows if there's more useful information that doesn't fit well into columns, like paragraphs of text, images, or video.

### Selectable rows

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--selectable-rows" target="_blank">Storybook demo: Selectable rows</a>.</p> 
</Demo>

-   Use selectable rows if a user can perform batch actions on rows in the data table, like selecting several rows and exporting or deleting them.

### Draggable rows

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--draggable-rows" target="_blank">Storybook demo: Draggable rows</a>.</p> 
</Demo>

-   Use draggable rows if the order of rows in the data table has a meaningful impact. With draggable rows, a user can drag rows to change the order.

### Bordered cells

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--bordered-cells" target="_blank">Storybook demo: Bordered cells</a>.</p> 
</Demo>

-   Use bordered cells when showing complex data that might have similar values, like long numbers, to help a user visually scan data values.

### Built-in styles

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--cell-styling" target="_blank">Storybook demo: Built-in styles</a>.</p> 
</Demo>

-   A data table offers several built-in text styles.
-   Use the built-in styles to help offer a consistent data table experience across DHIS2 apps.

### Large cells

<Demo>
    <p><a href="https://ui.dhis2.nu/demo/?path=/story/data-display-datatable--large-cells" target="_blank">Storybook demo: Large cells</a>.</p> 
</Demo>

-   Use large cells can be used for data tables that will don't show a lot of rows.
-   Large cells can help users scan and work with a few rows.

## Patterns

Patterns are common ways of achieving some functionality. Patterns aren't offered as prebuilt components, but should be built and tweaked according to the use case.

### Pagination

==TODO: example==

-   Use the pagination component ==TODO: link== in a data table footer to allow navigation between pages.

### Search

==TODO: example==

-   A text input ==TODO: link== offers a quick way to search for items in a data table.
-   Make it clear what attributes the search applies to with placeholder text, like _Search by name or code_.

### Filtering: Standalone

==TODO: example==

-   Use standalone filters when the filtering functionality is likely to be used as the main use case for the data table.
-   A common design is to use a select ==TODO: link== control for each column, as in the demo above.

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

## Examples

==TODO: examples==

## Links

-   Demo ==TODO: link==
-   API reference ==TODO: link==
