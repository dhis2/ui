### SelectorBar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { SelectorBar } from '@dhis2-ui/selector-bar'
```

#### Props

| Name                   | Type     | Default                  | Required | Description |
| ---------------------- | -------- | ------------------------ | -------- | ----------- |
| children               | any      |                          | \*       |             |
| additionalContent      | any      |                          |          |             |
| className              | string   |                          |          |             |
| dataTest               | string   | `'dhis2-ui-selectorbar'` |          |             |
| disableClearSelections | boolean  |                          |          |             |
| onClearSelectionClick  | function |                          |          |             |

### SelectorBarItem

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { SelectorBarItem } from '@dhis2-ui/selector-bar'
```

#### Props

| Name           | Type     | Default                      | Required | Description |
| -------------- | -------- | ---------------------------- | -------- | ----------- |
| children       | any      |                              | \*       |             |
| label          | string   |                              | \*       |             |
| noValueMessage | string   |                              | \*       |             |
| open           | boolean  |                              | \*       |             |
| setOpen        | function |                              | \*       |             |
| className      | string   |                              |          |             |
| dataTest       | string   | `'dhis2-ui-selectorbaritem'` |          |             |
| disabled       | boolean  |                              |          |             |
| value          | string   |                              |          |             |
