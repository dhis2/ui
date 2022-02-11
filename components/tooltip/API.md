## Tooltip

From [`src/tooltip.js`](./src/tooltip.js)

| prop            |                   type                   |         default          | required | description                                                                                                                                                                                                   |
| --------------- | :--------------------------------------: | :----------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**    |       `Union<ReactNode\|Function>`       |                          |   :x:    | If child is a function, it's called with `{ onMouseOver, onMouseOut, ref }` args to apply to a reference element. If child is a node, it is wrapped in a `span` with the appropriate attributes and handlers. |
| **children<1>** |               `ReactNode`                |                          |   :x:    |
| **children<2>** |                `Function`                |                          |   :x:    |
| **className**   |                 `String`                 |                          |   :x:    |
| **closeDelay**  |                 `Number`                 |          `200`           |   :x:    | Time (in ms) until tooltip closes after mouse out                                                                                                                                                             |
| **content**     |               `ReactNode`                |                          |   :x:    | Content to display when the tooltip is open                                                                                                                                                                   |
| **dataTest**    |                 `String`                 | `'dhis2-uicore-tooltip'` |   :x:    |
| **maxWidth**    |                 `Number`                 |          `300`           |   :x:    | Max width of the tooltip in px                                                                                                                                                                                |
| **openDelay**   |                 `Number`                 |          `200`           |   :x:    | Time (in ms) until tooltip open after mouse over                                                                                                                                                              |
| **placement**   | `Enum('top', 'right', 'bottom', 'left')` |         `'top'`          |   :x:    | Where to place the tooltip relative to its reference                                                                                                                                                          |
