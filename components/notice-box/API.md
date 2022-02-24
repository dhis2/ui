### NoticeBox

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { NoticeBox } from '@dhis2-ui/notice-box'
```

#### Props

| Name      | Type     | Default                    | Required | Description                                                                |
| --------- | -------- | -------------------------- | -------- | -------------------------------------------------------------------------- |
| children  | `node`   |                            |          |                                                                            |
| className | `string` |                            |          |                                                                            |
| dataTest  | `string` | `'dhis2-uicore-noticebox'` |          |                                                                            |
| error     | `custom` |                            |          | Applies 'error' message styles. Mutually exclusive with the `warning` prop |
| title     | `string` |                            |          |                                                                            |
| warning   | `custom` |                            |          | Applies 'warning' message styles. Mutually exclusive with the `error` prop |
