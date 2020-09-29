import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconLayoutRows16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13 1c.5522847 0 1 .44771525 1 1v11c0 .5522847-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1v-11c0-.55228475.44771525-1 1-1zm-10 10v2h10v-2zm10-6h-10v2h10zm0-3h-10v2h10zm-10 8h10v-2h-10z"
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

IconLayoutRows16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLayoutRows24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m18 3c1.1045695 0 2 .8954305 2 2v14c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-14c0-1.1045695.8954305-2 2-2zm-12 14v2h12v-2zm12-8h-12v2h12zm0-4h-12v2h12zm-12 10h12v-2h-12z"
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

IconLayoutRows24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLayoutRows = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconLayoutRows16 className={className} color={color} />

        case 24:
            return <IconLayoutRows24 className={className} color={color} />

        default:
            return null
    }
}

IconLayoutRows.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconLayoutRows.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconLayoutRows }
