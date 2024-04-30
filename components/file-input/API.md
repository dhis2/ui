### FileInput

#### Usage

To use `FileInput`, you can import the component from the `@dhis2/ui` library  


```js
import { FileInput } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|accept|string|`'*'`||The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)|
|buttonLabel|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-fileinput'`|||
|disabled|boolean||||
|error|custom|||Input status. Mutually exclusive with `warning` and `valid`|
|initialFocus|boolean||||
|large|custom|||Button size. Mutually exclusive with `small`|
|multiple|boolean|||The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)|
|name|string||||
|small|custom|||Button size. Mutually exclusive with `large`|
|tabIndex|string||||
|valid|custom|||Input status. Mutually exclusive with `warning` and `error`|
|warning|custom|||Input status. Mutually exclusive with `valid` and `error`|
|onBlur|function|||Called with signature `(object, event)`|
|onChange|function|||Called with signature `(object, event)`|
|onFocus|function|||Called with signature `(object, event)`|
|onKeyDown|function|||Called with signature `(object, event)`|

### FileInputField

#### Usage

To use `FileInputField`, you can import the component from the `@dhis2/ui` library  


```js
import { FileInputField } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|accept|string|`'*'`||The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)|
|buttonLabel|string │ function|`() => i18n.t('Upload a file')`||Text on the button|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-fileinputfield'`|||
|disabled|boolean|||Disables the button|
|error|custom|||Applies 'error' styling to the validation text. Mutually exclusive with `warning` and `valid` props|
|helpText|string|||Useful guiding text for the user|
|initialFocus|boolean||||
|label|string|||A descriptive label above the button|
|large|custom|||Size of the button. Mutually exclusive with the `small` prop|
|multiple|boolean|||The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)|
|name|string|||Name associated with input. Passed to event handler callbacks|
|placeholder|string │ function|`() => i18n.t('No file uploaded yet')`||Placeholder below the button|
|required|boolean|||Adds an asterisk to indicate this field is required|
|small|custom|||Size of the button. Mutually exclusive with the `large` prop|
|tabIndex|string||||
|valid|custom|||Applies 'valid' styling to the validation text. Mutually exclusive with `warning` and `error` props|
|validationText|string|||Text below the button that provides validation feedback|
|warning|custom|||Applies 'warning' styling to the validation text. Mutually exclusive with `valid` and `error` props|
|onBlur|function||||
|onChange|function|||Called with signature `({ name: string, files: [] }, event)`|
|onFocus|function|||Called with signature `({ name: string, files: [] }, event)`|
|onKeyDown|function|||Called with signature `({ name: string, files: [] }, event)`|

### FileInputFieldWithList

#### Usage

To use `FileInputFieldWithList`, you can import the component from the `@dhis2/ui` library  


```js
import { FileInputFieldWithList } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onChange|function||*|Called with signature `({ name: string, files: [File] }, event)`|
|accept|string|||The `accept` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)|
|buttonLabel|string │ function|`() => i18n.t('Upload a file')`||Text on the button|
|className|string||||
|dataTest|string|`'dhis2-uiwidgets-fileinputfieldwithlist'`|||
|disabled|boolean|||Disables the button|
|error|custom|||Applies 'error' styling to the button and validation text. Mutually exclusive with `warning` and `valid` props|
|files|arrayOf(instanceOf(File))|`[]`|||
|helpText|string|||Useful guiding text for the user|
|initialFocus|boolean||||
|label|string|||A descriptive label above the button|
|large|custom|||Size of the button. Mutually exclusive with the `small` prop|
|multiple|boolean|||The `multiple` attribute of the [native file input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple)|
|name|string|||Name associated with input. Passed to event handler callbacks|
|placeholder|string │ function|`() => i18n.t('No file uploaded yet')`||Placeholder below the button|
|removeText|string │ function|`() => i18n.t('Remove')`||Text used for the button that removes a file from the list|
|required|boolean|||Adds an asterisk to indicate this field is required|
|small|custom|||Size of the button. Mutually exclusive with the `large` prop|
|tabIndex|string||||
|valid|custom|||Applies 'valid' styling to the button and validation text. Mutually exclusive with `warning` and `error` props|
|validationText|string|||Text below the button that provides validation feedback|
|warning|custom|||Applies 'warning' styling to the button and validation text. Mutually exclusive with `valid` and `error` props|
|onBlur|function|||Called with signature `({ name: string, files: [] }, event)`|
|onFocus|function|||Called with signature `({ name: string, files: [] }, event)`|
|onKeyDown|function|||Called with signature `({ name: string, files: [] }, event)`|

### FileListItem

#### Usage

To use `FileListItem`, you can import the component from the `@dhis2/ui` library  


```js
import { FileListItem } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|onRemove|function||*||
|cancelText|string||||
|className|string||||
|dataTest|string|`'dhis2-uicore-filelistitem'`|||
|label|string||||
|loading|boolean||||
|removeText|string||||
|onCancel|function||||

### FileListPlaceholder

#### Usage

To use `FileListPlaceholder`, you can import the component from the `@dhis2/ui` library  


```js
import { FileListPlaceholder } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|string||||
|dataTest|string|`'dhis2-uicore-filelistplaceholder'`|||

### FileList

#### Usage

To use `FileList`, you can import the component from the `@dhis2/ui` library  


```js
import { FileList } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-filelist'`|||
