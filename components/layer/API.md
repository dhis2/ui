### Layer

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Layer } from '@dhis2-ui/layer'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||||
|className|string||||
|dataTest|string|`'dhis2-uicore-layer'`|||
|disablePortal|boolean|||Disable the Portal, useful for nesting layers|
|level|number │ string|`'auto'`||Z-index level|
|position|'absolute' │ 'fixed'|`'fixed'`|||
|translucent|boolean|||Adds a semi-transparent background|
|onBackdropClick|function|||Backdrop click handler|
|onClick|custom|||Click handler - DEPRECATED|
