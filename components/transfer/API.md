### TransferOption

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { TransferOption } from '@dhis2-ui/transfer'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|label|node||*||
|value|string||*||
|className|string||||
|dataTest|string|`'dhis2-uicore-transferoption'`|||
|disabled|boolean||||
|highlighted|boolean||||
|onClick|function||||
|onDoubleClick|function||||

### Transfer

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Transfer } from '@dhis2-ui/transfer'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|options|arrayOf({<br/>  "label": "string",<br/>  "value": "string",<br/>  "disabled": "boolean"<br/>})||*||
|onChange|function||*||
|addAllText|string||||
|addIndividualText|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-transfer'`|||
|disabled|boolean||||
|enableOrderChange|boolean||||
|filterCallback|function|`defaultFilterCallback`|||
|filterCallbackPicked|function|`defaultFilterCallback`|||
|filterLabel|string||||
|filterLabelPicked|string||||
|filterPlaceholder|string||||
|filterPlaceholderPicked|string||||
|filterable|boolean||||
|filterablePicked|boolean||||
|height|string|`'240px'`|||
|hideFilterInput|boolean||||
|hideFilterInputPicked|boolean||||
|initialSearchTerm|string|`''`|||
|initialSearchTermPicked|string|`''`|||
|leftFooter|node||||
|leftHeader|node||||
|loading|boolean||||
|loadingPicked|boolean||||
|maxSelections|1 │ Infinity|`Infinity`|||
|optionsWidth|string|`'320px'`|||
|removeAllText|string||||
|removeIndividualText|string||||
|renderOption|function|`(option) => <TransferOption {...option} />`|||
|rightFooter|node||||
|rightHeader|node||||
|searchTerm|string||||
|searchTermPicked|string||||
|selected|arrayOf(string)|`[]`|||
|selectedEmptyComponent|node||||
|selectedWidth|string|`'320px'`|||
|sourceEmptyPlaceholder|node||||
|onEndReached|function||||
|onEndReachedPicked|function||||
|onFilterChange|function||||
|onFilterChangePicked|function||||
