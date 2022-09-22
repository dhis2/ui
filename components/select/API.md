### MultiSelect

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { MultiSelect } from '@dhis2-ui/select'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|clearText|custom(function)|||Required if `clearable` prop is `true`|
|clearable|boolean|||Adds a 'clear' option to the menu|
|dataTest|string|`'dhis2-uicore-multiselect'`|||
|dense|boolean||||
|disabled|boolean||||
|empty|node||||
|error|custom||||
|filterPlaceholder|string||||
|filterable|boolean|||Adds a 'filter' field to the menu|
|initialFocus|boolean||||
|inputMaxHeight|string||||
|loading|boolean||||
|loadingText|string||||
|maxHeight|string||||
|noMatchText|custom(function)|||Required if `filterable` prop is `true`|
|placeholder|string||||
|prefix|string||||
|selected|arrayOf(string)|`[]`|||
|tabIndex|string||||
|valid|custom||||
|warning|custom||||
|onBlur|function||||
|onChange|function||||
|onFocus|function||||
|onKeyDown|function||||

### MultiSelectField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { MultiSelectField } from '@dhis2-ui/select'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `MultiSelectOption` components|
|className|string||||
|clearText|string │ function|`() => i18n.t('Clear')`||Label for the button that clears selections|
|clearable|boolean|||Adds a button to the MultiSelect that clears selections when pressed|
|dataTest|string|`'dhis2-uiwidgets-multiselectfield'`|||
|dense|boolean|||Makes the MultiSelect smaller|
|disabled|boolean|||Disables the MultiSelect|
|empty|node │ function|`() => i18n.t('No data found')`||Text to display when there are no options|
|error|custom|||Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props|
|filterPlaceholder|node │ function|`() => i18n.t('Type to filter options')`||Placeholder text to show in the filter field when it is empty|
|filterable|boolean|||Adds a field to filter options|
|helpText|string|||Useful guiding text to display below the MultiSelect|
|initialFocus|boolean|||Grabs initial focus on the page|
|inputMaxHeight|string|||Constrains the height of the input|
|inputWidth|string|||Sets the width of the input. Can be any valid CSS measurement|
|label|string|||Text for the label above the MultiSelect|
|loading|boolean|||Applies a loading appearance to the dropdown options|
|loadingText|string │ function|`() => i18n.t('Loading options')`||Text to display when `loading` is true|
|maxHeight|string|||Constrains height of the MultiSelect|
|noMatchText|string │ function|`() => i18n.t('No options found')`||Text to display when there are no filter results|
|placeholder|string|||Placeholder text when the MultiSelect is empty|
|prefix|string|||Leading text to prefix selections|
|required|boolean|||Indicates that a selection is required|
|selected|arrayOf(string)|`[]`||Selected items in the MultiSelect (each string should refer to the item's `value` attribute)|
|tabIndex|string||||
|valid|custom|||Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props|
|validationText|string|||Text to provide form validation feedback. Receives styles according to validation status|
|warning|custom|||Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props|
|onBlur|function|||Called with signature `({ selected: [String] }, event)`|
|onChange|function|||Called with signature `({ selected: [String] }, event)`|
|onFocus|function|||Called with signature `({ selected: [String] }, event)`|
|onKeyDown|function|||Called with signature `({ selected: [String] }, event)`|

### MultiSelectOption

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { MultiSelectOption } from '@dhis2-ui/select'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|label|string||*||
|value|string||*||
|active|boolean||||
|className|string||||
|dataTest|string|`'dhis2-uicore-multiselectoption'`|||
|disabled|boolean||||
|onClick|function||||

### SingleSelect

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SingleSelect } from '@dhis2-ui/select'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|clearText|custom(function)|||Text on button that clears selection. Required if `clearable` prop is true|
|clearable|boolean|||Adds a button to clear selection|
|dataTest|string|`'dhis2-uicore-singleselect'`|||
|dense|boolean||||
|disabled|boolean||||
|empty|node|||Text or component to display when there are no options|
|error|custom|||Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props|
|filterPlaceholder|string||||
|filterable|boolean|||Adds a filter field to add text to filter options|
|initialFocus|boolean||||
|inputMaxHeight|string||||
|loading|boolean||||
|loadingText|string||||
|maxHeight|string||||
|noMatchText|custom(function)|||Text to show when filter returns no results. Required if `filterable` prop is true|
|placeholder|string||||
|prefix|string||||
|selected|string|`''`|||
|tabIndex|string||||
|valid|custom|||Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `error` props|
|warning|custom|||Applies 'warning' appearance for validation feedback. Mutually exclusive with `valid` and `error` props|
|onBlur|function||||
|onChange|function||||
|onFocus|function||||
|onKeyDown|function||||

### SingleSelectField

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SingleSelectField } from '@dhis2-ui/select'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Should be `SingleSelectOption` components|
|className|string||||
|clearText|string │ function|`() => i18n.t('Clear')`||Label for the button that clears selections|
|clearable|boolean|||Adds a button to the SingleSelect that clears selections when pressed|
|dataTest|string|`'dhis2-uiwidgets-singleselectfield'`|||
|dense|boolean|||Makes the SingleSelect smaller|
|disabled|boolean|||Disables the SingleSelect|
|empty|node │ function|`() => i18n.t('No data found')`||Text to display when there are no options|
|error|custom|||Adds 'error' appearance for validation feedback. Mutually exclusive with 'valid' and 'warning' props|
|filterPlaceholder|node │ function|`() => i18n.t('Type to filter options')`||Placeholder text to show in the filter field when it is empty|
|filterable|boolean|||Adds a field to filter options|
|helpText|string|||Useful guiding text to display below the SingleSelect|
|initialFocus|boolean|||Grabs initial focus on the page|
|inputMaxHeight|string|||Constrains the height of the input|
|inputWidth|string|||Sets the width of the input. Can be any valid CSS measurement|
|label|string|||Text for the label above the SingleSelect|
|loading|boolean|||Applies a loading appearance to the dropdown options|
|loadingText|string │ function|`() => i18n.t('Loading options')`||Text to display when `loading` is true|
|maxHeight|string|||Constrains height of the SingleSelect|
|noMatchText|string │ function|`() => i18n.t('No options found')`||Text to display when there are no filter results|
|placeholder|string|||Placeholder text when the SingleSelect is empty|
|prefix|string|||Leading text to prefix selections|
|required|boolean|||Indicates that a selection is required|
|selected|string|`''`||Selected item in the SingleSelect (the string should refer to the item's `value` attribute)|
|tabIndex|string||||
|valid|custom|||Adds 'valid' appearance for validation feedback. Mutually exclusive with 'error' and 'warning' props|
|validationText|string|||Text to provide form validation feedback. Receives styles according to validation status|
|warning|custom|||Adds 'warning' appearance for validation feedback. Mutually exclusive with 'valid' and 'error' props|
|onBlur|function|||Called with signature `({ selected: string }, event)`|
|onChange|function|||Called with signature `({ selected: string }, event)`|
|onFocus|function|||Called with signature `({ selected: string }, event)`|
|onKeyDown|function|||Called with signature `({ selected: string }, event)`|

### SingleSelectOption

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { SingleSelectOption } from '@dhis2-ui/select'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|label|string||*||
|value|string||*||
|active|boolean||||
|className|string||||
|dataTest|string|`'dhis2-uicore-singleselectoption'`|||
|disabled|boolean||||
|onClick|function||||
