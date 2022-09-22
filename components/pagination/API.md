### Pagination

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Pagination } from '@dhis2-ui/pagination'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|page|number||*||
|pageSize|number||*||
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-pagination'`|||
|disabled|boolean||||
|hidePageSelect|boolean||||
|hidePageSizeSelect|boolean||||
|hidePageSummary|boolean||||
|isLastPage|boolean||||
|nextPageText|string │ function|`() => i18n.t('Next')`|||
|pageCount|number||||
|pageLength|custom(function)||||
|pageSelectText|string │ function|`() => i18n.t('Page')`|||
|pageSizeSelectText|string │ function|`() => i18n.t('Items per page')`|||
|pageSizes|arrayOf(string)|`['5', '10', '20', '30', '40', '50', '75', '100']`|||
|pageSummaryText|string │ function|`getDefaultPageSummaryText`|||
|previousPageText|string │ function|`() => i18n.t('Previous')`|||
|total|number||||
|onPageChange|function||||
|onPageSizeChange|function||||
