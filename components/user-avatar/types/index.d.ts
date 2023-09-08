import * as React from 'react'

export interface UserAvatarProps {
    name: string
    avatarId?: string
    className?: string
    dataTest?: string
    extralarge?: boolean
    extrasmall?: boolean
    large?: boolean
    medium?: boolean
    small?: boolean
}

export const UserAvatar: React.FC<UserAvatarProps>
