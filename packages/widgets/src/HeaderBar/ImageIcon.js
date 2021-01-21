import propTypes from '@dhis2/prop-types'
import React from 'react'

export const ImageIcon = ({ src, onClick, dataTestId }) => (
    <>
        <img
            onClick={onClick}
            src={src}
            alt="user avatar"
            data-test={dataTestId}
        />

        <style jsx>{`
            img {
                max-width: 100%;
                max-height: 100%;
            }
        `}</style>
    </>
)

ImageIcon.defaultProps = {
    onClick: undefined,
}

ImageIcon.propTypes = {
    src: propTypes.string.isRequired,
    dataTestId: propTypes.string,
    onClick: propTypes.func,
}
