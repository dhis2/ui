### Node

#### Usage

To use `Node`, you can import the component from the `@dhis2/ui` library  


```js
import { Node } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node|||Content below this level of the hierarchy; children are revealed when this leaf is 'open'|
|className|string||||
|component|element|||Content/label for this leaf, for example a checkbox|
|dataTest|string|`'dhis2-uicore-node'`|||
|icon|node|||A custom icon to use instead of a toggle arrow|
|open|boolean||||
|onClose|function||||
|onOpen|function||||
