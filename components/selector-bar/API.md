## SelectorBar

From [`src/selector-bar/selector-bar.js`](./src/selector-bar/selector-bar.js)

| prop                       |    type    |         default          |      required      | description |
| -------------------------- | :--------: | :----------------------: | :----------------: | ----------- |
| **additionalContent**      |    `*`     |                          |        :x:         |
| **children**               |    `*`     |                          | :white_check_mark: |
| **className**              |  `String`  |                          |        :x:         |
| **dataTest**               |  `String`  | `'dhis2-ui-selectorbar'` |        :x:         |
| **disableClearSelections** | `Boolean`  |                          |        :x:         |
| **onClearSelectionClick**  | `Function` |                          |        :x:         |

## SelectorBarItem

From [`src/selector-bar-item/selector-bar-item.js`](./src/selector-bar-item/selector-bar-item.js)

The reason this component expects the "open" state and "setOpen" function is
because certain actions inside the props.children might have to set "open"
to false as well.
A good example is selecting a value (which is not a click outside) and this
component neither has any control over that component nor does it have a way
to "observe" that behavior. Especially for selection bar items that allow
"multiple" selections, this would be more or less impossible to predict
inside this component

| prop               |    type    |           default            |      required      | description |
| ------------------ | :--------: | :--------------------------: | :----------------: | ----------- |
| **children**       |    `*`     |                              | :white_check_mark: |
| **className**      |  `String`  |                              |        :x:         |
| **dataTest**       |  `String`  | `'dhis2-ui-selectorbaritem'` |        :x:         |
| **disabled**       | `Boolean`  |                              |        :x:         |
| **label**          |  `String`  |                              | :white_check_mark: |
| **noValueMessage** |  `String`  |                              | :white_check_mark: |
| **open**           | `Boolean`  |                              | :white_check_mark: |
| **setOpen**        | `Function` |                              | :white_check_mark: |
| **value**          |  `String`  |                              |        :x:         |
