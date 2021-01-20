import propTypes from '@dhis2/prop-types'
import React from 'react'

export const ImageIcon = ({ src, onClick, size, dataTestId }) => (
    <div onClick={onClick} data-test={dataTestId}>
        <img src={src} alt="user avatar" />

        <style jsx>{`
            img {
                max-width: 100%;
                max-height: 100%;
            }

            div {
                width: ${size}px;
                height: ${size}px;
            }
        `}</style>
    </div>
)

ImageIcon.defaultProps = {
    onClick: undefined,
}

ImageIcon.propTypes = {
    size: propTypes.number.isRequired,
    src: propTypes.string.isRequired,
    dataTestId: propTypes.string,
    onClick: propTypes.func,
}
