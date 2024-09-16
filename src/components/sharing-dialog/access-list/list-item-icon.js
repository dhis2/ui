import { colors } from '../../../constants/index.js'
import { IconWorld24, IconUserGroup24 } from '../../../icons/index.js'
import { UserAvatar } from '../../user-avatar/index.js'
import PropTypes from 'prop-types'
import React from 'react'
import {
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_USER,
    SHARE_TARGET_GROUP,
} from '../constants.js'

export const ListItemIcon = ({ target, name }) => {
    switch (target) {
        case SHARE_TARGET_EXTERNAL:
            return <IconWorld24 color={colors.grey600} />
        case SHARE_TARGET_PUBLIC:
        case SHARE_TARGET_GROUP:
            return <IconUserGroup24 color={colors.grey600} />
        case SHARE_TARGET_USER:
            return <UserAvatar name={name} small />
        default:
            return null
    }
}

ListItemIcon.propTypes = {
    target: PropTypes.oneOf([
        SHARE_TARGET_EXTERNAL,
        SHARE_TARGET_PUBLIC,
        SHARE_TARGET_USER,
        SHARE_TARGET_GROUP,
    ]).isRequired,
    name: PropTypes.string,
}
