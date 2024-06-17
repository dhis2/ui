### SharingDialog

#### Usage

To use `SharingDialog`, you can import the component from the `@dhis2/ui` library  


```js
import { SharingDialog } from '@dhis2/ui'
```


#### Props

|Name|Type|Default|Required|Description|
|---|---|---|---|---|
|id|string||*|The id of the object to share|
|type|import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,
    EVENT_VISUALIZATION,
    INTERPRETATION,
} from './constants.js' │ import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,
    EVENT_VISUALIZATION,
    INTERPRETATION,
} from './constants.js' │ import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,
    EVENT_VISUALIZATION,
    INTERPRETATION,
} from './constants.js' │ import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,
    EVENT_VISUALIZATION,
    INTERPRETATION,
} from './constants.js'||*|The type of object to share|
|dataTest|string|`'dhis2-uicore-sharingdialog'`|||
|initialSharingSettings|{<br/>  "allowPublic": "boolean",<br/>  "groups": "objectOf",<br/>  "name": "string",<br/>  "public": "import {\n    ACCESS_NONE,\n    ACCESS_VIEW_ONLY,\n    ACCESS_VIEW_AND_EDIT,\n    VISUALIZATION,\n    DASHBOARD,\n    EVENT_VISUALIZATION,\n    INTERPRETATION,\n} from './constants.js' │ import {\n    ACCESS_NONE,\n    ACCESS_VIEW_ONLY,\n    ACCESS_VIEW_AND_EDIT,\n    VISUALIZATION,\n    DASHBOARD,\n    EVENT_VISUALIZATION,\n    INTERPRETATION,\n} from './constants.js' │ import {\n    ACCESS_NONE,\n    ACCESS_VIEW_ONLY,\n    ACCESS_VIEW_AND_EDIT,\n    VISUALIZATION,\n    DASHBOARD,\n    EVENT_VISUALIZATION,\n    INTERPRETATION,\n} from './constants.js'",<br/>  "users": "objectOf"<br/>}|`{
    name: '',
    allowPublic: true,
    public: ACCESS_NONE,
    groups: {},
    users: {},
}`|||
|onClose|function|`() => {}`|||
|onError|function|`() => {}`|||
|onSave|function|`() => {}`|||
