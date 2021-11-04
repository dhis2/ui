import { useConfig } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React from 'react'

const useAvatarImgSrc = (avatarId) => {
    const { baseUrl } = useConfig()

    return avatarId
        ? [baseUrl, 'api/fileResources', avatarId, 'data']
              .filter((part) => !!part)
              .map((part) => part.replace(/^\/+|\/+$/g, ''))
              .join('/')
        : null
}

export const ImageIcon = ({ avatarId, dataTest }) => {
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

ImageIcon.propTypes = {
    avatarId: PropTypes.string.isRequired,
    dataTest: PropTypes.string,
}
