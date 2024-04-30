### Tooltip

#### Usage

To use `Tooltip`, you can import the component from the `@dhis2/ui` library  


```js
import { Tooltip } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|children|node │ function|||If child is a function, it's called with `{ onMouseOver, onMouseOut, ref }` args to apply to a reference element. If child is a node, it is wrapped in a `span` with the appropriate attributes and handlers.|
|className|string||||
|closeDelay|number|`200`||Time (in ms) until tooltip closes after mouse out|
|content|node|||Content to display when the tooltip is open|
|dataTest|string|`'dhis2-uicore-tooltip'`|||
|maxWidth|number|`300`||Max width of the tooltip in px|
|openDelay|number|`200`||Time (in ms) until tooltip open after mouse over|
|placement|'top' │ 'right' │ 'bottom' │ 'left'|`'top'`||Where to place the tooltip relative to its reference|
