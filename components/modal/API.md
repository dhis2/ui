### Modal

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { Modal } from '@dhis2-ui/modal'
```

#### Props

| Name      | Type     | Default                | Required | Description                         |
| --------- | -------- | ---------------------- | -------- | ----------------------------------- |
| children  | node     |                        |          |                                     |
| className | string   |                        |          |                                     |
| dataTest  | string   | `'dhis2-uicore-modal'` |          |                                     |
| fluid     | boolean  |                        |          |                                     |
| hide      | boolean  |                        |          |                                     |
| large     | custom   |                        |          |                                     |
| position  | custom   | `'top'`                |          |                                     |
| small     | custom   |                        |          |                                     |
| onClose   | function |                        |          | Callback used when the Modal closes |

### ModalActions

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { ModalActions } from '@dhis2-ui/modal'
```

#### Props

| Name     | Type   | Default                       | Required | Description |
| -------- | ------ | ----------------------------- | -------- | ----------- |
| children | node   |                               |          |             |
| dataTest | string | `'dhis2-uicore-modalactions'` |          |             |

### ModalContent

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { ModalContent } from '@dhis2-ui/modal'
```

#### Props

| Name      | Type   | Default                       | Required | Description |
| --------- | ------ | ----------------------------- | -------- | ----------- |
| children  | node   |                               |          |             |
| className | string |                               |          |             |
| dataTest  | string | `'dhis2-uicore-modalcontent'` |          |             |

### ModalTitle

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { ModalTitle } from '@dhis2-ui/modal'
```

#### Props

| Name     | Type   | Default                     | Required | Description |
| -------- | ------ | --------------------------- | -------- | ----------- |
| children | string |                             |          |             |
| dataTest | string | `'dhis2-uicore-modaltitle'` |          |             |
