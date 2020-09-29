import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconWindow16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m15 13c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-10c0-.55228475.44771525-1 1-1h12c.5522847 0 1 .44771525 1 1zm-1-7h-12v7h12zm0-3h-12v2h12z"
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

IconWindow16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconWindow24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m20 4c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-16c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2zm-16 6v8h16v-8zm0-2h16v-2h-16z"
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

IconWindow24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconWindow = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconWindow16 className={className} color={color} />

        case 24:
            return <IconWindow24 className={className} color={color} />

        default:
            return null
    }
}

IconWindow.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconWindow.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconWindow }
