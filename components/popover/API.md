### Popover

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.


```js
import { Popover } from '@dhis2-ui/popover'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*||
|arrow|boolean|`true`||Show or hide the arrow|
|className|string||||
|dataTest|string|`'dhis2-uicore-popover'`|||
|elevation|string|`elevations.e200`||Box-shadow to create appearance of elevation.  Use `elevations` constants from the UI library.|
|maxWidth|number|`360`|||
|observePopperResize|boolean||||
|observeReferenceResize|boolean||||
|placement|custom|`'top'`|||
|reference|custom|||A React ref that refers to the element the Popover should position against|
|onClickOutside|function||||
