---
title: Pagination
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { Pagination } from '@dhis2/ui'

import API from '../../../components/pagination/API.md'

# Pagination

Pagination is used to navigate content across several pages.

<Demo>
    <Pagination page={2} pageCount={10} pageSize={50} total={430}/>
</Demo>

## Usage

### When to use

-   **Many items to navigate**. Use pagination when there could be many items to look through.
-   **Paired with tables**. Pagination is often used with a data table to navigate between pages of item rows in the table.
-   **In combination with search or filter**. Pagination shouldn't be the only way to find items in a long list. Make sure searching or filtering are available too.

### When not to use

-   **Few items**. If there will only be few items in a list or table, don't show a redundant pagination element.

## Format

### Position

-   Pagination should always be shown at the end of a list of items.

## Options

Different elements of the pagination component can be included, depending on the use case.

### Element: Page number selector

<Demo>
    <Pagination page={2} pageCount={10} pageSize={50} total={430} hidePageSizeSelect hidePageSummary/>
</Demo>

```jsx
<Pagination
    page={2}
    pageCount={10}
    pageSize={50}
    total={430}
    hidePageSizeSelect
    hidePageSummary
/>
```

-   Offers access to any page without navigating with previous or next buttons.
-   Use if a user might need to jump between non-sequential pages often.

### Element: Context information

<Demo>
    <Pagination page={2} pageCount={10} pageSize={50} total={430} hidePageSelect hidePageSizeSelect/>
</Demo>

```jsx
<Pagination
    page={2}
    pageCount={10}
    pageSize={50}
    total={430}
    hidePageSelect
    hidePageSizeSelect
/>
```

-   Shows a short summary of the current page in context of the whole set of items.
-   Use when positional context could be useful.
-   Showing the total number of items can be problematic for large data sets. Omit the total number of items and pages in situations when there can be many items.

### Element: Item count selector

<Demo>
    <Pagination page={2} pageCount={10} pageSize={50} total={430} hidePageSelect hidePageSummary/>
</Demo>

```jsx
<Pagination
    page={2}
    pageCount={10}
    pageSize={50}
    total={430}
    hidePageSelect
    hidePageSummary
/>
```

-   Changes the number of items included in a page.
-   Use when a user might want to customize the view.

## API Reference

<API />

## Links

-   [Demo](/demo/?path=/story/pagination--default)
