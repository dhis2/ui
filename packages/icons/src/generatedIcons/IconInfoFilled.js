import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconInfoFilled16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 1c3.8659932 0 7 3.13400675 7 7 0 3.8659932-3.1340068 7-7 7-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7zm1 6h-2v4h-1v1h4v-1h-1zm-1-4c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1 1-.44771525 1-1-.44771525-1-1-1z"
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

IconInfoFilled16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconInfoFilled24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm1 9h-2v6h2zm-1-4c-.5522847 0-1 .44771525-1 1s.4477153 1 1 1 1-.44771525 1-1-.4477153-1-1-1z"
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

IconInfoFilled24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconInfoFilled = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconInfoFilled16 className={className} color={color} />

        case 24:
            return <IconInfoFilled24 className={className} color={color} />

        default:
            return null
    }
}

IconInfoFilled.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconInfoFilled.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconInfoFilled }
