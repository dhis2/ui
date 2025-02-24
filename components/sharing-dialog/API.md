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
|type|DIALOG_TYPES_LIST||*|The type of object to share|
|dataSharing|boolean|``false``||Whether to expose the ability to set data sharing (in addition to metadata sharing)|
|dataTest|string|``'dhis2-uicore-sharingdialog'``|||
|initialSharingSettings|{<br/>  "allowPublic": "boolean",<br/>  "groups": "objectOf",<br/>  "name": "string",<br/>  "public": "{<br/>  \"data\": \"import {\\n    ACCESS_NONE,\\n    ACCESS_VIEW_ONLY,\\n    ACCESS_VIEW_AND_EDIT,\\n    DIALOG_TYPES_LIST,\\n} from './constants.js' │ import {\\n    ACCESS_NONE,\\n    ACCESS_VIEW_ONLY,\\n    ACCESS_VIEW_AND_EDIT,\\n    DIALOG_TYPES_LIST,\\n} from './constants.js' │ import {\\n    ACCESS_NONE,\\n    ACCESS_VIEW_ONLY,\\n    ACCESS_VIEW_AND_EDIT,\\n    DIALOG_TYPES_LIST,\\n} from './constants.js'\",<br/>  \"metadata\": \"import {\\n    ACCESS_NONE,\\n    ACCESS_VIEW_ONLY,\\n    ACCESS_VIEW_AND_EDIT,\\n    DIALOG_TYPES_LIST,\\n} from './constants.js' │ import {\\n    ACCESS_NONE,\\n    ACCESS_VIEW_ONLY,\\n    ACCESS_VIEW_AND_EDIT,\\n    DIALOG_TYPES_LIST,\\n} from './constants.js' │ import {\\n    ACCESS_NONE,\\n    ACCESS_VIEW_ONLY,\\n    ACCESS_VIEW_AND_EDIT,\\n    DIALOG_TYPES_LIST,\\n} from './constants.js'\"<br/>} │ import {\n    ACCESS_NONE,\n    ACCESS_VIEW_ONLY,\n    ACCESS_VIEW_AND_EDIT,\n    DIALOG_TYPES_LIST,\n} from './constants.js' │ import {\n    ACCESS_NONE,\n    ACCESS_VIEW_ONLY,\n    ACCESS_VIEW_AND_EDIT,\n    DIALOG_TYPES_LIST,\n} from './constants.js' │ import {\n    ACCESS_NONE,\n    ACCESS_VIEW_ONLY,\n    ACCESS_VIEW_AND_EDIT,\n    DIALOG_TYPES_LIST,\n} from './constants.js'",<br/>  "users": "objectOf"<br/>}|``{
    name: '',
    allowPublic: true,
    public: { data: ACCESS_NONE, metadata: ACCESS_NONE },
    groups: [],
    users: [],
}``||Used to seed the component with data to show whilst loading|
|onClose|function|``() => {}``|||
|onError|function|``() => {}``|||
|onSave|function|``() => {}``|||
