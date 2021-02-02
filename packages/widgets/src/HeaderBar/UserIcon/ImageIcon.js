import propTypes from '@dhis2/prop-types'
import React from 'react'

export const ImageIcon = ({ src, dataTest }) => (
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

ImageIcon.propTypes = {
    src: propTypes.string.isRequired,
    dataTest: propTypes.string,
}
