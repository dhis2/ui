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
|dataSharing|boolean|`false`||Whether to expose the ability to set data sharing (in addition to metadata sharing)|
|dataTest|string|`'dhis2-uicore-sharingdialog'`|||
|initialSharingSettings|object|{<br/>  "allowPublic": "boolean",<br/>  "name": "string",<br/>  "public": {"data": 'ACCESS_NONE' \| 'ACCESS_VIEW_ONLY' \| 'ACCESS_VIEW_AND_EDIT',"metadata": 'ACCESS_NONE' \| 'ACCESS_VIEW_ONLY' \| 'ACCESS_VIEW_AND_EDIT'},<br/>  "groups": "objectOf (see below)",<br/>"users": "objectOf (see below)",<br/>} <br/><br/>users and group objects have format of: <br/> {"name": "string",<br/> "id": "string",<br/>  "access": {"data": 'ACCESS_NONE' \| 'ACCESS_VIEW_ONLY' \| 'ACCESS_VIEW_AND_EDIT',"metadata": 'ACCESS_NONE' \| 'ACCESS_VIEW_ONLY' \| 'ACCESS_VIEW_AND_EDIT'}}||Used to seed the component with data to show whilst loading|
|onClose|function|`() => {}`|||
|onError|function|`() => {}`|||
|onSave|function|`() => {}`|||
