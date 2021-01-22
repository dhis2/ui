import propTypes from '@dhis2/prop-types'
import React from 'react'

export const ImageIcon = ({ src, dataTestId }) => (
    <>
        <img src={src} alt="user avatar" data-test={dataTestId} />

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

ImageIcon.propTypes = {
    src: propTypes.string.isRequired,
    dataTestId: propTypes.string,
}
