import React from 'react'
import propTypes from '@dhis2/prop-types'

export const ImageIcon = ({ src, onClick, dataTestId }) => (
    <div onClick={onClick} data-test={dataTestId}>
        <img src={src} alt="user avatar" />

        <style jsx>{`
            img {
                max-width: 100%;
                max-height: 100%;
            }

            div {
                width: 48px;
                height: 48px;
            }
        `}</style>
    </div>
)

ImageIcon.defaultProps = {
    onClick: undefined,
}

ImageIcon.propTypes = {
    src: propTypes.string.isRequired,
    dataTestId: propTypes.string,
    onClick: propTypes.func,
}
