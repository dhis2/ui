### MultiSelect

#### Usage

To use `MultiSelect`, you can import the component from the `@dhis2/ui` library  


```js
import { MultiSelect } from '@dhis2/ui'
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

To use `MultiSelectField`, you can import the component from the `@dhis2/ui` library  


```js
import { MultiSelectField } from '@dhis2/ui'
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

To use `MultiSelectOption`, you can import the component from the `@dhis2/ui` library  


```js
import { MultiSelectOption } from '@dhis2/ui'
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

To use `SingleSelect`, you can import the component from the `@dhis2/ui` library  


```js
import { SingleSelect } from '@dhis2/ui'
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

### SingleSelectA11y

#### Usage

To use `SingleSelectA11y`, you can import the component from the `@dhis2/ui` library  


```js
import { SingleSelectA11y } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|idPrefix|string||*|necessary for IDs that are required for accessibility *|
|options|arrayOf(custom)||*|An array of options *|
|onChange|function||*|A callback that will be called with the new value or an empty string *|
|autoFocus|boolean|`false`||Will focus the select initially *|
|className|string|`''`||Additional class names that will be applied to the root element *|
|clearText|custom(function)|`''`||This will allow us to put an aria-label on the clear button *|
|clearable|boolean|`false`||Whether a clear button should be displayed or not *|
|customOption|elementType|`undefined`||Allows to override what's rendered inside the `button[role="option"]`.<br/>Can be overriden on an individual option basis *|
|dataTest|string|`'dhis2-singleselecta11y'`||A value for a `data-test` attribute on the root element *|
|dense|boolean|`false`||Renders a select with lower height *|
|disabled|boolean|`false`||Disables all interactions with the select (except focussing) *|
|empty|node|`false`||Text or component to display when there are no options *|
|error|custom|`false`||Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props *|
|filterHelpText|string|`''`||Help text that will be displayed below the input *|
|filterLabel|string|`''`||Value will be used as aria-label attribute on the filter input *|
|filterPlaceholder|string|`''`||Placeholder for the filter input *|
|filterValue|string|`''`||Value of the filter input *|
|filterable|boolean|`false`||Whether the select should display a filter input *|
|labelledBy|string|`''`||Should contain the id of the element that labels the select, if applicable *|
|loading|boolean|`false`||Will show a loading indicator at the end of the options-list *|
|menuLoadingText|string|`''`||Text that will be displayed next to the loading indicator *|
|menuMaxHeight|string|`'288px'`||Allows to modify the max height of the menu *|
|noMatchText|custom(function)|`''`||String that will be displayed when the select is being filtered but the options array is empty *|
|optionUpdateStrategy|'off' │ 'polite' │ 'assertive'|`'polite'`||For a11y: How aggressively the user should be updated about changes in options *|
|placeholder|string|`''`||String to show when there's no value and no valueLabel *|
|prefix|string|`''`||String that will be displayed before the label of the selected option *|
|tabIndex|string │ number|`'0'`||Standard HTML tab-index attribute that will be put on the combobox's root element *|
|valid|custom|`false`||Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props *|
|value|string|`''`||As of now, this component does not support being uncontrolled *|
|valueLabel|custom(function)|`''`||When the option is not in the options list (e.g. not loaded or list is<br/>filtered), but a selected value needs to be displayed, then this prop can<br/>be used to supply the text to be shown.|
|warning|custom|`false`||Applies 'warning' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props *|
|onBlur|function|`() => undefined`||Will be called when the combobox is loses focus *|
|onEndReached|function|`() => undefined`||Will be called when the last option is scrolled into the visible area *|
|onFilterChange|function|`() => undefined`||Will be called when the filter value changes *|
|onFocus|function|`() => undefined`||Will be called when the combobox is being focused *|

### SingleSelectA11yField

#### Usage

To use `SingleSelectA11yField`, you can import the component from the `@dhis2/ui` library  


```js
import { SingleSelectA11yField } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|idPrefix|string||*|necessary for IDs that are required for accessibility *|
|label|string||*|Label displayed above the input *|
|options|arrayOf(custom)||*|An array of options *|
|onChange|function||*|A callback that will be called with the new value or an empty string *|
|autoFocus|boolean|||Will focus the select initially *|
|className|string|||Additional class names that will be applied to the root element *|
|clearText|custom(function)|||This will allow us to put an aria-label on the clear button *|
|clearable|boolean|||Whether a clear button should be displayed or not *|
|customOption|elementType|||Allows to override what's rendered inside the `button[role="option"]`.<br/>Can be overriden on an individual option basis *|
|dataTest|string|||A value for a `data-test` attribute on the root element *|
|dense|boolean|||Renders a select with lower height *|
|disabled|boolean|||Disables all interactions with the select (except focussing) *|
|empty|node|||Text or component to display when there are no options *|
|error|custom|||Applies 'error' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props *|
|filterHelpText|string|||Help text that will be displayed below the input *|
|filterLabel|string|||Value will be used as aria-label attribute on the filter input *|
|filterPlaceholder|string|||Placeholder for the filter input *|
|filterValue|string|||Value of the filter input *|
|filterable|boolean|||Whether the select should display a filter input *|
|helpText|string|||Help text, displayed below the input *|
|loading|boolean|||Will show a loading indicator at the end of the options-list *|
|menuLoadingText|string|||Text that will be displayed next to the loading indicator *|
|menuMaxHeight|string|||Allows to modify the max height of the menu *|
|noMatchText|custom(function)|||String that will be displayed when the select is being filtered but the options array is empty *|
|optionUpdateStrategy|'off' │ 'polite' │ 'assertive'|||For a11y: How aggressively the user should be updated about changes in options *|
|placeholder|string|||String to show when there's no value and no valueLabel *|
|prefix|string|||String that will be displayed before the label of the selected option *|
|required|boolean|||Whether a value is required or not *|
|tabIndex|string │ number|||Standard HTML tab-index attribute that will be put on the combobox's root element *|
|valid|custom|||Applies 'valid' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props *|
|validationText|string|||Text shown below input when `props.error` is true *|
|value|string|||As of now, this component does not support being uncontrolled *|
|valueLabel|custom(function)|||When the option is not in the options list (e.g. not loaded or list is<br/>filtered), but a selected value needs to be displayed, then this prop can<br/>be used to supply the text to be shown.|
|warning|custom|||Applies 'warning' appearance for validation feedback. Mutually exclusive with `warning` and `valid` props *|
|onBlur|function|||Will be called when the combobox is loses focus *|
|onEndReached|function|||Will be called when the last option is scrolled into the visible area *|
|onFilterChange|function|||Will be called when the filter value changes *|
|onFocus|function|||Will be called when the combobox is being focused *|

### SingleSelectField

#### Usage

To use `SingleSelectField`, you can import the component from the `@dhis2/ui` library  


```js
import { SingleSelectField } from '@dhis2/ui'
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

To use `SingleSelectOption`, you can import the component from the `@dhis2/ui` library  


```js
import { SingleSelectOption } from '@dhis2/ui'
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
