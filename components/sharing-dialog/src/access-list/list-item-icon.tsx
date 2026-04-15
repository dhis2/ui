import { colors } from '@dhis2/ui-constants'
import { IconWorld24, IconUserGroup24 } from '@dhis2/ui-icons'
import { UserAvatar } from '@dhis2-ui/user-avatar'
import React from 'react'
import {
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_USER,
    SHARE_TARGET_GROUP,
} from '../constants.ts'

export interface ListItemIconProps {
    target:
        | typeof SHARE_TARGET_EXTERNAL
        | typeof SHARE_TARGET_PUBLIC
        | typeof SHARE_TARGET_USER
        | typeof SHARE_TARGET_GROUP
    name?: string
}

export const ListItemIcon = ({ target, name }: ListItemIconProps) => {
    switch (target) {
        case SHARE_TARGET_EXTERNAL:
            return <IconWorld24 color={colors.grey600} />
        case SHARE_TARGET_PUBLIC:
        case SHARE_TARGET_GROUP:
            return <IconUserGroup24 color={colors.grey600} />
        case SHARE_TARGET_USER:
            return <UserAvatar name={name ?? ''} small />
        default:
            return null
    }
}
