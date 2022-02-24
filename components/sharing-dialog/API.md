### SharingDialog

#### Usage

**Note**: If possible, import the component from the main UI (`@dhis2/ui`) package.

```js
import { SharingDialog } from '@dhis2-ui/sharing-dialog'
```

#### Props

| Name | Type      | Default | Required | Description                   |
| ---- | --------- | ------- | -------- | ----------------------------- |
| id   | `string`  |         | \*       | The id of the object to share |
| type | `import { |

    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,

} from './constants.js' │ import {
ACCESS_NONE,
ACCESS_VIEW_ONLY,
ACCESS_VIEW_AND_EDIT,
VISUALIZATION,
DASHBOARD,
} from './constants.js'`||*|The type of object to share| |initialSharingSettings|`{
"allowPublic": "boolean",
"groups": "objectOf",
"name": "string",
"public": "import {\n ACCESS_NONE,\n ACCESS_VIEW_ONLY,\n ACCESS_VIEW_AND_EDIT,\n VISUALIZATION,\n DASHBOARD,\n} from './constants.js' │ import {\n ACCESS_NONE,\n ACCESS_VIEW_ONLY,\n ACCESS_VIEW_AND_EDIT,\n VISUALIZATION,\n DASHBOARD,\n} from './constants.js' │ import {\n ACCESS_NONE,\n ACCESS_VIEW_ONLY,\n ACCESS_VIEW_AND_EDIT,\n VISUALIZATION,\n DASHBOARD,\n} from './constants.js'",
"users": "objectOf"
}`|`{
name: '',
allowPublic: true,
public: ACCESS_NONE,
groups: {},
users: {},
}`||Used to seed the component with data to show whilst loading| |onClose|`function`|`() => {}`||| |onError|`function`|`() => {}`||| |onSave|`function`|`() => {}`|||
