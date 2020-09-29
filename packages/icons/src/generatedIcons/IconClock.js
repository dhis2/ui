import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconClock16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 2c3.3137085 0 6 2.6862915 6 6s-2.6862915 6-6 6-6-2.6862915-6-6 2.6862915-6 6-6zm0 1c-2.76142375 0-5 2.23857625-5 5 0 2.7614237 2.23857625 5 5 5 2.7614237 0 5-2.2385763 5-5 0-2.76142375-2.2385763-5-5-5zm.5 1.5v3.293l1.8535534 1.85344661-.70710679.70710679-2.14644661-2.14644662v-3.70710678z"
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

IconClock16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconClock24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm0 2c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8zm1 2v5.585l2.7071068 2.7078932-1.4142136 1.4142136-3.2928932-3.2928932v-6.4142136z"
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

IconClock24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconClock = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconClock16 className={className} color={color} />

        case 24:
            return <IconClock24 className={className} color={color} />

        default:
            return null
    }
}

IconClock.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconClock.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconClock }
