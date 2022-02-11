## SharingDialog

From [`src/sharing-dialog.js`](./src/sharing-dialog.js)

| prop                                        |        type        |                                    default                                     |      required      | description                                                 |
| ------------------------------------------- | :----------------: | :----------------------------------------------------------------------------: | :----------------: | ----------------------------------------------------------- |
| **id**                                      |      `String`      |                                                                                | :white_check_mark: | The id of the object to share                               |
| **initialSharingSettings**                  |      `Shape`       | `{ name: '', allowPublic: true, public: ACCESS_NONE, groups: {}, users: {}, }` |        :x:         | Used to seed the component with data to show whilst loading |
| **initialSharingSettings.allowPublic**      |     `Boolean`      |                                                                                | :white_check_mark: |
| **initialSharingSettings.groups**           | `Object[#]<Shape>` |                                                                                |        :x:         |
| **initialSharingSettings.groups[#].access** |      `String`      |                                                                                | :white_check_mark: |
| **initialSharingSettings.groups[#].id**     |      `String`      |                                                                                | :white_check_mark: |
| **initialSharingSettings.groups[#].name**   |      `String`      |                                                                                | :white_check_mark: |
| **initialSharingSettings.name**             |      `String`      |                                                                                |        :x:         |
| **initialSharingSettings.public**           |   `Enum(import {   |

    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,

} from './constants.js', import {
ACCESS_NONE,
ACCESS_VIEW_ONLY,
ACCESS_VIEW_AND_EDIT,
VISUALIZATION,
DASHBOARD,
} from './constants.js', import {
ACCESS_NONE,
ACCESS_VIEW_ONLY,
ACCESS_VIEW_AND_EDIT,
VISUALIZATION,
DASHBOARD,
} from './constants.js')`| | :x: | **initialSharingSettings.users** |`Object[#]<Shape>`| | :x: | **initialSharingSettings.users[#].access** |`String`| | :white_check_mark: | **initialSharingSettings.users[#].id** |`String`| | :white_check_mark: | **initialSharingSettings.users[#].name** |`String`| | :white_check_mark: | **onClose** |`Function`|`() => {}`| :x: | **onError** |`Function`|`() => {}`| :x: | **onSave** |`Function`|`() => {}`| :x: | **type** |`Enum(import {
ACCESS_NONE,
ACCESS_VIEW_ONLY,
ACCESS_VIEW_AND_EDIT,
VISUALIZATION,
DASHBOARD,
} from './constants.js', import {
ACCESS_NONE,
ACCESS_VIEW_ONLY,
ACCESS_VIEW_AND_EDIT,
VISUALIZATION,
DASHBOARD,
} from './constants.js')` | | :white_check_mark: | The type of object to share
