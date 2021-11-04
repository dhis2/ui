import PropTypes from 'prop-types'
import React from 'react'
import { ImageIcon } from './image-icon.js'
import { TextIcon } from './text-icon.js'

export const UserIcon = ({ avatarId, name, dataTest }) => {
    if (avatarId) {
        return <ImageIcon avatarId={avatarId} dataTest={`${dataTest}-image`} />
    } else {
        return <TextIcon name={name} dataTest={`${dataTest}-text`} />
    }
}

UserIcon.propTypes = {
    name: PropTypes.string.isRequired,
    avatarId: PropTypes.string,
}
