import PropTypes from 'prop-types'
import React from 'react'
import { ImageAvatar } from './image-avatar.js'
import { TextAvatar } from './text-avatar.js'

/**
An avatar is a visual icon that represents a user.

Avatars are used to give extra information when a user is mentioned or displayed in DHIS2. The avatar contains either user uploaded photograph, initials or a default icon. The avatar is intended to give context to a user and help to quickly identify different users. An avatar is usually shown alongside the user name, but can be used alone to show a visual hint of a user.

See specification: [Design System](https://github.com/dhis2/design-system/blob/master/atoms/avatar.md)

```js
import { UserAvatar } from '@dhis2/ui'
```
*/

export const UserAvatar = ({ avatarId, name, dataTest }) => {
    if (avatarId) {
        return (
            <ImageAvatar avatarId={avatarId} dataTest={`${dataTest}-image`} />
        )
    } else {
        return <TextAvatar name={name} dataTest={`${dataTest}-text`} />
    }
}

UserAvatar.defaultProps = {
    dataTest: 'dhis2-uicore-useravatar',
}

UserAvatar.propTypes = {
    name: PropTypes.string.isRequired,
    avatarId: PropTypes.string,
}
