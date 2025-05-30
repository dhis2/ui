### Popover

#### Usage

To use `Popover`, you can import the component from the `@dhis2/ui` library  


```js
import { Popover } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*||
|arrow|boolean|``true``||Show or hide the arrow|
|className|string||||
|dataTest|string|``'dhis2-uicore-popover'``|||
|elevation|string|``elevations.popover``||Box-shadow to create appearance of elevation.  Use `elevations` constants from the UI library.|
|maxWidth|number|``360``|||
|observePopperResize|boolean||||
|observeReferenceResize|boolean||||
|placement|custom|``'top'``|||
|reference|custom|||A React ref that refers to the element the Popover should position against|
|onClickOutside|function||||
