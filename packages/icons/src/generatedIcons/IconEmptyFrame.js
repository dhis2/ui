import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconEmptyFrame16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m4 15h-2c-.55228475 0-1-.4477153-1-1v-2h1v2h2zm5.5-1v1h-3v-1zm4.5 0v-2h1v2c0 .5522847-.4477153 1-1 1h-2v-1zm-13-7.5h1v3h-1zm13 0h1v3h-1zm0-4.5h-2v-1h2c.5522847 0 1 .44771525 1 1v2h-1zm-7.5 0v-1h3v1zm-4.5 0v2h-1v-2c0-.55228475.44771525-1 1-1h2v1z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconEmptyFrame16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconEmptyFrame24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19 19v-2h2v2c0 1.1045695-.8954305 2-2 2h-2v-2zm-5 0v2h-4v-2zm-7 2h-2c-1.1045695 0-2-.8954305-2-2v-2h2v2h2zm-4-11h2v4h-2zm16 0h2v4h-2zm0-5h-2v-2h2c1.1045695 0 2 .8954305 2 2v2h-2zm-9 0v-2h4v2zm-5 0v2h-2v-2c0-1.1045695.8954305-2 2-2h2v2z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconEmptyFrame24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconEmptyFrame = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconEmptyFrame16 className={className} color={color} />

        case 24:
            return <IconEmptyFrame24 className={className} color={color} />

        default:
            return null
    }
}

IconEmptyFrame.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconEmptyFrame.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconEmptyFrame }
