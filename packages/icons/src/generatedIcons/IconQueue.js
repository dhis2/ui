import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconQueue16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 13c0 .5522847-.4477153 1-1 1h-6c-.55228475 0-1-.4477153-1-1zm1-2c0 .5522847-.4477153 1-1 1h-8c-.55228475 0-1-.4477153-1-1zm0-9c.5522847 0 1 .44771525 1 1v6c0 .55228475-.4477153 1-1 1h-10c-.55228475 0-1-.44771525-1-1v-6c0-.55228475.44771525-1 1-1zm0 1h-10v6h10z"
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

IconQueue16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconQueue24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19 3c1.1045695 0 2 .8954305 2 2v8c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-8c0-1.1045695.8954305-2 2-2zm0 2h-14v8h14zm-15 11h16c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2zm1 3h14c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2z"
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

IconQueue24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconQueue = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconQueue16 className={className} color={color} />

        case 24:
            return <IconQueue24 className={className} color={color} />

        default:
            return null
    }
}

IconQueue.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconQueue.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconQueue }
