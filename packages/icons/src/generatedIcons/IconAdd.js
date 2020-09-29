import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconAdd16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 2c.55228475 0 1 .44771525 1 1v4h4c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-4v4c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-4h-4c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1h4v-4c0-.55228475.44771525-1 1-1z"
            fill="inherit"
            fillRule="evenodd"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconAdd16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconAdd24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 3c.5522847 0 1 .44771525 1 1v7h7c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-7v7c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-7h-7c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1h7v-7c0-.55228475.4477153-1 1-1z"
            fill="inherit"
            fillRule="evenodd"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconAdd24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconAdd = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconAdd16 className={className} color={color} />

        case 24:
            return <IconAdd24 className={className} color={color} />

        default:
            return null
    }
}

IconAdd.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconAdd.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconAdd }
