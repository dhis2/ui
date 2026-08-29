### NoticeBox

#### Usage

To use `NoticeBox`, you can import the component from the `@dhis2/ui` library  


```js
import { NoticeBox } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|``'dhis2-uicore-noticebox'``|||
|dense|boolean|``false``||Uses 16px icons and tighter padding and internal spacing|
|error|custom|||Applies 'error' message styles. Mutually exclusive with the `valid` and `warning` props|
|icon|node|||Replaces the default status icon; `error`, `warning`, and `valid` still set box colors|
|title|string||||
|valid|custom|||Applies 'valid' message styles. Mutually exclusive with the `error` and `warning` props|
|warning|custom|||Applies 'warning' message styles. Mutually exclusive with the `error` and `valid` props|
