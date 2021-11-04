import PropTypes from 'prop-types'
import React from 'react'
import { ImageAvatar } from './image-avatar.js'
import { TextAvatar } from './text-avatar.js'

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
