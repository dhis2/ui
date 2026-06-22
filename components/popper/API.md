### Popper

#### Usage

To use `Popper`, you can import the component from the `@dhis2/ui` library  


```js
import { Popper } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node||*|Content inside the Popper|
|className|string||||
|dataTest|string|``'dhis2-uicore-popper'``|||
|middleware|`arrayOf(object)`|||Floating UI middleware array. See https://floating-ui.com/docs/middleware|
|placement|custom|||Where to place the popper relative to its reference|
|reference|custom|||A React ref, DOM node, or virtual element for the popper to position itself against|
|strategy|'absolute' │ 'fixed'|||Positioning strategy. See https://floating-ui.com/docs/usefloating#strategy|
