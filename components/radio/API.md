### Radio

#### Usage

To use `Radio`, you can import the component from the `@dhis2/ui` library  


```js
import { Radio } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|checked|boolean||||
|className|string||||
|dataTest|string|`'dhis2-uicore-radio'`|||
|dense|boolean||||
|disabled|boolean||||
|error|custom|||Adds 'error' styling for feedback. Mutually exclusive with `valid` and `warning` props|
|initialFocus|boolean||||
|label|node||||
|name|string|||Name associated with this element. Passed in object to event handler functions|
|tabIndex|string||||
|valid|custom|||Adds 'valid' styling for feedback. Mutually exclusive with `error` and `warning` props|
|value|string|||Value associated with this element. Passed in object to event handler functions|
|warning|custom|||Adds 'warning' styling for feedback. Mutually exclusive with `valid` and `error` props|
|onBlur|function|||Called with the signature `({ name: string, value: string, checked: bool }, event)`|
|onChange|function|||Called with the signature `({ name: string, value: string, checked: bool }, event)`|
|onFocus|function|||Called with the signature `({ name: string, value: string, checked: bool }, event)`|
|onKeyDown|function|||Called with the signature `({ name: string, value: string, checked: bool }, event)`|
