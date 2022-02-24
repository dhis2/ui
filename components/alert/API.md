### AlertBar

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { AlertBar } from '@dhis2-ui/alert'
```

#### Props

| Name                                           | Type       | Default                   | Required | Description                                              |
| ---------------------------------------------- | ---------- | ------------------------- | -------- | -------------------------------------------------------- |
| actions                                        | `custom`   |                           |          | An array of 0-2 action objects                           |
| children                                       | `string`   |                           |          | The message string for the alert                         |
| className                                      | `string`   |                           |          |                                                          |
| critical                                       | `custom`   |                           |          | Alert bars with `critical` will not autohide             |
| dataTest                                       | `string`   | `'dhis2-uicore-alertbar'` |          |                                                          |
| duration                                       | `number`   | `8000`                    |          |                                                          |
| hidden                                         | `boolean`  |                           |          |                                                          |
| icon                                           | `custom`   | `true`                    |          | A specific icon to override the default icon in the bar. |
| If `false` is provided, no icon will be shown. |
| permanent                                      | `boolean`  |                           |          |                                                          |
| success                                        | `custom`   |                           |          |                                                          |
| warning                                        | `custom`   |                           |          | Alert bars with `warning` will not autohide              |
| onHidden                                       | `function` |                           |          |                                                          |

### AlertStack

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { AlertStack } from '@dhis2-ui/alert'
```

#### Props

| Name      | Type     | Default                     | Required | Description |
| --------- | -------- | --------------------------- | -------- | ----------- |
| children  | `node`   |                             |          |             |
| className | `string` |                             |          |             |
| dataTest  | `string` | `'dhis2-uicore-alertstack'` |          |             |
