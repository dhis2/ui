import { useConfig } from '@dhis2/app-runtime'
import React from 'react'

export const useAvatarImgSrc = (avatarId: string): string | undefined => {
    const { baseUrl } = useConfig() as { baseUrl: string }

    return avatarId
        ? [baseUrl, 'api/fileResources', avatarId, 'data']
              .filter((part) => !!part)
              .map((part) => part.replace(/^\/+|\/+$/g, ''))
              .join('/')
        : undefined
}

export interface ImageAvatarProps {
    avatarId: string
    dataTest?: string
}

export const ImageAvatar = ({ avatarId, dataTest }: ImageAvatarProps) => {
    const src = useAvatarImgSrc(avatarId)

    return (
        <>
            <img src={src} alt="user avatar" data-test={dataTest} />
            <style jsx>{`
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                }
            `}</style>
        </>
    )
}
