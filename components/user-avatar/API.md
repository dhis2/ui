## UserAvatar

From [`src/user-avatar.js`](./src/user-avatar.js)

An avatar is a visual icon that represents a user.

Use an avatar to give extra information when a user is mentioned or displayed in DHIS2. The avatar shows a user uploaded photograph or initials. The avatar is intended to give context and help to identify different users. An avatar is usually shown alongside the user name, but can be used alone to show a visual hint of a user.

See specification: [Design System](https://github.com/dhis2/design-system/blob/master/atoms/avatar.md)

```js
import { UserAvatar } from '@dhis2/ui'
```

| prop           |   type   |           default           |      required      | description |
| -------------- | :------: | :-------------------------: | :----------------: | ----------- |
| **avatarId**   | `String` |                             |        :x:         |
| **className**  | `String` |                             |        :x:         |
| **dataTest**   | `String` | `'dhis2-uicore-useravatar'` |        :x:         |
| **extralarge** | `custom` |                             |        :x:         |
| **extrasmall** | `custom` |                             |        :x:         |
| **large**      | `custom` |                             |        :x:         |
| **medium**     | `custom` |                             |        :x:         |
| **name**       | `String` |                             | :white_check_mark: |
| **small**      | `custom` |                             |        :x:         |
