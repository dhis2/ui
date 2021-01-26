import propTypes from '@dhis2/prop-types'
import React from 'react'
import { ImageIcon } from './ImageIcon.js'
import { TextIcon } from './TextIcon.js'

export const UserIcon = ({ avatarUrl, name, dataTest }) => {
    if (avatarUrl) {
        return <ImageIcon src={avatarUrl} dataTest={`${dataTest}-image`} />
    } else {
        return <TextIcon name={name} dataTest={`${dataTest}-text`} />
    }
}

UserIcon.propTypes = {
    name: propTypes.string.isRequired,
    avatarUrl: propTypes.string,
}
