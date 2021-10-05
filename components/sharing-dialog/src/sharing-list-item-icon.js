import { colors } from '@dhis2/ui-constants'
import { IconWorld24, IconUserGroup24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { Avatar } from './avatar'
import {
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_USER,
    SHARE_TARGET_GROUP,
} from './sharing-constants'

export const SharingListItemIcon = ({ target }) => {
    switch (target) {
        case SHARE_TARGET_EXTERNAL:
            return <IconWorld24 color={colors.grey600} />
        case SHARE_TARGET_PUBLIC:
        case SHARE_TARGET_GROUP:
            return <IconUserGroup24 color={colors.grey600} />
        case SHARE_TARGET_USER:
            return <Avatar name={name} />
        default:
            return null
    }
}

SharingListItemIcon.propTypes = {
    target: PropTypes.string.isRequired,
}
