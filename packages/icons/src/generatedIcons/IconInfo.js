import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconInfo16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 1c3.8659932 0 7 3.13400675 7 7 0 3.8659932-3.1340068 7-7 7-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7zm0 1c-3.3137085 0-6 2.6862915-6 6s2.6862915 6 6 6 6-2.6862915 6-6-2.6862915-6-6-6zm.5 5v4h1.5v1h-4v-1h1.5v-4zm-.5-3c.41421356 0 .75.33578644.75.75s-.33578644.75-.75.75-.75-.33578644-.75-.75.33578644-.75.75-.75z"
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

IconInfo16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconInfo24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm0 2c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8zm1 7v6h-2v-6zm-1-4c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1-1-.44771525-1-1 .4477153-1 1-1z"
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

IconInfo24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconInfo = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconInfo16 className={className} color={color} />

        case 24:
            return <IconInfo24 className={className} color={color} />

        default:
            return null
    }
}

IconInfo.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconInfo.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconInfo }
