import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconAddCircle16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 1c3.8659932 0 7 3.13400675 7 7 0 3.8659932-3.1340068 7-7 7-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7zm0 1c-3.3137085 0-6 2.6862915-6 6s2.6862915 6 6 6 6-2.6862915 6-6-2.6862915-6-6-6zm0 2c.55228475 0 1 .44771525 1 1v2h2c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-2v2c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-2h-2c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1h2v-2c0-.55228475.44771525-1 1-1z"
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

IconAddCircle16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconAddCircle24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm0 2c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8zm0 3c.5522847 0 1 .44771525 1 1v3h3c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-3v3c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-3h-3c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1h3v-3c0-.55228475.4477153-1 1-1z"
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

IconAddCircle24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconAddCircle = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconAddCircle16 className={className} color={color} />

        case 24:
            return <IconAddCircle24 className={className} color={color} />

        default:
            return null
    }
}

IconAddCircle.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconAddCircle.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconAddCircle }
