### Pagination

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { Pagination } from '@dhis2-ui/pagination'
```

#### Props

| Name               | Type              | Default                                            | Required | Description |
| ------------------ | ----------------- | -------------------------------------------------- | -------- | ----------- |
| page               | number            |                                                    | \*       |             |
| pageCount          | number            |                                                    | \*       |             |
| pageSize           | number            |                                                    | \*       |             |
| total              | number            |                                                    | \*       |             |
| className          | string            |                                                    |          |             |
| dataTest           | string            | `'dhis2-uiwidgets-pagination'`                     |          |             |
| hidePageSelect     | boolean           |                                                    |          |             |
| hidePageSizeSelect | boolean           |                                                    |          |             |
| hidePageSummary    | boolean           |                                                    |          |             |
| nextPageText       | string │ function | `() => i18n.t('Next')`                             |          |             |
| pageSelectText     | string │ function | `() => i18n.t('Page')`                             |          |             |
| pageSizeSelectText | string │ function | `() => i18n.t('Items per page')`                   |          |             |
| pageSizes          | arrayOf(string)   | `['5', '10', '20', '30', '40', '50', '75', '100']` |          |             |
| pageSummaryText    | string │ function | `(interpolationObject) =>                          |

i18n.t(
'Page {{page}} of {{pageCount}}, items {{firstItem}}-{{lastItem}} of {{total}}',
interpolationObject
)`||| |previousPageText|string │ function|`() => i18n.t('Previous')`|||
|onPageChange|function||||
|onPageSizeChange|function||||
